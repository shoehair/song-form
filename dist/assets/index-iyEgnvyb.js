(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();function nu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zs={exports:{}},na={},Ms={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qt=Symbol.for("react.element"),tu=Symbol.for("react.portal"),ou=Symbol.for("react.fragment"),au=Symbol.for("react.strict_mode"),iu=Symbol.for("react.profiler"),ru=Symbol.for("react.provider"),su=Symbol.for("react.context"),hu=Symbol.for("react.forward_ref"),lu=Symbol.for("react.suspense"),uu=Symbol.for("react.memo"),mu=Symbol.for("react.lazy"),Pr=Symbol.iterator;function du(e){return e===null||typeof e!="object"?null:(e=Pr&&e[Pr]||e["@@iterator"],typeof e=="function"?e:null)}var Js={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fs=Object.assign,Hs={};function it(e,n,t){this.props=e,this.context=n,this.refs=Hs,this.updater=t||Js}it.prototype.isReactComponent={};it.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};it.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Rs(){}Rs.prototype=it.prototype;function Ni(e,n,t){this.props=e,this.context=n,this.refs=Hs,this.updater=t||Js}var Ei=Ni.prototype=new Rs;Ei.constructor=Ni;Fs(Ei,it.prototype);Ei.isPureReactComponent=!0;var Lr=Array.isArray,Us=Object.prototype.hasOwnProperty,_i={current:null},qs={key:!0,ref:!0,__self:!0,__source:!0};function Ks(e,n,t){var o,a={},i=null,r=null;if(n!=null)for(o in n.ref!==void 0&&(r=n.ref),n.key!==void 0&&(i=""+n.key),n)Us.call(n,o)&&!qs.hasOwnProperty(o)&&(a[o]=n[o]);var s=arguments.length-2;if(s===1)a.children=t;else if(1<s){for(var h=Array(s),u=0;u<s;u++)h[u]=arguments[u+2];a.children=h}if(e&&e.defaultProps)for(o in s=e.defaultProps,s)a[o]===void 0&&(a[o]=s[o]);return{$$typeof:qt,type:e,key:i,ref:r,props:a,_owner:_i.current}}function yu(e,n){return{$$typeof:qt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function zi(e){return typeof e=="object"&&e!==null&&e.$$typeof===qt}function cu(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Gr=/\/+/g;function ka(e,n){return typeof e=="object"&&e!==null&&e.key!=null?cu(""+e.key):n.toString(36)}function po(e,n,t,o,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(i){case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case qt:case tu:r=!0}}if(r)return r=e,a=a(r),e=o===""?"."+ka(r,0):o,Lr(a)?(t="",e!=null&&(t=e.replace(Gr,"$&/")+"/"),po(a,n,t,"",function(u){return u})):a!=null&&(zi(a)&&(a=yu(a,t+(!a.key||r&&r.key===a.key?"":(""+a.key).replace(Gr,"$&/")+"/")+e)),n.push(a)),1;if(r=0,o=o===""?".":o+":",Lr(e))for(var s=0;s<e.length;s++){i=e[s];var h=o+ka(i,s);r+=po(i,n,t,h,a)}else if(h=du(e),typeof h=="function")for(e=h.call(e),s=0;!(i=e.next()).done;)i=i.value,h=o+ka(i,s++),r+=po(i,n,t,h,a);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return r}function no(e,n,t){if(e==null)return e;var o=[],a=0;return po(e,o,"","",function(i){return n.call(t,i,a++)}),o}function gu(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var re={current:null},ko={transition:null},fu={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:ko,ReactCurrentOwner:_i};j.Children={map:no,forEach:function(e,n,t){no(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return no(e,function(){n++}),n},toArray:function(e){return no(e,function(n){return n})||[]},only:function(e){if(!zi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=it;j.Fragment=ou;j.Profiler=iu;j.PureComponent=Ni;j.StrictMode=au;j.Suspense=lu;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fu;j.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=Fs({},e.props),a=e.key,i=e.ref,r=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,r=_i.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(h in n)Us.call(n,h)&&!qs.hasOwnProperty(h)&&(o[h]=n[h]===void 0&&s!==void 0?s[h]:n[h])}var h=arguments.length-2;if(h===1)o.children=t;else if(1<h){s=Array(h);for(var u=0;u<h;u++)s[u]=arguments[u+2];o.children=s}return{$$typeof:qt,type:e.type,key:a,ref:i,props:o,_owner:r}};j.createContext=function(e){return e={$$typeof:su,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ru,_context:e},e.Consumer=e};j.createElement=Ks;j.createFactory=function(e){var n=Ks.bind(null,e);return n.type=e,n};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:hu,render:e}};j.isValidElement=zi;j.lazy=function(e){return{$$typeof:mu,_payload:{_status:-1,_result:e},_init:gu}};j.memo=function(e,n){return{$$typeof:uu,type:e,compare:n===void 0?null:n}};j.startTransition=function(e){var n=ko.transition;ko.transition={};try{e()}finally{ko.transition=n}};j.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};j.useCallback=function(e,n){return re.current.useCallback(e,n)};j.useContext=function(e){return re.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return re.current.useDeferredValue(e)};j.useEffect=function(e,n){return re.current.useEffect(e,n)};j.useId=function(){return re.current.useId()};j.useImperativeHandle=function(e,n,t){return re.current.useImperativeHandle(e,n,t)};j.useInsertionEffect=function(e,n){return re.current.useInsertionEffect(e,n)};j.useLayoutEffect=function(e,n){return re.current.useLayoutEffect(e,n)};j.useMemo=function(e,n){return re.current.useMemo(e,n)};j.useReducer=function(e,n,t){return re.current.useReducer(e,n,t)};j.useRef=function(e){return re.current.useRef(e)};j.useState=function(e){return re.current.useState(e)};j.useSyncExternalStore=function(e,n,t){return re.current.useSyncExternalStore(e,n,t)};j.useTransition=function(){return re.current.useTransition()};j.version="18.2.0";Ms.exports=j;var kn=Ms.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wu=kn,Iu=Symbol.for("react.element"),pu=Symbol.for("react.fragment"),ku=Object.prototype.hasOwnProperty,vu=wu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bu={key:!0,ref:!0,__self:!0,__source:!0};function $s(e,n,t){var o,a={},i=null,r=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(r=n.ref);for(o in n)ku.call(n,o)&&!bu.hasOwnProperty(o)&&(a[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps,n)a[o]===void 0&&(a[o]=n[o]);return{$$typeof:Iu,type:e,key:i,ref:r,props:a,_owner:vu.current}}na.Fragment=pu;na.jsx=$s;na.jsxs=$s;zs.exports=na;var pe=zs.exports,Qs={exports:{}},we={},Xs={exports:{}},Zs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(C,B){var A=C.length;C.push(B);e:for(;0<A;){var J=A-1>>>1,q=C[J];if(0<a(q,B))C[J]=B,C[A]=q,A=J;else break e}}function t(C){return C.length===0?null:C[0]}function o(C){if(C.length===0)return null;var B=C[0],A=C.pop();if(A!==B){C[0]=A;e:for(var J=0,q=C.length,Zt=q>>>1;J<Zt;){var fn=2*(J+1)-1,pa=C[fn],wn=fn+1,eo=C[wn];if(0>a(pa,A))wn<q&&0>a(eo,pa)?(C[J]=eo,C[wn]=A,J=wn):(C[J]=pa,C[fn]=A,J=fn);else if(wn<q&&0>a(eo,A))C[J]=eo,C[wn]=A,J=wn;else break e}}return B}function a(C,B){var A=C.sortIndex-B.sortIndex;return A!==0?A:C.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var r=Date,s=r.now();e.unstable_now=function(){return r.now()-s}}var h=[],u=[],g=1,y=null,c=3,I=!1,p=!1,k=!1,D=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,l=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(C){for(var B=t(u);B!==null;){if(B.callback===null)o(u);else if(B.startTime<=C)o(u),B.sortIndex=B.expirationTime,n(h,B);else break;B=t(u)}}function f(C){if(k=!1,d(C),!p)if(t(h)!==null)p=!0,wa(b);else{var B=t(u);B!==null&&Ia(f,B.startTime-C)}}function b(C,B){p=!1,k&&(k=!1,m(S),S=-1),I=!0;var A=c;try{for(d(B),y=t(h);y!==null&&(!(y.expirationTime>B)||C&&!Se());){var J=y.callback;if(typeof J=="function"){y.callback=null,c=y.priorityLevel;var q=J(y.expirationTime<=B);B=e.unstable_now(),typeof q=="function"?y.callback=q:y===t(h)&&o(h),d(B)}else o(h);y=t(h)}if(y!==null)var Zt=!0;else{var fn=t(u);fn!==null&&Ia(f,fn.startTime-B),Zt=!1}return Zt}finally{y=null,c=A,I=!1}}var T=!1,W=null,S=-1,M=5,O=-1;function Se(){return!(e.unstable_now()-O<M)}function ht(){if(W!==null){var C=e.unstable_now();O=C;var B=!0;try{B=W(!0,C)}finally{B?lt():(T=!1,W=null)}}else T=!1}var lt;if(typeof l=="function")lt=function(){l(ht)};else if(typeof MessageChannel<"u"){var Vr=new MessageChannel,eu=Vr.port2;Vr.port1.onmessage=ht,lt=function(){eu.postMessage(null)}}else lt=function(){D(ht,0)};function wa(C){W=C,T||(T=!0,lt())}function Ia(C,B){S=D(function(){C(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){p||I||(p=!0,wa(b))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return c},e.unstable_getFirstCallbackNode=function(){return t(h)},e.unstable_next=function(C){switch(c){case 1:case 2:case 3:var B=3;break;default:B=c}var A=c;c=B;try{return C()}finally{c=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,B){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var A=c;c=C;try{return B()}finally{c=A}},e.unstable_scheduleCallback=function(C,B,A){var J=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?J+A:J):A=J,C){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=A+q,C={id:g++,callback:B,priorityLevel:C,startTime:A,expirationTime:q,sortIndex:-1},A>J?(C.sortIndex=A,n(u,C),t(h)===null&&C===t(u)&&(k?(m(S),S=-1):k=!0,Ia(f,A-J))):(C.sortIndex=q,n(h,C),p||I||(p=!0,wa(b))),C},e.unstable_shouldYield=Se,e.unstable_wrapCallback=function(C){var B=c;return function(){var A=c;c=B;try{return C.apply(this,arguments)}finally{c=A}}}})(Zs);Xs.exports=Zs;var Cu=Xs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eh=kn,fe=Cu;function w(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nh=new Set,Yt={};function Yn(e,n){Xn(e,n),Xn(e+"Capture",n)}function Xn(e,n){for(Yt[e]=n,e=0;e<n.length;e++)nh.add(n[e])}var Fe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ra=Object.prototype.hasOwnProperty,Tu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dr={},xr={};function Wu(e){return Ra.call(xr,e)?!0:Ra.call(Dr,e)?!1:Tu.test(e)?xr[e]=!0:(Dr[e]=!0,!1)}function Su(e,n,t,o){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return o?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bu(e,n,t,o){if(n===null||typeof n>"u"||Su(e,n,t,o))return!0;if(o)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function se(e,n,t,o,a,i,r){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=o,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=r}var Z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Z[e]=new se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Z[n]=new se(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Z[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Z[e]=new se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Z[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Z[e]=new se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Z[e]=new se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Z[e]=new se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Z[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Mi=/[\-:]([a-z])/g;function Ji(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Mi,Ji);Z[n]=new se(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Mi,Ji);Z[n]=new se(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Mi,Ji);Z[n]=new se(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Z[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)});Z.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Z[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fi(e,n,t,o){var a=Z.hasOwnProperty(n)?Z[n]:null;(a!==null?a.type!==0:o||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Bu(n,t,a,o)&&(t=null),o||a===null?Wu(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,o=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,o?e.setAttributeNS(o,n,t):e.setAttribute(n,t))))}var qe=eh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,to=Symbol.for("react.element"),Ln=Symbol.for("react.portal"),Gn=Symbol.for("react.fragment"),Hi=Symbol.for("react.strict_mode"),Ua=Symbol.for("react.profiler"),th=Symbol.for("react.provider"),oh=Symbol.for("react.context"),Ri=Symbol.for("react.forward_ref"),qa=Symbol.for("react.suspense"),Ka=Symbol.for("react.suspense_list"),Ui=Symbol.for("react.memo"),$e=Symbol.for("react.lazy"),ah=Symbol.for("react.offscreen"),Nr=Symbol.iterator;function ut(e){return e===null||typeof e!="object"?null:(e=Nr&&e[Nr]||e["@@iterator"],typeof e=="function"?e:null)}var _=Object.assign,va;function It(e){if(va===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);va=n&&n[1]||""}return`
`+va+e}var ba=!1;function Ca(e,n){if(!e||ba)return"";ba=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var o=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){o=u}e.call(n.prototype)}else{try{throw Error()}catch(u){o=u}e()}}catch(u){if(u&&o&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=o.stack.split(`
`),r=a.length-1,s=i.length-1;1<=r&&0<=s&&a[r]!==i[s];)s--;for(;1<=r&&0<=s;r--,s--)if(a[r]!==i[s]){if(r!==1||s!==1)do if(r--,s--,0>s||a[r]!==i[s]){var h=`
`+a[r].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=r&&0<=s);break}}}finally{ba=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?It(e):""}function Au(e){switch(e.tag){case 5:return It(e.type);case 16:return It("Lazy");case 13:return It("Suspense");case 19:return It("SuspenseList");case 0:case 2:case 15:return e=Ca(e.type,!1),e;case 11:return e=Ca(e.type.render,!1),e;case 1:return e=Ca(e.type,!0),e;default:return""}}function $a(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gn:return"Fragment";case Ln:return"Portal";case Ua:return"Profiler";case Hi:return"StrictMode";case qa:return"Suspense";case Ka:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case oh:return(e.displayName||"Context")+".Consumer";case th:return(e._context.displayName||"Context")+".Provider";case Ri:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ui:return n=e.displayName||null,n!==null?n:$a(e.type)||"Memo";case $e:n=e._payload,e=e._init;try{return $a(e(n))}catch{}}return null}function ju(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $a(n);case 8:return n===Hi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ih(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ou(e){var n=ih(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(r){o=""+r,i.call(this,r)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return o},setValue:function(r){o=""+r},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function oo(e){e._valueTracker||(e._valueTracker=Ou(e))}function rh(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),o="";return e&&(o=ih(e)?e.checked?"true":"false":e.value),e=o,e!==t?(n.setValue(e),!0):!1}function Yo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Qa(e,n){var t=n.checked;return _({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Er(e,n){var t=n.defaultValue==null?"":n.defaultValue,o=n.checked!=null?n.checked:n.defaultChecked;t=mn(n.value!=null?n.value:t),e._wrapperState={initialChecked:o,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function sh(e,n){n=n.checked,n!=null&&Fi(e,"checked",n,!1)}function Xa(e,n){sh(e,n);var t=mn(n.value),o=n.type;if(t!=null)o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Za(e,n.type,t):n.hasOwnProperty("defaultValue")&&Za(e,n.type,mn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function _r(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var o=n.type;if(!(o!=="submit"&&o!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Za(e,n,t){(n!=="number"||Yo(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var pt=Array.isArray;function Rn(e,n,t,o){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&o&&(e[t].defaultSelected=!0)}else{for(t=""+mn(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,o&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function ei(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(w(91));return _({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zr(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(w(92));if(pt(t)){if(1<t.length)throw Error(w(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:mn(t)}}function hh(e,n){var t=mn(n.value),o=mn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),o!=null&&(e.defaultValue=""+o)}function Mr(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function lh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ni(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?lh(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ao,uh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,o,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,o,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ao=ao||document.createElement("div"),ao.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ao.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Vt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var bt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yu=["Webkit","ms","Moz","O"];Object.keys(bt).forEach(function(e){Yu.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),bt[n]=bt[e]})});function mh(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||bt.hasOwnProperty(e)&&bt[e]?(""+n).trim():n+"px"}function dh(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var o=t.indexOf("--")===0,a=mh(t,n[t],o);t==="float"&&(t="cssFloat"),o?e.setProperty(t,a):e[t]=a}}var Vu=_({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ti(e,n){if(n){if(Vu[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(w(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(w(61))}if(n.style!=null&&typeof n.style!="object")throw Error(w(62))}}function oi(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ai=null;function qi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ii=null,Un=null,qn=null;function Jr(e){if(e=Qt(e)){if(typeof ii!="function")throw Error(w(280));var n=e.stateNode;n&&(n=ra(n),ii(e.stateNode,e.type,n))}}function yh(e){Un?qn?qn.push(e):qn=[e]:Un=e}function ch(){if(Un){var e=Un,n=qn;if(qn=Un=null,Jr(e),n)for(e=0;e<n.length;e++)Jr(n[e])}}function gh(e,n){return e(n)}function fh(){}var Ta=!1;function wh(e,n,t){if(Ta)return e(n,t);Ta=!0;try{return gh(e,n,t)}finally{Ta=!1,(Un!==null||qn!==null)&&(fh(),ch())}}function Pt(e,n){var t=e.stateNode;if(t===null)return null;var o=ra(t);if(o===null)return null;t=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(w(231,n,typeof t));return t}var ri=!1;if(Fe)try{var mt={};Object.defineProperty(mt,"passive",{get:function(){ri=!0}}),window.addEventListener("test",mt,mt),window.removeEventListener("test",mt,mt)}catch{ri=!1}function Pu(e,n,t,o,a,i,r,s,h){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(g){this.onError(g)}}var Ct=!1,Vo=null,Po=!1,si=null,Lu={onError:function(e){Ct=!0,Vo=e}};function Gu(e,n,t,o,a,i,r,s,h){Ct=!1,Vo=null,Pu.apply(Lu,arguments)}function Du(e,n,t,o,a,i,r,s,h){if(Gu.apply(this,arguments),Ct){if(Ct){var u=Vo;Ct=!1,Vo=null}else throw Error(w(198));Po||(Po=!0,si=u)}}function Vn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ih(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Fr(e){if(Vn(e)!==e)throw Error(w(188))}function xu(e){var n=e.alternate;if(!n){if(n=Vn(e),n===null)throw Error(w(188));return n!==e?null:e}for(var t=e,o=n;;){var a=t.return;if(a===null)break;var i=a.alternate;if(i===null){if(o=a.return,o!==null){t=o;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===t)return Fr(a),e;if(i===o)return Fr(a),n;i=i.sibling}throw Error(w(188))}if(t.return!==o.return)t=a,o=i;else{for(var r=!1,s=a.child;s;){if(s===t){r=!0,t=a,o=i;break}if(s===o){r=!0,o=a,t=i;break}s=s.sibling}if(!r){for(s=i.child;s;){if(s===t){r=!0,t=i,o=a;break}if(s===o){r=!0,o=i,t=a;break}s=s.sibling}if(!r)throw Error(w(189))}}if(t.alternate!==o)throw Error(w(190))}if(t.tag!==3)throw Error(w(188));return t.stateNode.current===t?e:n}function ph(e){return e=xu(e),e!==null?kh(e):null}function kh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=kh(e);if(n!==null)return n;e=e.sibling}return null}var vh=fe.unstable_scheduleCallback,Hr=fe.unstable_cancelCallback,Nu=fe.unstable_shouldYield,Eu=fe.unstable_requestPaint,F=fe.unstable_now,_u=fe.unstable_getCurrentPriorityLevel,Ki=fe.unstable_ImmediatePriority,bh=fe.unstable_UserBlockingPriority,Lo=fe.unstable_NormalPriority,zu=fe.unstable_LowPriority,Ch=fe.unstable_IdlePriority,ta=null,xe=null;function Mu(e){if(xe&&typeof xe.onCommitFiberRoot=="function")try{xe.onCommitFiberRoot(ta,e,void 0,(e.current.flags&128)===128)}catch{}}var Ye=Math.clz32?Math.clz32:Hu,Ju=Math.log,Fu=Math.LN2;function Hu(e){return e>>>=0,e===0?32:31-(Ju(e)/Fu|0)|0}var io=64,ro=4194304;function kt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Go(e,n){var t=e.pendingLanes;if(t===0)return 0;var o=0,a=e.suspendedLanes,i=e.pingedLanes,r=t&268435455;if(r!==0){var s=r&~a;s!==0?o=kt(s):(i&=r,i!==0&&(o=kt(i)))}else r=t&~a,r!==0?o=kt(r):i!==0&&(o=kt(i));if(o===0)return 0;if(n!==0&&n!==o&&!(n&a)&&(a=o&-o,i=n&-n,a>=i||a===16&&(i&4194240)!==0))return n;if(o&4&&(o|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=o;0<n;)t=31-Ye(n),a=1<<t,o|=e[t],n&=~a;return o}function Ru(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uu(e,n){for(var t=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var r=31-Ye(i),s=1<<r,h=a[r];h===-1?(!(s&t)||s&o)&&(a[r]=Ru(s,n)):h<=n&&(e.expiredLanes|=s),i&=~s}}function hi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Th(){var e=io;return io<<=1,!(io&4194240)&&(io=64),e}function Wa(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Kt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ye(n),e[n]=t}function qu(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-Ye(t),i=1<<a;n[a]=0,o[a]=-1,e[a]=-1,t&=~i}}function $i(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var o=31-Ye(t),a=1<<o;a&n|e[o]&n&&(e[o]|=n),t&=~a}}var V=0;function Wh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Sh,Qi,Bh,Ah,jh,li=!1,so=[],tn=null,on=null,an=null,Lt=new Map,Gt=new Map,Xe=[],Ku="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rr(e,n){switch(e){case"focusin":case"focusout":tn=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":Lt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gt.delete(n.pointerId)}}function dt(e,n,t,o,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:o,nativeEvent:i,targetContainers:[a]},n!==null&&(n=Qt(n),n!==null&&Qi(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function $u(e,n,t,o,a){switch(n){case"focusin":return tn=dt(tn,e,n,t,o,a),!0;case"dragenter":return on=dt(on,e,n,t,o,a),!0;case"mouseover":return an=dt(an,e,n,t,o,a),!0;case"pointerover":var i=a.pointerId;return Lt.set(i,dt(Lt.get(i)||null,e,n,t,o,a)),!0;case"gotpointercapture":return i=a.pointerId,Gt.set(i,dt(Gt.get(i)||null,e,n,t,o,a)),!0}return!1}function Oh(e){var n=vn(e.target);if(n!==null){var t=Vn(n);if(t!==null){if(n=t.tag,n===13){if(n=Ih(t),n!==null){e.blockedOn=n,jh(e.priority,function(){Bh(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ui(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var o=new t.constructor(t.type,t);ai=o,t.target.dispatchEvent(o),ai=null}else return n=Qt(t),n!==null&&Qi(n),e.blockedOn=t,!1;n.shift()}return!0}function Ur(e,n,t){vo(e)&&t.delete(n)}function Qu(){li=!1,tn!==null&&vo(tn)&&(tn=null),on!==null&&vo(on)&&(on=null),an!==null&&vo(an)&&(an=null),Lt.forEach(Ur),Gt.forEach(Ur)}function yt(e,n){e.blockedOn===n&&(e.blockedOn=null,li||(li=!0,fe.unstable_scheduleCallback(fe.unstable_NormalPriority,Qu)))}function Dt(e){function n(a){return yt(a,e)}if(0<so.length){yt(so[0],e);for(var t=1;t<so.length;t++){var o=so[t];o.blockedOn===e&&(o.blockedOn=null)}}for(tn!==null&&yt(tn,e),on!==null&&yt(on,e),an!==null&&yt(an,e),Lt.forEach(n),Gt.forEach(n),t=0;t<Xe.length;t++)o=Xe[t],o.blockedOn===e&&(o.blockedOn=null);for(;0<Xe.length&&(t=Xe[0],t.blockedOn===null);)Oh(t),t.blockedOn===null&&Xe.shift()}var Kn=qe.ReactCurrentBatchConfig,Do=!0;function Xu(e,n,t,o){var a=V,i=Kn.transition;Kn.transition=null;try{V=1,Xi(e,n,t,o)}finally{V=a,Kn.transition=i}}function Zu(e,n,t,o){var a=V,i=Kn.transition;Kn.transition=null;try{V=4,Xi(e,n,t,o)}finally{V=a,Kn.transition=i}}function Xi(e,n,t,o){if(Do){var a=ui(e,n,t,o);if(a===null)Ga(e,n,o,xo,t),Rr(e,o);else if($u(a,e,n,t,o))o.stopPropagation();else if(Rr(e,o),n&4&&-1<Ku.indexOf(e)){for(;a!==null;){var i=Qt(a);if(i!==null&&Sh(i),i=ui(e,n,t,o),i===null&&Ga(e,n,o,xo,t),i===a)break;a=i}a!==null&&o.stopPropagation()}else Ga(e,n,o,null,t)}}var xo=null;function ui(e,n,t,o){if(xo=null,e=qi(o),e=vn(e),e!==null)if(n=Vn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ih(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return xo=e,null}function Yh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_u()){case Ki:return 1;case bh:return 4;case Lo:case zu:return 16;case Ch:return 536870912;default:return 16}default:return 16}}var en=null,Zi=null,bo=null;function Vh(){if(bo)return bo;var e,n=Zi,t=n.length,o,a="value"in en?en.value:en.textContent,i=a.length;for(e=0;e<t&&n[e]===a[e];e++);var r=t-e;for(o=1;o<=r&&n[t-o]===a[i-o];o++);return bo=a.slice(e,1<o?1-o:void 0)}function Co(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ho(){return!0}function qr(){return!1}function Ie(e){function n(t,o,a,i,r){this._reactName=t,this._targetInst=a,this.type=o,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ho:qr,this.isPropagationStopped=qr,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ho)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ho)},persist:function(){},isPersistent:ho}),n}var rt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},er=Ie(rt),$t=_({},rt,{view:0,detail:0}),em=Ie($t),Sa,Ba,ct,oa=_({},$t,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ct&&(ct&&e.type==="mousemove"?(Sa=e.screenX-ct.screenX,Ba=e.screenY-ct.screenY):Ba=Sa=0,ct=e),Sa)},movementY:function(e){return"movementY"in e?e.movementY:Ba}}),Kr=Ie(oa),nm=_({},oa,{dataTransfer:0}),tm=Ie(nm),om=_({},$t,{relatedTarget:0}),Aa=Ie(om),am=_({},rt,{animationName:0,elapsedTime:0,pseudoElement:0}),im=Ie(am),rm=_({},rt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sm=Ie(rm),hm=_({},rt,{data:0}),$r=Ie(hm),lm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},um={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dm(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=mm[e])?!!n[e]:!1}function nr(){return dm}var ym=_({},$t,{key:function(e){if(e.key){var n=lm[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Co(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?um[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nr,charCode:function(e){return e.type==="keypress"?Co(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Co(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cm=Ie(ym),gm=_({},oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qr=Ie(gm),fm=_({},$t,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nr}),wm=Ie(fm),Im=_({},rt,{propertyName:0,elapsedTime:0,pseudoElement:0}),pm=Ie(Im),km=_({},oa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vm=Ie(km),bm=[9,13,27,32],tr=Fe&&"CompositionEvent"in window,Tt=null;Fe&&"documentMode"in document&&(Tt=document.documentMode);var Cm=Fe&&"TextEvent"in window&&!Tt,Ph=Fe&&(!tr||Tt&&8<Tt&&11>=Tt),Xr=" ",Zr=!1;function Lh(e,n){switch(e){case"keyup":return bm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dn=!1;function Tm(e,n){switch(e){case"compositionend":return Gh(n);case"keypress":return n.which!==32?null:(Zr=!0,Xr);case"textInput":return e=n.data,e===Xr&&Zr?null:e;default:return null}}function Wm(e,n){if(Dn)return e==="compositionend"||!tr&&Lh(e,n)?(e=Vh(),bo=Zi=en=null,Dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ph&&n.locale!=="ko"?null:n.data;default:return null}}var Sm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function es(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Sm[e.type]:n==="textarea"}function Dh(e,n,t,o){yh(o),n=No(n,"onChange"),0<n.length&&(t=new er("onChange","change",null,t,o),e.push({event:t,listeners:n}))}var Wt=null,xt=null;function Bm(e){Uh(e,0)}function aa(e){var n=En(e);if(rh(n))return e}function Am(e,n){if(e==="change")return n}var xh=!1;if(Fe){var ja;if(Fe){var Oa="oninput"in document;if(!Oa){var ns=document.createElement("div");ns.setAttribute("oninput","return;"),Oa=typeof ns.oninput=="function"}ja=Oa}else ja=!1;xh=ja&&(!document.documentMode||9<document.documentMode)}function ts(){Wt&&(Wt.detachEvent("onpropertychange",Nh),xt=Wt=null)}function Nh(e){if(e.propertyName==="value"&&aa(xt)){var n=[];Dh(n,xt,e,qi(e)),wh(Bm,n)}}function jm(e,n,t){e==="focusin"?(ts(),Wt=n,xt=t,Wt.attachEvent("onpropertychange",Nh)):e==="focusout"&&ts()}function Om(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return aa(xt)}function Ym(e,n){if(e==="click")return aa(n)}function Vm(e,n){if(e==="input"||e==="change")return aa(n)}function Pm(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Pe=typeof Object.is=="function"?Object.is:Pm;function Nt(e,n){if(Pe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),o=Object.keys(n);if(t.length!==o.length)return!1;for(o=0;o<t.length;o++){var a=t[o];if(!Ra.call(n,a)||!Pe(e[a],n[a]))return!1}return!0}function os(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function as(e,n){var t=os(e);e=0;for(var o;t;){if(t.nodeType===3){if(o=e+t.textContent.length,e<=n&&o>=n)return{node:t,offset:n-e};e=o}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=os(t)}}function Eh(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Eh(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function _h(){for(var e=window,n=Yo();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Yo(e.document)}return n}function or(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Lm(e){var n=_h(),t=e.focusedElem,o=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Eh(t.ownerDocument.documentElement,t)){if(o!==null&&or(t)){if(n=o.start,e=o.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,i=Math.min(o.start,a);o=o.end===void 0?i:Math.min(o.end,a),!e.extend&&i>o&&(a=o,o=i,i=a),a=as(t,i);var r=as(t,o);a&&r&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==r.node||e.focusOffset!==r.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),i>o?(e.addRange(n),e.extend(r.node,r.offset)):(n.setEnd(r.node,r.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gm=Fe&&"documentMode"in document&&11>=document.documentMode,xn=null,mi=null,St=null,di=!1;function is(e,n,t){var o=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;di||xn==null||xn!==Yo(o)||(o=xn,"selectionStart"in o&&or(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),St&&Nt(St,o)||(St=o,o=No(mi,"onSelect"),0<o.length&&(n=new er("onSelect","select",null,n,t),e.push({event:n,listeners:o}),n.target=xn)))}function lo(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Nn={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},Ya={},zh={};Fe&&(zh=document.createElement("div").style,"AnimationEvent"in window||(delete Nn.animationend.animation,delete Nn.animationiteration.animation,delete Nn.animationstart.animation),"TransitionEvent"in window||delete Nn.transitionend.transition);function ia(e){if(Ya[e])return Ya[e];if(!Nn[e])return e;var n=Nn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in zh)return Ya[e]=n[t];return e}var Mh=ia("animationend"),Jh=ia("animationiteration"),Fh=ia("animationstart"),Hh=ia("transitionend"),Rh=new Map,rs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yn(e,n){Rh.set(e,n),Yn(n,[e])}for(var Va=0;Va<rs.length;Va++){var Pa=rs[Va],Dm=Pa.toLowerCase(),xm=Pa[0].toUpperCase()+Pa.slice(1);yn(Dm,"on"+xm)}yn(Mh,"onAnimationEnd");yn(Jh,"onAnimationIteration");yn(Fh,"onAnimationStart");yn("dblclick","onDoubleClick");yn("focusin","onFocus");yn("focusout","onBlur");yn(Hh,"onTransitionEnd");Xn("onMouseEnter",["mouseout","mouseover"]);Xn("onMouseLeave",["mouseout","mouseover"]);Xn("onPointerEnter",["pointerout","pointerover"]);Xn("onPointerLeave",["pointerout","pointerover"]);Yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nm=new Set("cancel close invalid load scroll toggle".split(" ").concat(vt));function ss(e,n,t){var o=e.type||"unknown-event";e.currentTarget=t,Du(o,n,void 0,e),e.currentTarget=null}function Uh(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var o=e[t],a=o.event;o=o.listeners;e:{var i=void 0;if(n)for(var r=o.length-1;0<=r;r--){var s=o[r],h=s.instance,u=s.currentTarget;if(s=s.listener,h!==i&&a.isPropagationStopped())break e;ss(a,s,u),i=h}else for(r=0;r<o.length;r++){if(s=o[r],h=s.instance,u=s.currentTarget,s=s.listener,h!==i&&a.isPropagationStopped())break e;ss(a,s,u),i=h}}}if(Po)throw e=si,Po=!1,si=null,e}function L(e,n){var t=n[wi];t===void 0&&(t=n[wi]=new Set);var o=e+"__bubble";t.has(o)||(qh(n,e,2,!1),t.add(o))}function La(e,n,t){var o=0;n&&(o|=4),qh(t,e,o,n)}var uo="_reactListening"+Math.random().toString(36).slice(2);function Et(e){if(!e[uo]){e[uo]=!0,nh.forEach(function(t){t!=="selectionchange"&&(Nm.has(t)||La(t,!1,e),La(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[uo]||(n[uo]=!0,La("selectionchange",!1,n))}}function qh(e,n,t,o){switch(Yh(n)){case 1:var a=Xu;break;case 4:a=Zu;break;default:a=Xi}t=a.bind(null,n,t,e),a=void 0,!ri||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),o?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function Ga(e,n,t,o,a){var i=o;if(!(n&1)&&!(n&2)&&o!==null)e:for(;;){if(o===null)return;var r=o.tag;if(r===3||r===4){var s=o.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(r===4)for(r=o.return;r!==null;){var h=r.tag;if((h===3||h===4)&&(h=r.stateNode.containerInfo,h===a||h.nodeType===8&&h.parentNode===a))return;r=r.return}for(;s!==null;){if(r=vn(s),r===null)return;if(h=r.tag,h===5||h===6){o=i=r;continue e}s=s.parentNode}}o=o.return}wh(function(){var u=i,g=qi(t),y=[];e:{var c=Rh.get(e);if(c!==void 0){var I=er,p=e;switch(e){case"keypress":if(Co(t)===0)break e;case"keydown":case"keyup":I=cm;break;case"focusin":p="focus",I=Aa;break;case"focusout":p="blur",I=Aa;break;case"beforeblur":case"afterblur":I=Aa;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Kr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=tm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=wm;break;case Mh:case Jh:case Fh:I=im;break;case Hh:I=pm;break;case"scroll":I=em;break;case"wheel":I=vm;break;case"copy":case"cut":case"paste":I=sm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Qr}var k=(n&4)!==0,D=!k&&e==="scroll",m=k?c!==null?c+"Capture":null:c;k=[];for(var l=u,d;l!==null;){d=l;var f=d.stateNode;if(d.tag===5&&f!==null&&(d=f,m!==null&&(f=Pt(l,m),f!=null&&k.push(_t(l,f,d)))),D)break;l=l.return}0<k.length&&(c=new I(c,p,null,t,g),y.push({event:c,listeners:k}))}}if(!(n&7)){e:{if(c=e==="mouseover"||e==="pointerover",I=e==="mouseout"||e==="pointerout",c&&t!==ai&&(p=t.relatedTarget||t.fromElement)&&(vn(p)||p[He]))break e;if((I||c)&&(c=g.window===g?g:(c=g.ownerDocument)?c.defaultView||c.parentWindow:window,I?(p=t.relatedTarget||t.toElement,I=u,p=p?vn(p):null,p!==null&&(D=Vn(p),p!==D||p.tag!==5&&p.tag!==6)&&(p=null)):(I=null,p=u),I!==p)){if(k=Kr,f="onMouseLeave",m="onMouseEnter",l="mouse",(e==="pointerout"||e==="pointerover")&&(k=Qr,f="onPointerLeave",m="onPointerEnter",l="pointer"),D=I==null?c:En(I),d=p==null?c:En(p),c=new k(f,l+"leave",I,t,g),c.target=D,c.relatedTarget=d,f=null,vn(g)===u&&(k=new k(m,l+"enter",p,t,g),k.target=d,k.relatedTarget=D,f=k),D=f,I&&p)n:{for(k=I,m=p,l=0,d=k;d;d=Pn(d))l++;for(d=0,f=m;f;f=Pn(f))d++;for(;0<l-d;)k=Pn(k),l--;for(;0<d-l;)m=Pn(m),d--;for(;l--;){if(k===m||m!==null&&k===m.alternate)break n;k=Pn(k),m=Pn(m)}k=null}else k=null;I!==null&&hs(y,c,I,k,!1),p!==null&&D!==null&&hs(y,D,p,k,!0)}}e:{if(c=u?En(u):window,I=c.nodeName&&c.nodeName.toLowerCase(),I==="select"||I==="input"&&c.type==="file")var b=Am;else if(es(c))if(xh)b=Vm;else{b=Om;var T=jm}else(I=c.nodeName)&&I.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(b=Ym);if(b&&(b=b(e,u))){Dh(y,b,t,g);break e}T&&T(e,c,u),e==="focusout"&&(T=c._wrapperState)&&T.controlled&&c.type==="number"&&Za(c,"number",c.value)}switch(T=u?En(u):window,e){case"focusin":(es(T)||T.contentEditable==="true")&&(xn=T,mi=u,St=null);break;case"focusout":St=mi=xn=null;break;case"mousedown":di=!0;break;case"contextmenu":case"mouseup":case"dragend":di=!1,is(y,t,g);break;case"selectionchange":if(Gm)break;case"keydown":case"keyup":is(y,t,g)}var W;if(tr)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Dn?Lh(e,t)&&(S="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(S="onCompositionStart");S&&(Ph&&t.locale!=="ko"&&(Dn||S!=="onCompositionStart"?S==="onCompositionEnd"&&Dn&&(W=Vh()):(en=g,Zi="value"in en?en.value:en.textContent,Dn=!0)),T=No(u,S),0<T.length&&(S=new $r(S,e,null,t,g),y.push({event:S,listeners:T}),W?S.data=W:(W=Gh(t),W!==null&&(S.data=W)))),(W=Cm?Tm(e,t):Wm(e,t))&&(u=No(u,"onBeforeInput"),0<u.length&&(g=new $r("onBeforeInput","beforeinput",null,t,g),y.push({event:g,listeners:u}),g.data=W))}Uh(y,n)})}function _t(e,n,t){return{instance:e,listener:n,currentTarget:t}}function No(e,n){for(var t=n+"Capture",o=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Pt(e,t),i!=null&&o.unshift(_t(e,i,a)),i=Pt(e,n),i!=null&&o.push(_t(e,i,a))),e=e.return}return o}function Pn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hs(e,n,t,o,a){for(var i=n._reactName,r=[];t!==null&&t!==o;){var s=t,h=s.alternate,u=s.stateNode;if(h!==null&&h===o)break;s.tag===5&&u!==null&&(s=u,a?(h=Pt(t,i),h!=null&&r.unshift(_t(t,h,s))):a||(h=Pt(t,i),h!=null&&r.push(_t(t,h,s)))),t=t.return}r.length!==0&&e.push({event:n,listeners:r})}var Em=/\r\n?/g,_m=/\u0000|\uFFFD/g;function ls(e){return(typeof e=="string"?e:""+e).replace(Em,`
`).replace(_m,"")}function mo(e,n,t){if(n=ls(n),ls(e)!==n&&t)throw Error(w(425))}function Eo(){}var yi=null,ci=null;function gi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var fi=typeof setTimeout=="function"?setTimeout:void 0,zm=typeof clearTimeout=="function"?clearTimeout:void 0,us=typeof Promise=="function"?Promise:void 0,Mm=typeof queueMicrotask=="function"?queueMicrotask:typeof us<"u"?function(e){return us.resolve(null).then(e).catch(Jm)}:fi;function Jm(e){setTimeout(function(){throw e})}function Da(e,n){var t=n,o=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(o===0){e.removeChild(a),Dt(n);return}o--}else t!=="$"&&t!=="$?"&&t!=="$!"||o++;t=a}while(t);Dt(n)}function rn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ms(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var st=Math.random().toString(36).slice(2),De="__reactFiber$"+st,zt="__reactProps$"+st,He="__reactContainer$"+st,wi="__reactEvents$"+st,Fm="__reactListeners$"+st,Hm="__reactHandles$"+st;function vn(e){var n=e[De];if(n)return n;for(var t=e.parentNode;t;){if(n=t[He]||t[De]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ms(e);e!==null;){if(t=e[De])return t;e=ms(e)}return n}e=t,t=e.parentNode}return null}function Qt(e){return e=e[De]||e[He],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function En(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function ra(e){return e[zt]||null}var Ii=[],_n=-1;function cn(e){return{current:e}}function G(e){0>_n||(e.current=Ii[_n],Ii[_n]=null,_n--)}function P(e,n){_n++,Ii[_n]=e.current,e.current=n}var dn={},oe=cn(dn),ue=cn(!1),Sn=dn;function Zn(e,n){var t=e.type.contextTypes;if(!t)return dn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===n)return o.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in t)a[i]=n[i];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function me(e){return e=e.childContextTypes,e!=null}function _o(){G(ue),G(oe)}function ds(e,n,t){if(oe.current!==dn)throw Error(w(168));P(oe,n),P(ue,t)}function Kh(e,n,t){var o=e.stateNode;if(n=n.childContextTypes,typeof o.getChildContext!="function")return t;o=o.getChildContext();for(var a in o)if(!(a in n))throw Error(w(108,ju(e)||"Unknown",a));return _({},t,o)}function zo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dn,Sn=oe.current,P(oe,e),P(ue,ue.current),!0}function ys(e,n,t){var o=e.stateNode;if(!o)throw Error(w(169));t?(e=Kh(e,n,Sn),o.__reactInternalMemoizedMergedChildContext=e,G(ue),G(oe),P(oe,e)):G(ue),P(ue,t)}var _e=null,sa=!1,xa=!1;function $h(e){_e===null?_e=[e]:_e.push(e)}function Rm(e){sa=!0,$h(e)}function gn(){if(!xa&&_e!==null){xa=!0;var e=0,n=V;try{var t=_e;for(V=1;e<t.length;e++){var o=t[e];do o=o(!0);while(o!==null)}_e=null,sa=!1}catch(a){throw _e!==null&&(_e=_e.slice(e+1)),vh(Ki,gn),a}finally{V=n,xa=!1}}return null}var zn=[],Mn=0,Mo=null,Jo=0,ke=[],ve=0,Bn=null,ze=1,Me="";function In(e,n){zn[Mn++]=Jo,zn[Mn++]=Mo,Mo=e,Jo=n}function Qh(e,n,t){ke[ve++]=ze,ke[ve++]=Me,ke[ve++]=Bn,Bn=e;var o=ze;e=Me;var a=32-Ye(o)-1;o&=~(1<<a),t+=1;var i=32-Ye(n)+a;if(30<i){var r=a-a%5;i=(o&(1<<r)-1).toString(32),o>>=r,a-=r,ze=1<<32-Ye(n)+a|t<<a|o,Me=i+e}else ze=1<<i|t<<a|o,Me=e}function ar(e){e.return!==null&&(In(e,1),Qh(e,1,0))}function ir(e){for(;e===Mo;)Mo=zn[--Mn],zn[Mn]=null,Jo=zn[--Mn],zn[Mn]=null;for(;e===Bn;)Bn=ke[--ve],ke[ve]=null,Me=ke[--ve],ke[ve]=null,ze=ke[--ve],ke[ve]=null}var ge=null,ce=null,x=!1,Oe=null;function Xh(e,n){var t=be(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function cs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ge=e,ce=rn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ge=e,ce=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Bn!==null?{id:ze,overflow:Me}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=be(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ge=e,ce=null,!0):!1;default:return!1}}function pi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ki(e){if(x){var n=ce;if(n){var t=n;if(!cs(e,n)){if(pi(e))throw Error(w(418));n=rn(t.nextSibling);var o=ge;n&&cs(e,n)?Xh(o,t):(e.flags=e.flags&-4097|2,x=!1,ge=e)}}else{if(pi(e))throw Error(w(418));e.flags=e.flags&-4097|2,x=!1,ge=e}}}function gs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function yo(e){if(e!==ge)return!1;if(!x)return gs(e),x=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!gi(e.type,e.memoizedProps)),n&&(n=ce)){if(pi(e))throw Zh(),Error(w(418));for(;n;)Xh(e,n),n=rn(n.nextSibling)}if(gs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ce=rn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ce=null}}else ce=ge?rn(e.stateNode.nextSibling):null;return!0}function Zh(){for(var e=ce;e;)e=rn(e.nextSibling)}function et(){ce=ge=null,x=!1}function rr(e){Oe===null?Oe=[e]:Oe.push(e)}var Um=qe.ReactCurrentBatchConfig;function Ae(e,n){if(e&&e.defaultProps){n=_({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var Fo=cn(null),Ho=null,Jn=null,sr=null;function hr(){sr=Jn=Ho=null}function lr(e){var n=Fo.current;G(Fo),e._currentValue=n}function vi(e,n,t){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===t)break;e=e.return}}function $n(e,n){Ho=e,sr=Jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(le=!0),e.firstContext=null)}function Te(e){var n=e._currentValue;if(sr!==e)if(e={context:e,memoizedValue:n,next:null},Jn===null){if(Ho===null)throw Error(w(308));Jn=e,Ho.dependencies={lanes:0,firstContext:e}}else Jn=Jn.next=e;return n}var bn=null;function ur(e){bn===null?bn=[e]:bn.push(e)}function el(e,n,t,o){var a=n.interleaved;return a===null?(t.next=t,ur(n)):(t.next=a.next,a.next=t),n.interleaved=t,Re(e,o)}function Re(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Qe=!1;function mr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nl(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Je(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function sn(e,n,t){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,Y&2){var a=o.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),o.pending=n,Re(e,t)}return a=o.interleaved,a===null?(n.next=n,ur(o)):(n.next=a.next,a.next=n),o.interleaved=n,Re(e,t)}function To(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,$i(e,t)}}function fs(e,n){var t=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,t===o)){var a=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var r={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?a=i=r:i=i.next=r,t=t.next}while(t!==null);i===null?a=i=n:i=i.next=n}else a=i=n;t={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:o.shared,effects:o.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ro(e,n,t,o){var a=e.updateQueue;Qe=!1;var i=a.firstBaseUpdate,r=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var h=s,u=h.next;h.next=null,r===null?i=u:r.next=u,r=h;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==r&&(s===null?g.firstBaseUpdate=u:s.next=u,g.lastBaseUpdate=h))}if(i!==null){var y=a.baseState;r=0,g=u=h=null,s=i;do{var c=s.lane,I=s.eventTime;if((o&c)===c){g!==null&&(g=g.next={eventTime:I,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var p=e,k=s;switch(c=n,I=t,k.tag){case 1:if(p=k.payload,typeof p=="function"){y=p.call(I,y,c);break e}y=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=k.payload,c=typeof p=="function"?p.call(I,y,c):p,c==null)break e;y=_({},y,c);break e;case 2:Qe=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,c=a.effects,c===null?a.effects=[s]:c.push(s))}else I={eventTime:I,lane:c,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(u=g=I,h=y):g=g.next=I,r|=c;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;c=s,s=c.next,c.next=null,a.lastBaseUpdate=c,a.shared.pending=null}}while(!0);if(g===null&&(h=y),a.baseState=h,a.firstBaseUpdate=u,a.lastBaseUpdate=g,n=a.shared.interleaved,n!==null){a=n;do r|=a.lane,a=a.next;while(a!==n)}else i===null&&(a.shared.lanes=0);jn|=r,e.lanes=r,e.memoizedState=y}}function ws(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var o=e[n],a=o.callback;if(a!==null){if(o.callback=null,o=t,typeof a!="function")throw Error(w(191,a));a.call(o)}}}var tl=new eh.Component().refs;function bi(e,n,t,o){n=e.memoizedState,t=t(o,n),t=t==null?n:_({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ha={isMounted:function(e){return(e=e._reactInternals)?Vn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var o=ie(),a=ln(e),i=Je(o,a);i.payload=n,t!=null&&(i.callback=t),n=sn(e,i,a),n!==null&&(Ve(n,e,a,o),To(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var o=ie(),a=ln(e),i=Je(o,a);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=sn(e,i,a),n!==null&&(Ve(n,e,a,o),To(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ie(),o=ln(e),a=Je(t,o);a.tag=2,n!=null&&(a.callback=n),n=sn(e,a,o),n!==null&&(Ve(n,e,o,t),To(n,e,o))}};function Is(e,n,t,o,a,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,i,r):n.prototype&&n.prototype.isPureReactComponent?!Nt(t,o)||!Nt(a,i):!0}function ol(e,n,t){var o=!1,a=dn,i=n.contextType;return typeof i=="object"&&i!==null?i=Te(i):(a=me(n)?Sn:oe.current,o=n.contextTypes,i=(o=o!=null)?Zn(e,a):dn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ha,e.stateNode=n,n._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),n}function ps(e,n,t,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,o),n.state!==e&&ha.enqueueReplaceState(n,n.state,null)}function Ci(e,n,t,o){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs=tl,mr(e);var i=n.contextType;typeof i=="object"&&i!==null?a.context=Te(i):(i=me(n)?Sn:oe.current,a.context=Zn(e,i)),a.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(bi(e,n,i,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&ha.enqueueReplaceState(a,a.state,null),Ro(e,t,a,o),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function gt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(w(309));var o=t.stateNode}if(!o)throw Error(w(147,e));var a=o,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(r){var s=a.refs;s===tl&&(s=a.refs={}),r===null?delete s[i]:s[i]=r},n._stringRef=i,n)}if(typeof e!="string")throw Error(w(284));if(!t._owner)throw Error(w(290,e))}return e}function co(e,n){throw e=Object.prototype.toString.call(n),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ks(e){var n=e._init;return n(e._payload)}function al(e){function n(m,l){if(e){var d=m.deletions;d===null?(m.deletions=[l],m.flags|=16):d.push(l)}}function t(m,l){if(!e)return null;for(;l!==null;)n(m,l),l=l.sibling;return null}function o(m,l){for(m=new Map;l!==null;)l.key!==null?m.set(l.key,l):m.set(l.index,l),l=l.sibling;return m}function a(m,l){return m=un(m,l),m.index=0,m.sibling=null,m}function i(m,l,d){return m.index=d,e?(d=m.alternate,d!==null?(d=d.index,d<l?(m.flags|=2,l):d):(m.flags|=2,l)):(m.flags|=1048576,l)}function r(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,l,d,f){return l===null||l.tag!==6?(l=Fa(d,m.mode,f),l.return=m,l):(l=a(l,d),l.return=m,l)}function h(m,l,d,f){var b=d.type;return b===Gn?g(m,l,d.props.children,f,d.key):l!==null&&(l.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===$e&&ks(b)===l.type)?(f=a(l,d.props),f.ref=gt(m,l,d),f.return=m,f):(f=Oo(d.type,d.key,d.props,null,m.mode,f),f.ref=gt(m,l,d),f.return=m,f)}function u(m,l,d,f){return l===null||l.tag!==4||l.stateNode.containerInfo!==d.containerInfo||l.stateNode.implementation!==d.implementation?(l=Ha(d,m.mode,f),l.return=m,l):(l=a(l,d.children||[]),l.return=m,l)}function g(m,l,d,f,b){return l===null||l.tag!==7?(l=Wn(d,m.mode,f,b),l.return=m,l):(l=a(l,d),l.return=m,l)}function y(m,l,d){if(typeof l=="string"&&l!==""||typeof l=="number")return l=Fa(""+l,m.mode,d),l.return=m,l;if(typeof l=="object"&&l!==null){switch(l.$$typeof){case to:return d=Oo(l.type,l.key,l.props,null,m.mode,d),d.ref=gt(m,null,l),d.return=m,d;case Ln:return l=Ha(l,m.mode,d),l.return=m,l;case $e:var f=l._init;return y(m,f(l._payload),d)}if(pt(l)||ut(l))return l=Wn(l,m.mode,d,null),l.return=m,l;co(m,l)}return null}function c(m,l,d,f){var b=l!==null?l.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return b!==null?null:s(m,l,""+d,f);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case to:return d.key===b?h(m,l,d,f):null;case Ln:return d.key===b?u(m,l,d,f):null;case $e:return b=d._init,c(m,l,b(d._payload),f)}if(pt(d)||ut(d))return b!==null?null:g(m,l,d,f,null);co(m,d)}return null}function I(m,l,d,f,b){if(typeof f=="string"&&f!==""||typeof f=="number")return m=m.get(d)||null,s(l,m,""+f,b);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case to:return m=m.get(f.key===null?d:f.key)||null,h(l,m,f,b);case Ln:return m=m.get(f.key===null?d:f.key)||null,u(l,m,f,b);case $e:var T=f._init;return I(m,l,d,T(f._payload),b)}if(pt(f)||ut(f))return m=m.get(d)||null,g(l,m,f,b,null);co(l,f)}return null}function p(m,l,d,f){for(var b=null,T=null,W=l,S=l=0,M=null;W!==null&&S<d.length;S++){W.index>S?(M=W,W=null):M=W.sibling;var O=c(m,W,d[S],f);if(O===null){W===null&&(W=M);break}e&&W&&O.alternate===null&&n(m,W),l=i(O,l,S),T===null?b=O:T.sibling=O,T=O,W=M}if(S===d.length)return t(m,W),x&&In(m,S),b;if(W===null){for(;S<d.length;S++)W=y(m,d[S],f),W!==null&&(l=i(W,l,S),T===null?b=W:T.sibling=W,T=W);return x&&In(m,S),b}for(W=o(m,W);S<d.length;S++)M=I(W,m,S,d[S],f),M!==null&&(e&&M.alternate!==null&&W.delete(M.key===null?S:M.key),l=i(M,l,S),T===null?b=M:T.sibling=M,T=M);return e&&W.forEach(function(Se){return n(m,Se)}),x&&In(m,S),b}function k(m,l,d,f){var b=ut(d);if(typeof b!="function")throw Error(w(150));if(d=b.call(d),d==null)throw Error(w(151));for(var T=b=null,W=l,S=l=0,M=null,O=d.next();W!==null&&!O.done;S++,O=d.next()){W.index>S?(M=W,W=null):M=W.sibling;var Se=c(m,W,O.value,f);if(Se===null){W===null&&(W=M);break}e&&W&&Se.alternate===null&&n(m,W),l=i(Se,l,S),T===null?b=Se:T.sibling=Se,T=Se,W=M}if(O.done)return t(m,W),x&&In(m,S),b;if(W===null){for(;!O.done;S++,O=d.next())O=y(m,O.value,f),O!==null&&(l=i(O,l,S),T===null?b=O:T.sibling=O,T=O);return x&&In(m,S),b}for(W=o(m,W);!O.done;S++,O=d.next())O=I(W,m,S,O.value,f),O!==null&&(e&&O.alternate!==null&&W.delete(O.key===null?S:O.key),l=i(O,l,S),T===null?b=O:T.sibling=O,T=O);return e&&W.forEach(function(ht){return n(m,ht)}),x&&In(m,S),b}function D(m,l,d,f){if(typeof d=="object"&&d!==null&&d.type===Gn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case to:e:{for(var b=d.key,T=l;T!==null;){if(T.key===b){if(b=d.type,b===Gn){if(T.tag===7){t(m,T.sibling),l=a(T,d.props.children),l.return=m,m=l;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===$e&&ks(b)===T.type){t(m,T.sibling),l=a(T,d.props),l.ref=gt(m,T,d),l.return=m,m=l;break e}t(m,T);break}else n(m,T);T=T.sibling}d.type===Gn?(l=Wn(d.props.children,m.mode,f,d.key),l.return=m,m=l):(f=Oo(d.type,d.key,d.props,null,m.mode,f),f.ref=gt(m,l,d),f.return=m,m=f)}return r(m);case Ln:e:{for(T=d.key;l!==null;){if(l.key===T)if(l.tag===4&&l.stateNode.containerInfo===d.containerInfo&&l.stateNode.implementation===d.implementation){t(m,l.sibling),l=a(l,d.children||[]),l.return=m,m=l;break e}else{t(m,l);break}else n(m,l);l=l.sibling}l=Ha(d,m.mode,f),l.return=m,m=l}return r(m);case $e:return T=d._init,D(m,l,T(d._payload),f)}if(pt(d))return p(m,l,d,f);if(ut(d))return k(m,l,d,f);co(m,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,l!==null&&l.tag===6?(t(m,l.sibling),l=a(l,d),l.return=m,m=l):(t(m,l),l=Fa(d,m.mode,f),l.return=m,m=l),r(m)):t(m,l)}return D}var nt=al(!0),il=al(!1),Xt={},Ne=cn(Xt),Mt=cn(Xt),Jt=cn(Xt);function Cn(e){if(e===Xt)throw Error(w(174));return e}function dr(e,n){switch(P(Jt,n),P(Mt,e),P(Ne,Xt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ni(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ni(n,e)}G(Ne),P(Ne,n)}function tt(){G(Ne),G(Mt),G(Jt)}function rl(e){Cn(Jt.current);var n=Cn(Ne.current),t=ni(n,e.type);n!==t&&(P(Mt,e),P(Ne,t))}function yr(e){Mt.current===e&&(G(Ne),G(Mt))}var N=cn(0);function Uo(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Na=[];function cr(){for(var e=0;e<Na.length;e++)Na[e]._workInProgressVersionPrimary=null;Na.length=0}var Wo=qe.ReactCurrentDispatcher,Ea=qe.ReactCurrentBatchConfig,An=0,E=null,R=null,K=null,qo=!1,Bt=!1,Ft=0,qm=0;function ee(){throw Error(w(321))}function gr(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Pe(e[t],n[t]))return!1;return!0}function fr(e,n,t,o,a,i){if(An=i,E=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Wo.current=e===null||e.memoizedState===null?Xm:Zm,e=t(o,a),Bt){i=0;do{if(Bt=!1,Ft=0,25<=i)throw Error(w(301));i+=1,K=R=null,n.updateQueue=null,Wo.current=ed,e=t(o,a)}while(Bt)}if(Wo.current=Ko,n=R!==null&&R.next!==null,An=0,K=R=E=null,qo=!1,n)throw Error(w(300));return e}function wr(){var e=Ft!==0;return Ft=0,e}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return K===null?E.memoizedState=K=e:K=K.next=e,K}function We(){if(R===null){var e=E.alternate;e=e!==null?e.memoizedState:null}else e=R.next;var n=K===null?E.memoizedState:K.next;if(n!==null)K=n,R=e;else{if(e===null)throw Error(w(310));R=e,e={memoizedState:R.memoizedState,baseState:R.baseState,baseQueue:R.baseQueue,queue:R.queue,next:null},K===null?E.memoizedState=K=e:K=K.next=e}return K}function Ht(e,n){return typeof n=="function"?n(e):n}function _a(e){var n=We(),t=n.queue;if(t===null)throw Error(w(311));t.lastRenderedReducer=e;var o=R,a=o.baseQueue,i=t.pending;if(i!==null){if(a!==null){var r=a.next;a.next=i.next,i.next=r}o.baseQueue=a=i,t.pending=null}if(a!==null){i=a.next,o=o.baseState;var s=r=null,h=null,u=i;do{var g=u.lane;if((An&g)===g)h!==null&&(h=h.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),o=u.hasEagerState?u.eagerState:e(o,u.action);else{var y={lane:g,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};h===null?(s=h=y,r=o):h=h.next=y,E.lanes|=g,jn|=g}u=u.next}while(u!==null&&u!==i);h===null?r=o:h.next=s,Pe(o,n.memoizedState)||(le=!0),n.memoizedState=o,n.baseState=r,n.baseQueue=h,t.lastRenderedState=o}if(e=t.interleaved,e!==null){a=e;do i=a.lane,E.lanes|=i,jn|=i,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function za(e){var n=We(),t=n.queue;if(t===null)throw Error(w(311));t.lastRenderedReducer=e;var o=t.dispatch,a=t.pending,i=n.memoizedState;if(a!==null){t.pending=null;var r=a=a.next;do i=e(i,r.action),r=r.next;while(r!==a);Pe(i,n.memoizedState)||(le=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,o]}function sl(){}function hl(e,n){var t=E,o=We(),a=n(),i=!Pe(o.memoizedState,a);if(i&&(o.memoizedState=a,le=!0),o=o.queue,Ir(ml.bind(null,t,o,e),[e]),o.getSnapshot!==n||i||K!==null&&K.memoizedState.tag&1){if(t.flags|=2048,Rt(9,ul.bind(null,t,o,a,n),void 0,null),$===null)throw Error(w(349));An&30||ll(t,n,a)}return a}function ll(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=E.updateQueue,n===null?(n={lastEffect:null,stores:null},E.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ul(e,n,t,o){n.value=t,n.getSnapshot=o,dl(n)&&yl(e)}function ml(e,n,t){return t(function(){dl(n)&&yl(e)})}function dl(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Pe(e,t)}catch{return!0}}function yl(e){var n=Re(e,1);n!==null&&Ve(n,e,1,-1)}function vs(e){var n=Ge();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:e},n.queue=e,e=e.dispatch=Qm.bind(null,E,e),[n.memoizedState,e]}function Rt(e,n,t,o){return e={tag:e,create:n,destroy:t,deps:o,next:null},n=E.updateQueue,n===null?(n={lastEffect:null,stores:null},E.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,n.lastEffect=e)),e}function cl(){return We().memoizedState}function So(e,n,t,o){var a=Ge();E.flags|=e,a.memoizedState=Rt(1|n,t,void 0,o===void 0?null:o)}function la(e,n,t,o){var a=We();o=o===void 0?null:o;var i=void 0;if(R!==null){var r=R.memoizedState;if(i=r.destroy,o!==null&&gr(o,r.deps)){a.memoizedState=Rt(n,t,i,o);return}}E.flags|=e,a.memoizedState=Rt(1|n,t,i,o)}function bs(e,n){return So(8390656,8,e,n)}function Ir(e,n){return la(2048,8,e,n)}function gl(e,n){return la(4,2,e,n)}function fl(e,n){return la(4,4,e,n)}function wl(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Il(e,n,t){return t=t!=null?t.concat([e]):null,la(4,4,wl.bind(null,n,e),t)}function pr(){}function pl(e,n){var t=We();n=n===void 0?null:n;var o=t.memoizedState;return o!==null&&n!==null&&gr(n,o[1])?o[0]:(t.memoizedState=[e,n],e)}function kl(e,n){var t=We();n=n===void 0?null:n;var o=t.memoizedState;return o!==null&&n!==null&&gr(n,o[1])?o[0]:(e=e(),t.memoizedState=[e,n],e)}function vl(e,n,t){return An&21?(Pe(t,n)||(t=Th(),E.lanes|=t,jn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,le=!0),e.memoizedState=t)}function Km(e,n){var t=V;V=t!==0&&4>t?t:4,e(!0);var o=Ea.transition;Ea.transition={};try{e(!1),n()}finally{V=t,Ea.transition=o}}function bl(){return We().memoizedState}function $m(e,n,t){var o=ln(e);if(t={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null},Cl(e))Tl(n,t);else if(t=el(e,n,t,o),t!==null){var a=ie();Ve(t,e,o,a),Wl(t,n,o)}}function Qm(e,n,t){var o=ln(e),a={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null};if(Cl(e))Tl(n,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var r=n.lastRenderedState,s=i(r,t);if(a.hasEagerState=!0,a.eagerState=s,Pe(s,r)){var h=n.interleaved;h===null?(a.next=a,ur(n)):(a.next=h.next,h.next=a),n.interleaved=a;return}}catch{}finally{}t=el(e,n,a,o),t!==null&&(a=ie(),Ve(t,e,o,a),Wl(t,n,o))}}function Cl(e){var n=e.alternate;return e===E||n!==null&&n===E}function Tl(e,n){Bt=qo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Wl(e,n,t){if(t&4194240){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,$i(e,t)}}var Ko={readContext:Te,useCallback:ee,useContext:ee,useEffect:ee,useImperativeHandle:ee,useInsertionEffect:ee,useLayoutEffect:ee,useMemo:ee,useReducer:ee,useRef:ee,useState:ee,useDebugValue:ee,useDeferredValue:ee,useTransition:ee,useMutableSource:ee,useSyncExternalStore:ee,useId:ee,unstable_isNewReconciler:!1},Xm={readContext:Te,useCallback:function(e,n){return Ge().memoizedState=[e,n===void 0?null:n],e},useContext:Te,useEffect:bs,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,So(4194308,4,wl.bind(null,n,e),t)},useLayoutEffect:function(e,n){return So(4194308,4,e,n)},useInsertionEffect:function(e,n){return So(4,2,e,n)},useMemo:function(e,n){var t=Ge();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var o=Ge();return n=t!==void 0?t(n):n,o.memoizedState=o.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=$m.bind(null,E,e),[o.memoizedState,e]},useRef:function(e){var n=Ge();return e={current:e},n.memoizedState=e},useState:vs,useDebugValue:pr,useDeferredValue:function(e){return Ge().memoizedState=e},useTransition:function(){var e=vs(!1),n=e[0];return e=Km.bind(null,e[1]),Ge().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var o=E,a=Ge();if(x){if(t===void 0)throw Error(w(407));t=t()}else{if(t=n(),$===null)throw Error(w(349));An&30||ll(o,n,t)}a.memoizedState=t;var i={value:t,getSnapshot:n};return a.queue=i,bs(ml.bind(null,o,i,e),[e]),o.flags|=2048,Rt(9,ul.bind(null,o,i,t,n),void 0,null),t},useId:function(){var e=Ge(),n=$.identifierPrefix;if(x){var t=Me,o=ze;t=(o&~(1<<32-Ye(o)-1)).toString(32)+t,n=":"+n+"R"+t,t=Ft++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=qm++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Zm={readContext:Te,useCallback:pl,useContext:Te,useEffect:Ir,useImperativeHandle:Il,useInsertionEffect:gl,useLayoutEffect:fl,useMemo:kl,useReducer:_a,useRef:cl,useState:function(){return _a(Ht)},useDebugValue:pr,useDeferredValue:function(e){var n=We();return vl(n,R.memoizedState,e)},useTransition:function(){var e=_a(Ht)[0],n=We().memoizedState;return[e,n]},useMutableSource:sl,useSyncExternalStore:hl,useId:bl,unstable_isNewReconciler:!1},ed={readContext:Te,useCallback:pl,useContext:Te,useEffect:Ir,useImperativeHandle:Il,useInsertionEffect:gl,useLayoutEffect:fl,useMemo:kl,useReducer:za,useRef:cl,useState:function(){return za(Ht)},useDebugValue:pr,useDeferredValue:function(e){var n=We();return R===null?n.memoizedState=e:vl(n,R.memoizedState,e)},useTransition:function(){var e=za(Ht)[0],n=We().memoizedState;return[e,n]},useMutableSource:sl,useSyncExternalStore:hl,useId:bl,unstable_isNewReconciler:!1};function ot(e,n){try{var t="",o=n;do t+=Au(o),o=o.return;while(o);var a=t}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:a,digest:null}}function Ma(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ti(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var nd=typeof WeakMap=="function"?WeakMap:Map;function Sl(e,n,t){t=Je(-1,t),t.tag=3,t.payload={element:null};var o=n.value;return t.callback=function(){Qo||(Qo=!0,Li=o),Ti(e,n)},t}function Bl(e,n,t){t=Je(-1,t),t.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var a=n.value;t.payload=function(){return o(a)},t.callback=function(){Ti(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Ti(e,n),typeof o!="function"&&(hn===null?hn=new Set([this]):hn.add(this));var r=n.stack;this.componentDidCatch(n.value,{componentStack:r!==null?r:""})}),t}function Cs(e,n,t){var o=e.pingCache;if(o===null){o=e.pingCache=new nd;var a=new Set;o.set(n,a)}else a=o.get(n),a===void 0&&(a=new Set,o.set(n,a));a.has(t)||(a.add(t),e=gd.bind(null,e,n,t),n.then(e,e))}function Ts(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ws(e,n,t,o,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Je(-1,1),n.tag=2,sn(t,n,1))),t.lanes|=1),e)}var td=qe.ReactCurrentOwner,le=!1;function ae(e,n,t,o){n.child=e===null?il(n,null,t,o):nt(n,e.child,t,o)}function Ss(e,n,t,o,a){t=t.render;var i=n.ref;return $n(n,a),o=fr(e,n,t,o,i,a),t=wr(),e!==null&&!le?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Ue(e,n,a)):(x&&t&&ar(n),n.flags|=1,ae(e,n,o,a),n.child)}function Bs(e,n,t,o,a){if(e===null){var i=t.type;return typeof i=="function"&&!Br(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Al(e,n,i,o,a)):(e=Oo(t.type,null,o,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&a)){var r=i.memoizedProps;if(t=t.compare,t=t!==null?t:Nt,t(r,o)&&e.ref===n.ref)return Ue(e,n,a)}return n.flags|=1,e=un(i,o),e.ref=n.ref,e.return=n,n.child=e}function Al(e,n,t,o,a){if(e!==null){var i=e.memoizedProps;if(Nt(i,o)&&e.ref===n.ref)if(le=!1,n.pendingProps=o=i,(e.lanes&a)!==0)e.flags&131072&&(le=!0);else return n.lanes=e.lanes,Ue(e,n,a)}return Wi(e,n,t,o,a)}function jl(e,n,t){var o=n.pendingProps,a=o.children,i=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},P(Hn,ye),ye|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,P(Hn,ye),ye|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:t,P(Hn,ye),ye|=o}else i!==null?(o=i.baseLanes|t,n.memoizedState=null):o=t,P(Hn,ye),ye|=o;return ae(e,n,a,t),n.child}function Ol(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Wi(e,n,t,o,a){var i=me(t)?Sn:oe.current;return i=Zn(n,i),$n(n,a),t=fr(e,n,t,o,i,a),o=wr(),e!==null&&!le?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Ue(e,n,a)):(x&&o&&ar(n),n.flags|=1,ae(e,n,t,a),n.child)}function As(e,n,t,o,a){if(me(t)){var i=!0;zo(n)}else i=!1;if($n(n,a),n.stateNode===null)Bo(e,n),ol(n,t,o),Ci(n,t,o,a),o=!0;else if(e===null){var r=n.stateNode,s=n.memoizedProps;r.props=s;var h=r.context,u=t.contextType;typeof u=="object"&&u!==null?u=Te(u):(u=me(t)?Sn:oe.current,u=Zn(n,u));var g=t.getDerivedStateFromProps,y=typeof g=="function"||typeof r.getSnapshotBeforeUpdate=="function";y||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==o||h!==u)&&ps(n,r,o,u),Qe=!1;var c=n.memoizedState;r.state=c,Ro(n,o,r,a),h=n.memoizedState,s!==o||c!==h||ue.current||Qe?(typeof g=="function"&&(bi(n,t,g,o),h=n.memoizedState),(s=Qe||Is(n,t,s,o,c,h,u))?(y||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(n.flags|=4194308)):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=h),r.props=o,r.state=h,r.context=u,o=s):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{r=n.stateNode,nl(e,n),s=n.memoizedProps,u=n.type===n.elementType?s:Ae(n.type,s),r.props=u,y=n.pendingProps,c=r.context,h=t.contextType,typeof h=="object"&&h!==null?h=Te(h):(h=me(t)?Sn:oe.current,h=Zn(n,h));var I=t.getDerivedStateFromProps;(g=typeof I=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==y||c!==h)&&ps(n,r,o,h),Qe=!1,c=n.memoizedState,r.state=c,Ro(n,o,r,a);var p=n.memoizedState;s!==y||c!==p||ue.current||Qe?(typeof I=="function"&&(bi(n,t,I,o),p=n.memoizedState),(u=Qe||Is(n,t,u,o,c,p,h)||!1)?(g||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(o,p,h),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(o,p,h)),typeof r.componentDidUpdate=="function"&&(n.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&c===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&c===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=p),r.props=o,r.state=p,r.context=h,o=u):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&c===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&c===e.memoizedState||(n.flags|=1024),o=!1)}return Si(e,n,t,o,i,a)}function Si(e,n,t,o,a,i){Ol(e,n);var r=(n.flags&128)!==0;if(!o&&!r)return a&&ys(n,t,!1),Ue(e,n,i);o=n.stateNode,td.current=n;var s=r&&typeof t.getDerivedStateFromError!="function"?null:o.render();return n.flags|=1,e!==null&&r?(n.child=nt(n,e.child,null,i),n.child=nt(n,null,s,i)):ae(e,n,s,i),n.memoizedState=o.state,a&&ys(n,t,!0),n.child}function Yl(e){var n=e.stateNode;n.pendingContext?ds(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ds(e,n.context,!1),dr(e,n.containerInfo)}function js(e,n,t,o,a){return et(),rr(a),n.flags|=256,ae(e,n,t,o),n.child}var Bi={dehydrated:null,treeContext:null,retryLane:0};function Ai(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vl(e,n,t){var o=n.pendingProps,a=N.current,i=!1,r=(n.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),P(N,a&1),e===null)return ki(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(r=o.children,e=o.fallback,i?(o=n.mode,i=n.child,r={mode:"hidden",children:r},!(o&1)&&i!==null?(i.childLanes=0,i.pendingProps=r):i=da(r,o,0,null),e=Wn(e,o,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Ai(t),n.memoizedState=Bi,e):kr(n,r));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return od(e,n,r,o,s,a,t);if(i){i=o.fallback,r=n.mode,a=e.child,s=a.sibling;var h={mode:"hidden",children:o.children};return!(r&1)&&n.child!==a?(o=n.child,o.childLanes=0,o.pendingProps=h,n.deletions=null):(o=un(a,h),o.subtreeFlags=a.subtreeFlags&14680064),s!==null?i=un(s,i):(i=Wn(i,r,t,null),i.flags|=2),i.return=n,o.return=n,o.sibling=i,n.child=o,o=i,i=n.child,r=e.child.memoizedState,r=r===null?Ai(t):{baseLanes:r.baseLanes|t,cachePool:null,transitions:r.transitions},i.memoizedState=r,i.childLanes=e.childLanes&~t,n.memoizedState=Bi,o}return i=e.child,e=i.sibling,o=un(i,{mode:"visible",children:o.children}),!(n.mode&1)&&(o.lanes=t),o.return=n,o.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=o,n.memoizedState=null,o}function kr(e,n){return n=da({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function go(e,n,t,o){return o!==null&&rr(o),nt(n,e.child,null,t),e=kr(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function od(e,n,t,o,a,i,r){if(t)return n.flags&256?(n.flags&=-257,o=Ma(Error(w(422))),go(e,n,r,o)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=o.fallback,a=n.mode,o=da({mode:"visible",children:o.children},a,0,null),i=Wn(i,a,r,null),i.flags|=2,o.return=n,i.return=n,o.sibling=i,n.child=o,n.mode&1&&nt(n,e.child,null,r),n.child.memoizedState=Ai(r),n.memoizedState=Bi,i);if(!(n.mode&1))return go(e,n,r,null);if(a.data==="$!"){if(o=a.nextSibling&&a.nextSibling.dataset,o)var s=o.dgst;return o=s,i=Error(w(419)),o=Ma(i,o,void 0),go(e,n,r,o)}if(s=(r&e.childLanes)!==0,le||s){if(o=$,o!==null){switch(r&-r){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(o.suspendedLanes|r)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Re(e,a),Ve(o,e,a,-1))}return Sr(),o=Ma(Error(w(421))),go(e,n,r,o)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=fd.bind(null,e),a._reactRetry=n,null):(e=i.treeContext,ce=rn(a.nextSibling),ge=n,x=!0,Oe=null,e!==null&&(ke[ve++]=ze,ke[ve++]=Me,ke[ve++]=Bn,ze=e.id,Me=e.overflow,Bn=n),n=kr(n,o.children),n.flags|=4096,n)}function Os(e,n,t){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),vi(e.return,n,t)}function Ja(e,n,t,o,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:t,tailMode:a}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=t,i.tailMode=a)}function Pl(e,n,t){var o=n.pendingProps,a=o.revealOrder,i=o.tail;if(ae(e,n,o.children,t),o=N.current,o&2)o=o&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Os(e,t,n);else if(e.tag===19)Os(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(P(N,o),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&Uo(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),Ja(n,!1,a,t,i);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&Uo(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}Ja(n,!0,t,null,i);break;case"together":Ja(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Bo(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ue(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),jn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(w(153));if(n.child!==null){for(e=n.child,t=un(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=un(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function ad(e,n,t){switch(n.tag){case 3:Yl(n),et();break;case 5:rl(n);break;case 1:me(n.type)&&zo(n);break;case 4:dr(n,n.stateNode.containerInfo);break;case 10:var o=n.type._context,a=n.memoizedProps.value;P(Fo,o._currentValue),o._currentValue=a;break;case 13:if(o=n.memoizedState,o!==null)return o.dehydrated!==null?(P(N,N.current&1),n.flags|=128,null):t&n.child.childLanes?Vl(e,n,t):(P(N,N.current&1),e=Ue(e,n,t),e!==null?e.sibling:null);P(N,N.current&1);break;case 19:if(o=(t&n.childLanes)!==0,e.flags&128){if(o)return Pl(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),P(N,N.current),o)break;return null;case 22:case 23:return n.lanes=0,jl(e,n,t)}return Ue(e,n,t)}var Ll,ji,Gl,Dl;Ll=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ji=function(){};Gl=function(e,n,t,o){var a=e.memoizedProps;if(a!==o){e=n.stateNode,Cn(Ne.current);var i=null;switch(t){case"input":a=Qa(e,a),o=Qa(e,o),i=[];break;case"select":a=_({},a,{value:void 0}),o=_({},o,{value:void 0}),i=[];break;case"textarea":a=ei(e,a),o=ei(e,o),i=[];break;default:typeof a.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Eo)}ti(t,o);var r;t=null;for(u in a)if(!o.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var s=a[u];for(r in s)s.hasOwnProperty(r)&&(t||(t={}),t[r]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Yt.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in o){var h=o[u];if(s=a!=null?a[u]:void 0,o.hasOwnProperty(u)&&h!==s&&(h!=null||s!=null))if(u==="style")if(s){for(r in s)!s.hasOwnProperty(r)||h&&h.hasOwnProperty(r)||(t||(t={}),t[r]="");for(r in h)h.hasOwnProperty(r)&&s[r]!==h[r]&&(t||(t={}),t[r]=h[r])}else t||(i||(i=[]),i.push(u,t)),t=h;else u==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,s=s?s.__html:void 0,h!=null&&s!==h&&(i=i||[]).push(u,h)):u==="children"?typeof h!="string"&&typeof h!="number"||(i=i||[]).push(u,""+h):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Yt.hasOwnProperty(u)?(h!=null&&u==="onScroll"&&L("scroll",e),i||s===h||(i=[])):(i=i||[]).push(u,h))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};Dl=function(e,n,t,o){t!==o&&(n.flags|=4)};function ft(e,n){if(!x)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ne(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,o=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,o|=a.subtreeFlags&14680064,o|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,o|=a.subtreeFlags,o|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=o,e.childLanes=t,n}function id(e,n,t){var o=n.pendingProps;switch(ir(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(n),null;case 1:return me(n.type)&&_o(),ne(n),null;case 3:return o=n.stateNode,tt(),G(ue),G(oe),cr(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(yo(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Oe!==null&&(xi(Oe),Oe=null))),ji(e,n),ne(n),null;case 5:yr(n);var a=Cn(Jt.current);if(t=n.type,e!==null&&n.stateNode!=null)Gl(e,n,t,o,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!o){if(n.stateNode===null)throw Error(w(166));return ne(n),null}if(e=Cn(Ne.current),yo(n)){o=n.stateNode,t=n.type;var i=n.memoizedProps;switch(o[De]=n,o[zt]=i,e=(n.mode&1)!==0,t){case"dialog":L("cancel",o),L("close",o);break;case"iframe":case"object":case"embed":L("load",o);break;case"video":case"audio":for(a=0;a<vt.length;a++)L(vt[a],o);break;case"source":L("error",o);break;case"img":case"image":case"link":L("error",o),L("load",o);break;case"details":L("toggle",o);break;case"input":Er(o,i),L("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},L("invalid",o);break;case"textarea":zr(o,i),L("invalid",o)}ti(t,i),a=null;for(var r in i)if(i.hasOwnProperty(r)){var s=i[r];r==="children"?typeof s=="string"?o.textContent!==s&&(i.suppressHydrationWarning!==!0&&mo(o.textContent,s,e),a=["children",s]):typeof s=="number"&&o.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&mo(o.textContent,s,e),a=["children",""+s]):Yt.hasOwnProperty(r)&&s!=null&&r==="onScroll"&&L("scroll",o)}switch(t){case"input":oo(o),_r(o,i,!0);break;case"textarea":oo(o),Mr(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=Eo)}o=a,n.updateQueue=o,o!==null&&(n.flags|=4)}else{r=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=lh(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=r.createElement(t,{is:o.is}):(e=r.createElement(t),t==="select"&&(r=e,o.multiple?r.multiple=!0:o.size&&(r.size=o.size))):e=r.createElementNS(e,t),e[De]=n,e[zt]=o,Ll(e,n,!1,!1),n.stateNode=e;e:{switch(r=oi(t,o),t){case"dialog":L("cancel",e),L("close",e),a=o;break;case"iframe":case"object":case"embed":L("load",e),a=o;break;case"video":case"audio":for(a=0;a<vt.length;a++)L(vt[a],e);a=o;break;case"source":L("error",e),a=o;break;case"img":case"image":case"link":L("error",e),L("load",e),a=o;break;case"details":L("toggle",e),a=o;break;case"input":Er(e,o),a=Qa(e,o),L("invalid",e);break;case"option":a=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},a=_({},o,{value:void 0}),L("invalid",e);break;case"textarea":zr(e,o),a=ei(e,o),L("invalid",e);break;default:a=o}ti(t,a),s=a;for(i in s)if(s.hasOwnProperty(i)){var h=s[i];i==="style"?dh(e,h):i==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&uh(e,h)):i==="children"?typeof h=="string"?(t!=="textarea"||h!=="")&&Vt(e,h):typeof h=="number"&&Vt(e,""+h):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Yt.hasOwnProperty(i)?h!=null&&i==="onScroll"&&L("scroll",e):h!=null&&Fi(e,i,h,r))}switch(t){case"input":oo(e),_r(e,o,!1);break;case"textarea":oo(e),Mr(e);break;case"option":o.value!=null&&e.setAttribute("value",""+mn(o.value));break;case"select":e.multiple=!!o.multiple,i=o.value,i!=null?Rn(e,!!o.multiple,i,!1):o.defaultValue!=null&&Rn(e,!!o.multiple,o.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Eo)}switch(t){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ne(n),null;case 6:if(e&&n.stateNode!=null)Dl(e,n,e.memoizedProps,o);else{if(typeof o!="string"&&n.stateNode===null)throw Error(w(166));if(t=Cn(Jt.current),Cn(Ne.current),yo(n)){if(o=n.stateNode,t=n.memoizedProps,o[De]=n,(i=o.nodeValue!==t)&&(e=ge,e!==null))switch(e.tag){case 3:mo(o.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mo(o.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else o=(t.nodeType===9?t:t.ownerDocument).createTextNode(o),o[De]=n,n.stateNode=o}return ne(n),null;case 13:if(G(N),o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(x&&ce!==null&&n.mode&1&&!(n.flags&128))Zh(),et(),n.flags|=98560,i=!1;else if(i=yo(n),o!==null&&o.dehydrated!==null){if(e===null){if(!i)throw Error(w(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(w(317));i[De]=n}else et(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ne(n),i=!1}else Oe!==null&&(xi(Oe),Oe=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(n.child.flags|=8192,n.mode&1&&(e===null||N.current&1?U===0&&(U=3):Sr())),n.updateQueue!==null&&(n.flags|=4),ne(n),null);case 4:return tt(),ji(e,n),e===null&&Et(n.stateNode.containerInfo),ne(n),null;case 10:return lr(n.type._context),ne(n),null;case 17:return me(n.type)&&_o(),ne(n),null;case 19:if(G(N),i=n.memoizedState,i===null)return ne(n),null;if(o=(n.flags&128)!==0,r=i.rendering,r===null)if(o)ft(i,!1);else{if(U!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(r=Uo(e),r!==null){for(n.flags|=128,ft(i,!1),o=r.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),n.subtreeFlags=0,o=t,t=n.child;t!==null;)i=t,e=o,i.flags&=14680066,r=i.alternate,r===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=r.childLanes,i.lanes=r.lanes,i.child=r.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=r.memoizedProps,i.memoizedState=r.memoizedState,i.updateQueue=r.updateQueue,i.type=r.type,e=r.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return P(N,N.current&1|2),n.child}e=e.sibling}i.tail!==null&&F()>at&&(n.flags|=128,o=!0,ft(i,!1),n.lanes=4194304)}else{if(!o)if(e=Uo(r),e!==null){if(n.flags|=128,o=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),ft(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!x)return ne(n),null}else 2*F()-i.renderingStartTime>at&&t!==1073741824&&(n.flags|=128,o=!0,ft(i,!1),n.lanes=4194304);i.isBackwards?(r.sibling=n.child,n.child=r):(t=i.last,t!==null?t.sibling=r:n.child=r,i.last=r)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=F(),n.sibling=null,t=N.current,P(N,o?t&1|2:t&1),n):(ne(n),null);case 22:case 23:return Wr(),o=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(n.flags|=8192),o&&n.mode&1?ye&1073741824&&(ne(n),n.subtreeFlags&6&&(n.flags|=8192)):ne(n),null;case 24:return null;case 25:return null}throw Error(w(156,n.tag))}function rd(e,n){switch(ir(n),n.tag){case 1:return me(n.type)&&_o(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return tt(),G(ue),G(oe),cr(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return yr(n),null;case 13:if(G(N),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(w(340));et()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return G(N),null;case 4:return tt(),null;case 10:return lr(n.type._context),null;case 22:case 23:return Wr(),null;case 24:return null;default:return null}}var fo=!1,te=!1,sd=typeof WeakSet=="function"?WeakSet:Set,v=null;function Fn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(o){z(e,n,o)}else t.current=null}function Oi(e,n,t){try{t()}catch(o){z(e,n,o)}}var Ys=!1;function hd(e,n){if(yi=Do,e=_h(),or(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var o=t.getSelection&&t.getSelection();if(o&&o.rangeCount!==0){t=o.anchorNode;var a=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var r=0,s=-1,h=-1,u=0,g=0,y=e,c=null;n:for(;;){for(var I;y!==t||a!==0&&y.nodeType!==3||(s=r+a),y!==i||o!==0&&y.nodeType!==3||(h=r+o),y.nodeType===3&&(r+=y.nodeValue.length),(I=y.firstChild)!==null;)c=y,y=I;for(;;){if(y===e)break n;if(c===t&&++u===a&&(s=r),c===i&&++g===o&&(h=r),(I=y.nextSibling)!==null)break;y=c,c=y.parentNode}y=I}t=s===-1||h===-1?null:{start:s,end:h}}else t=null}t=t||{start:0,end:0}}else t=null;for(ci={focusedElem:e,selectionRange:t},Do=!1,v=n;v!==null;)if(n=v,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,v=e;else for(;v!==null;){n=v;try{var p=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var k=p.memoizedProps,D=p.memoizedState,m=n.stateNode,l=m.getSnapshotBeforeUpdate(n.elementType===n.type?k:Ae(n.type,k),D);m.__reactInternalSnapshotBeforeUpdate=l}break;case 3:var d=n.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(f){z(n,n.return,f)}if(e=n.sibling,e!==null){e.return=n.return,v=e;break}v=n.return}return p=Ys,Ys=!1,p}function At(e,n,t){var o=n.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Oi(n,t,i)}a=a.next}while(a!==o)}}function ua(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var o=t.create;t.destroy=o()}t=t.next}while(t!==n)}}function Yi(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function xl(e){var n=e.alternate;n!==null&&(e.alternate=null,xl(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[De],delete n[zt],delete n[wi],delete n[Fm],delete n[Hm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Nl(e){return e.tag===5||e.tag===3||e.tag===4}function Vs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vi(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Eo));else if(o!==4&&(e=e.child,e!==null))for(Vi(e,n,t),e=e.sibling;e!==null;)Vi(e,n,t),e=e.sibling}function Pi(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Pi(e,n,t),e=e.sibling;e!==null;)Pi(e,n,t),e=e.sibling}var Q=null,je=!1;function Ke(e,n,t){for(t=t.child;t!==null;)El(e,n,t),t=t.sibling}function El(e,n,t){if(xe&&typeof xe.onCommitFiberUnmount=="function")try{xe.onCommitFiberUnmount(ta,t)}catch{}switch(t.tag){case 5:te||Fn(t,n);case 6:var o=Q,a=je;Q=null,Ke(e,n,t),Q=o,je=a,Q!==null&&(je?(e=Q,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Q.removeChild(t.stateNode));break;case 18:Q!==null&&(je?(e=Q,t=t.stateNode,e.nodeType===8?Da(e.parentNode,t):e.nodeType===1&&Da(e,t),Dt(e)):Da(Q,t.stateNode));break;case 4:o=Q,a=je,Q=t.stateNode.containerInfo,je=!0,Ke(e,n,t),Q=o,je=a;break;case 0:case 11:case 14:case 15:if(!te&&(o=t.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){a=o=o.next;do{var i=a,r=i.destroy;i=i.tag,r!==void 0&&(i&2||i&4)&&Oi(t,n,r),a=a.next}while(a!==o)}Ke(e,n,t);break;case 1:if(!te&&(Fn(t,n),o=t.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=t.memoizedProps,o.state=t.memoizedState,o.componentWillUnmount()}catch(s){z(t,n,s)}Ke(e,n,t);break;case 21:Ke(e,n,t);break;case 22:t.mode&1?(te=(o=te)||t.memoizedState!==null,Ke(e,n,t),te=o):Ke(e,n,t);break;default:Ke(e,n,t)}}function Ps(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new sd),n.forEach(function(o){var a=wd.bind(null,e,o);t.has(o)||(t.add(o),o.then(a,a))})}}function Be(e,n){var t=n.deletions;if(t!==null)for(var o=0;o<t.length;o++){var a=t[o];try{var i=e,r=n,s=r;e:for(;s!==null;){switch(s.tag){case 5:Q=s.stateNode,je=!1;break e;case 3:Q=s.stateNode.containerInfo,je=!0;break e;case 4:Q=s.stateNode.containerInfo,je=!0;break e}s=s.return}if(Q===null)throw Error(w(160));El(i,r,a),Q=null,je=!1;var h=a.alternate;h!==null&&(h.return=null),a.return=null}catch(u){z(a,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)_l(n,e),n=n.sibling}function _l(e,n){var t=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(n,e),Le(e),o&4){try{At(3,e,e.return),ua(3,e)}catch(k){z(e,e.return,k)}try{At(5,e,e.return)}catch(k){z(e,e.return,k)}}break;case 1:Be(n,e),Le(e),o&512&&t!==null&&Fn(t,t.return);break;case 5:if(Be(n,e),Le(e),o&512&&t!==null&&Fn(t,t.return),e.flags&32){var a=e.stateNode;try{Vt(a,"")}catch(k){z(e,e.return,k)}}if(o&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,r=t!==null?t.memoizedProps:i,s=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&sh(a,i),oi(s,r);var u=oi(s,i);for(r=0;r<h.length;r+=2){var g=h[r],y=h[r+1];g==="style"?dh(a,y):g==="dangerouslySetInnerHTML"?uh(a,y):g==="children"?Vt(a,y):Fi(a,g,y,u)}switch(s){case"input":Xa(a,i);break;case"textarea":hh(a,i);break;case"select":var c=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var I=i.value;I!=null?Rn(a,!!i.multiple,I,!1):c!==!!i.multiple&&(i.defaultValue!=null?Rn(a,!!i.multiple,i.defaultValue,!0):Rn(a,!!i.multiple,i.multiple?[]:"",!1))}a[zt]=i}catch(k){z(e,e.return,k)}}break;case 6:if(Be(n,e),Le(e),o&4){if(e.stateNode===null)throw Error(w(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(k){z(e,e.return,k)}}break;case 3:if(Be(n,e),Le(e),o&4&&t!==null&&t.memoizedState.isDehydrated)try{Dt(n.containerInfo)}catch(k){z(e,e.return,k)}break;case 4:Be(n,e),Le(e);break;case 13:Be(n,e),Le(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Cr=F())),o&4&&Ps(e);break;case 22:if(g=t!==null&&t.memoizedState!==null,e.mode&1?(te=(u=te)||g,Be(n,e),te=u):Be(n,e),Le(e),o&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!g&&e.mode&1)for(v=e,g=e.child;g!==null;){for(y=v=g;v!==null;){switch(c=v,I=c.child,c.tag){case 0:case 11:case 14:case 15:At(4,c,c.return);break;case 1:Fn(c,c.return);var p=c.stateNode;if(typeof p.componentWillUnmount=="function"){o=c,t=c.return;try{n=o,p.props=n.memoizedProps,p.state=n.memoizedState,p.componentWillUnmount()}catch(k){z(o,t,k)}}break;case 5:Fn(c,c.return);break;case 22:if(c.memoizedState!==null){Gs(y);continue}}I!==null?(I.return=c,v=I):Gs(y)}g=g.sibling}e:for(g=null,y=e;;){if(y.tag===5){if(g===null){g=y;try{a=y.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=y.stateNode,h=y.memoizedProps.style,r=h!=null&&h.hasOwnProperty("display")?h.display:null,s.style.display=mh("display",r))}catch(k){z(e,e.return,k)}}}else if(y.tag===6){if(g===null)try{y.stateNode.nodeValue=u?"":y.memoizedProps}catch(k){z(e,e.return,k)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;g===y&&(g=null),y=y.return}g===y&&(g=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Be(n,e),Le(e),o&4&&Ps(e);break;case 21:break;default:Be(n,e),Le(e)}}function Le(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Nl(t)){var o=t;break e}t=t.return}throw Error(w(160))}switch(o.tag){case 5:var a=o.stateNode;o.flags&32&&(Vt(a,""),o.flags&=-33);var i=Vs(e);Pi(e,i,a);break;case 3:case 4:var r=o.stateNode.containerInfo,s=Vs(e);Vi(e,s,r);break;default:throw Error(w(161))}}catch(h){z(e,e.return,h)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ld(e,n,t){v=e,zl(e)}function zl(e,n,t){for(var o=(e.mode&1)!==0;v!==null;){var a=v,i=a.child;if(a.tag===22&&o){var r=a.memoizedState!==null||fo;if(!r){var s=a.alternate,h=s!==null&&s.memoizedState!==null||te;s=fo;var u=te;if(fo=r,(te=h)&&!u)for(v=a;v!==null;)r=v,h=r.child,r.tag===22&&r.memoizedState!==null?Ds(a):h!==null?(h.return=r,v=h):Ds(a);for(;i!==null;)v=i,zl(i),i=i.sibling;v=a,fo=s,te=u}Ls(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,v=i):Ls(e)}}function Ls(e){for(;v!==null;){var n=v;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:te||ua(5,n);break;case 1:var o=n.stateNode;if(n.flags&4&&!te)if(t===null)o.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:Ae(n.type,t.memoizedProps);o.componentDidUpdate(a,t.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&ws(n,i,o);break;case 3:var r=n.updateQueue;if(r!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ws(n,r,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var h=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&t.focus();break;case"img":h.src&&(t.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var g=u.memoizedState;if(g!==null){var y=g.dehydrated;y!==null&&Dt(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}te||n.flags&512&&Yi(n)}catch(c){z(n,n.return,c)}}if(n===e){v=null;break}if(t=n.sibling,t!==null){t.return=n.return,v=t;break}v=n.return}}function Gs(e){for(;v!==null;){var n=v;if(n===e){v=null;break}var t=n.sibling;if(t!==null){t.return=n.return,v=t;break}v=n.return}}function Ds(e){for(;v!==null;){var n=v;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ua(4,n)}catch(h){z(n,t,h)}break;case 1:var o=n.stateNode;if(typeof o.componentDidMount=="function"){var a=n.return;try{o.componentDidMount()}catch(h){z(n,a,h)}}var i=n.return;try{Yi(n)}catch(h){z(n,i,h)}break;case 5:var r=n.return;try{Yi(n)}catch(h){z(n,r,h)}}}catch(h){z(n,n.return,h)}if(n===e){v=null;break}var s=n.sibling;if(s!==null){s.return=n.return,v=s;break}v=n.return}}var ud=Math.ceil,$o=qe.ReactCurrentDispatcher,vr=qe.ReactCurrentOwner,Ce=qe.ReactCurrentBatchConfig,Y=0,$=null,H=null,X=0,ye=0,Hn=cn(0),U=0,Ut=null,jn=0,ma=0,br=0,jt=null,he=null,Cr=0,at=1/0,Ee=null,Qo=!1,Li=null,hn=null,wo=!1,nn=null,Xo=0,Ot=0,Gi=null,Ao=-1,jo=0;function ie(){return Y&6?F():Ao!==-1?Ao:Ao=F()}function ln(e){return e.mode&1?Y&2&&X!==0?X&-X:Um.transition!==null?(jo===0&&(jo=Th()),jo):(e=V,e!==0||(e=window.event,e=e===void 0?16:Yh(e.type)),e):1}function Ve(e,n,t,o){if(50<Ot)throw Ot=0,Gi=null,Error(w(185));Kt(e,t,o),(!(Y&2)||e!==$)&&(e===$&&(!(Y&2)&&(ma|=t),U===4&&Ze(e,X)),de(e,o),t===1&&Y===0&&!(n.mode&1)&&(at=F()+500,sa&&gn()))}function de(e,n){var t=e.callbackNode;Uu(e,n);var o=Go(e,e===$?X:0);if(o===0)t!==null&&Hr(t),e.callbackNode=null,e.callbackPriority=0;else if(n=o&-o,e.callbackPriority!==n){if(t!=null&&Hr(t),n===1)e.tag===0?Rm(xs.bind(null,e)):$h(xs.bind(null,e)),Mm(function(){!(Y&6)&&gn()}),t=null;else{switch(Wh(o)){case 1:t=Ki;break;case 4:t=bh;break;case 16:t=Lo;break;case 536870912:t=Ch;break;default:t=Lo}t=Kl(t,Ml.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ml(e,n){if(Ao=-1,jo=0,Y&6)throw Error(w(327));var t=e.callbackNode;if(Qn()&&e.callbackNode!==t)return null;var o=Go(e,e===$?X:0);if(o===0)return null;if(o&30||o&e.expiredLanes||n)n=Zo(e,o);else{n=o;var a=Y;Y|=2;var i=Fl();($!==e||X!==n)&&(Ee=null,at=F()+500,Tn(e,n));do try{yd();break}catch(s){Jl(e,s)}while(!0);hr(),$o.current=i,Y=a,H!==null?n=0:($=null,X=0,n=U)}if(n!==0){if(n===2&&(a=hi(e),a!==0&&(o=a,n=Di(e,a))),n===1)throw t=Ut,Tn(e,0),Ze(e,o),de(e,F()),t;if(n===6)Ze(e,o);else{if(a=e.current.alternate,!(o&30)&&!md(a)&&(n=Zo(e,o),n===2&&(i=hi(e),i!==0&&(o=i,n=Di(e,i))),n===1))throw t=Ut,Tn(e,0),Ze(e,o),de(e,F()),t;switch(e.finishedWork=a,e.finishedLanes=o,n){case 0:case 1:throw Error(w(345));case 2:pn(e,he,Ee);break;case 3:if(Ze(e,o),(o&130023424)===o&&(n=Cr+500-F(),10<n)){if(Go(e,0)!==0)break;if(a=e.suspendedLanes,(a&o)!==o){ie(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=fi(pn.bind(null,e,he,Ee),n);break}pn(e,he,Ee);break;case 4:if(Ze(e,o),(o&4194240)===o)break;for(n=e.eventTimes,a=-1;0<o;){var r=31-Ye(o);i=1<<r,r=n[r],r>a&&(a=r),o&=~i}if(o=a,o=F()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*ud(o/1960))-o,10<o){e.timeoutHandle=fi(pn.bind(null,e,he,Ee),o);break}pn(e,he,Ee);break;case 5:pn(e,he,Ee);break;default:throw Error(w(329))}}}return de(e,F()),e.callbackNode===t?Ml.bind(null,e):null}function Di(e,n){var t=jt;return e.current.memoizedState.isDehydrated&&(Tn(e,n).flags|=256),e=Zo(e,n),e!==2&&(n=he,he=t,n!==null&&xi(n)),e}function xi(e){he===null?he=e:he.push.apply(he,e)}function md(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var o=0;o<t.length;o++){var a=t[o],i=a.getSnapshot;a=a.value;try{if(!Pe(i(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ze(e,n){for(n&=~br,n&=~ma,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ye(n),o=1<<t;e[t]=-1,n&=~o}}function xs(e){if(Y&6)throw Error(w(327));Qn();var n=Go(e,0);if(!(n&1))return de(e,F()),null;var t=Zo(e,n);if(e.tag!==0&&t===2){var o=hi(e);o!==0&&(n=o,t=Di(e,o))}if(t===1)throw t=Ut,Tn(e,0),Ze(e,n),de(e,F()),t;if(t===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,pn(e,he,Ee),de(e,F()),null}function Tr(e,n){var t=Y;Y|=1;try{return e(n)}finally{Y=t,Y===0&&(at=F()+500,sa&&gn())}}function On(e){nn!==null&&nn.tag===0&&!(Y&6)&&Qn();var n=Y;Y|=1;var t=Ce.transition,o=V;try{if(Ce.transition=null,V=1,e)return e()}finally{V=o,Ce.transition=t,Y=n,!(Y&6)&&gn()}}function Wr(){ye=Hn.current,G(Hn)}function Tn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,zm(t)),H!==null)for(t=H.return;t!==null;){var o=t;switch(ir(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&_o();break;case 3:tt(),G(ue),G(oe),cr();break;case 5:yr(o);break;case 4:tt();break;case 13:G(N);break;case 19:G(N);break;case 10:lr(o.type._context);break;case 22:case 23:Wr()}t=t.return}if($=e,H=e=un(e.current,null),X=ye=n,U=0,Ut=null,br=ma=jn=0,he=jt=null,bn!==null){for(n=0;n<bn.length;n++)if(t=bn[n],o=t.interleaved,o!==null){t.interleaved=null;var a=o.next,i=t.pending;if(i!==null){var r=i.next;i.next=a,o.next=r}t.pending=o}bn=null}return e}function Jl(e,n){do{var t=H;try{if(hr(),Wo.current=Ko,qo){for(var o=E.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}qo=!1}if(An=0,K=R=E=null,Bt=!1,Ft=0,vr.current=null,t===null||t.return===null){U=1,Ut=n,H=null;break}e:{var i=e,r=t.return,s=t,h=n;if(n=X,s.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var u=h,g=s,y=g.tag;if(!(g.mode&1)&&(y===0||y===11||y===15)){var c=g.alternate;c?(g.updateQueue=c.updateQueue,g.memoizedState=c.memoizedState,g.lanes=c.lanes):(g.updateQueue=null,g.memoizedState=null)}var I=Ts(r);if(I!==null){I.flags&=-257,Ws(I,r,s,i,n),I.mode&1&&Cs(i,u,n),n=I,h=u;var p=n.updateQueue;if(p===null){var k=new Set;k.add(h),n.updateQueue=k}else p.add(h);break e}else{if(!(n&1)){Cs(i,u,n),Sr();break e}h=Error(w(426))}}else if(x&&s.mode&1){var D=Ts(r);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Ws(D,r,s,i,n),rr(ot(h,s));break e}}i=h=ot(h,s),U!==4&&(U=2),jt===null?jt=[i]:jt.push(i),i=r;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var m=Sl(i,h,n);fs(i,m);break e;case 1:s=h;var l=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof l.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(hn===null||!hn.has(d)))){i.flags|=65536,n&=-n,i.lanes|=n;var f=Bl(i,s,n);fs(i,f);break e}}i=i.return}while(i!==null)}Rl(t)}catch(b){n=b,H===t&&t!==null&&(H=t=t.return);continue}break}while(!0)}function Fl(){var e=$o.current;return $o.current=Ko,e===null?Ko:e}function Sr(){(U===0||U===3||U===2)&&(U=4),$===null||!(jn&268435455)&&!(ma&268435455)||Ze($,X)}function Zo(e,n){var t=Y;Y|=2;var o=Fl();($!==e||X!==n)&&(Ee=null,Tn(e,n));do try{dd();break}catch(a){Jl(e,a)}while(!0);if(hr(),Y=t,$o.current=o,H!==null)throw Error(w(261));return $=null,X=0,U}function dd(){for(;H!==null;)Hl(H)}function yd(){for(;H!==null&&!Nu();)Hl(H)}function Hl(e){var n=ql(e.alternate,e,ye);e.memoizedProps=e.pendingProps,n===null?Rl(e):H=n,vr.current=null}function Rl(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=rd(t,n),t!==null){t.flags&=32767,H=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{U=6,H=null;return}}else if(t=id(t,n,ye),t!==null){H=t;return}if(n=n.sibling,n!==null){H=n;return}H=n=e}while(n!==null);U===0&&(U=5)}function pn(e,n,t){var o=V,a=Ce.transition;try{Ce.transition=null,V=1,cd(e,n,t,o)}finally{Ce.transition=a,V=o}return null}function cd(e,n,t,o){do Qn();while(nn!==null);if(Y&6)throw Error(w(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(qu(e,i),e===$&&(H=$=null,X=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||wo||(wo=!0,Kl(Lo,function(){return Qn(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Ce.transition,Ce.transition=null;var r=V;V=1;var s=Y;Y|=4,vr.current=null,hd(e,t),_l(t,e),Lm(ci),Do=!!yi,ci=yi=null,e.current=t,ld(t),Eu(),Y=s,V=r,Ce.transition=i}else e.current=t;if(wo&&(wo=!1,nn=e,Xo=a),i=e.pendingLanes,i===0&&(hn=null),Mu(t.stateNode),de(e,F()),n!==null)for(o=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],o(a.value,{componentStack:a.stack,digest:a.digest});if(Qo)throw Qo=!1,e=Li,Li=null,e;return Xo&1&&e.tag!==0&&Qn(),i=e.pendingLanes,i&1?e===Gi?Ot++:(Ot=0,Gi=e):Ot=0,gn(),null}function Qn(){if(nn!==null){var e=Wh(Xo),n=Ce.transition,t=V;try{if(Ce.transition=null,V=16>e?16:e,nn===null)var o=!1;else{if(e=nn,nn=null,Xo=0,Y&6)throw Error(w(331));var a=Y;for(Y|=4,v=e.current;v!==null;){var i=v,r=i.child;if(v.flags&16){var s=i.deletions;if(s!==null){for(var h=0;h<s.length;h++){var u=s[h];for(v=u;v!==null;){var g=v;switch(g.tag){case 0:case 11:case 15:At(8,g,i)}var y=g.child;if(y!==null)y.return=g,v=y;else for(;v!==null;){g=v;var c=g.sibling,I=g.return;if(xl(g),g===u){v=null;break}if(c!==null){c.return=I,v=c;break}v=I}}}var p=i.alternate;if(p!==null){var k=p.child;if(k!==null){p.child=null;do{var D=k.sibling;k.sibling=null,k=D}while(k!==null)}}v=i}}if(i.subtreeFlags&2064&&r!==null)r.return=i,v=r;else e:for(;v!==null;){if(i=v,i.flags&2048)switch(i.tag){case 0:case 11:case 15:At(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,v=m;break e}v=i.return}}var l=e.current;for(v=l;v!==null;){r=v;var d=r.child;if(r.subtreeFlags&2064&&d!==null)d.return=r,v=d;else e:for(r=l;v!==null;){if(s=v,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ua(9,s)}}catch(b){z(s,s.return,b)}if(s===r){v=null;break e}var f=s.sibling;if(f!==null){f.return=s.return,v=f;break e}v=s.return}}if(Y=a,gn(),xe&&typeof xe.onPostCommitFiberRoot=="function")try{xe.onPostCommitFiberRoot(ta,e)}catch{}o=!0}return o}finally{V=t,Ce.transition=n}}return!1}function Ns(e,n,t){n=ot(t,n),n=Sl(e,n,1),e=sn(e,n,1),n=ie(),e!==null&&(Kt(e,1,n),de(e,n))}function z(e,n,t){if(e.tag===3)Ns(e,e,t);else for(;n!==null;){if(n.tag===3){Ns(n,e,t);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(hn===null||!hn.has(o))){e=ot(t,e),e=Bl(n,e,1),n=sn(n,e,1),e=ie(),n!==null&&(Kt(n,1,e),de(n,e));break}}n=n.return}}function gd(e,n,t){var o=e.pingCache;o!==null&&o.delete(n),n=ie(),e.pingedLanes|=e.suspendedLanes&t,$===e&&(X&t)===t&&(U===4||U===3&&(X&130023424)===X&&500>F()-Cr?Tn(e,0):br|=t),de(e,n)}function Ul(e,n){n===0&&(e.mode&1?(n=ro,ro<<=1,!(ro&130023424)&&(ro=4194304)):n=1);var t=ie();e=Re(e,n),e!==null&&(Kt(e,n,t),de(e,t))}function fd(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ul(e,t)}function wd(e,n){var t=0;switch(e.tag){case 13:var o=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(w(314))}o!==null&&o.delete(n),Ul(e,t)}var ql;ql=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ue.current)le=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return le=!1,ad(e,n,t);le=!!(e.flags&131072)}else le=!1,x&&n.flags&1048576&&Qh(n,Jo,n.index);switch(n.lanes=0,n.tag){case 2:var o=n.type;Bo(e,n),e=n.pendingProps;var a=Zn(n,oe.current);$n(n,t),a=fr(null,n,o,e,a,t);var i=wr();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,me(o)?(i=!0,zo(n)):i=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,mr(n),a.updater=ha,n.stateNode=a,a._reactInternals=n,Ci(n,o,e,t),n=Si(null,n,o,!0,i,t)):(n.tag=0,x&&i&&ar(n),ae(null,n,a,t),n=n.child),n;case 16:o=n.elementType;e:{switch(Bo(e,n),e=n.pendingProps,a=o._init,o=a(o._payload),n.type=o,a=n.tag=pd(o),e=Ae(o,e),a){case 0:n=Wi(null,n,o,e,t);break e;case 1:n=As(null,n,o,e,t);break e;case 11:n=Ss(null,n,o,e,t);break e;case 14:n=Bs(null,n,o,Ae(o.type,e),t);break e}throw Error(w(306,o,""))}return n;case 0:return o=n.type,a=n.pendingProps,a=n.elementType===o?a:Ae(o,a),Wi(e,n,o,a,t);case 1:return o=n.type,a=n.pendingProps,a=n.elementType===o?a:Ae(o,a),As(e,n,o,a,t);case 3:e:{if(Yl(n),e===null)throw Error(w(387));o=n.pendingProps,i=n.memoizedState,a=i.element,nl(e,n),Ro(n,o,null,t);var r=n.memoizedState;if(o=r.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:r.cache,pendingSuspenseBoundaries:r.pendingSuspenseBoundaries,transitions:r.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){a=ot(Error(w(423)),n),n=js(e,n,o,t,a);break e}else if(o!==a){a=ot(Error(w(424)),n),n=js(e,n,o,t,a);break e}else for(ce=rn(n.stateNode.containerInfo.firstChild),ge=n,x=!0,Oe=null,t=il(n,null,o,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(et(),o===a){n=Ue(e,n,t);break e}ae(e,n,o,t)}n=n.child}return n;case 5:return rl(n),e===null&&ki(n),o=n.type,a=n.pendingProps,i=e!==null?e.memoizedProps:null,r=a.children,gi(o,a)?r=null:i!==null&&gi(o,i)&&(n.flags|=32),Ol(e,n),ae(e,n,r,t),n.child;case 6:return e===null&&ki(n),null;case 13:return Vl(e,n,t);case 4:return dr(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=nt(n,null,o,t):ae(e,n,o,t),n.child;case 11:return o=n.type,a=n.pendingProps,a=n.elementType===o?a:Ae(o,a),Ss(e,n,o,a,t);case 7:return ae(e,n,n.pendingProps,t),n.child;case 8:return ae(e,n,n.pendingProps.children,t),n.child;case 12:return ae(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(o=n.type._context,a=n.pendingProps,i=n.memoizedProps,r=a.value,P(Fo,o._currentValue),o._currentValue=r,i!==null)if(Pe(i.value,r)){if(i.children===a.children&&!ue.current){n=Ue(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var s=i.dependencies;if(s!==null){r=i.child;for(var h=s.firstContext;h!==null;){if(h.context===o){if(i.tag===1){h=Je(-1,t&-t),h.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var g=u.pending;g===null?h.next=h:(h.next=g.next,g.next=h),u.pending=h}}i.lanes|=t,h=i.alternate,h!==null&&(h.lanes|=t),vi(i.return,t,n),s.lanes|=t;break}h=h.next}}else if(i.tag===10)r=i.type===n.type?null:i.child;else if(i.tag===18){if(r=i.return,r===null)throw Error(w(341));r.lanes|=t,s=r.alternate,s!==null&&(s.lanes|=t),vi(r,t,n),r=i.sibling}else r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===n){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}ae(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,o=n.pendingProps.children,$n(n,t),a=Te(a),o=o(a),n.flags|=1,ae(e,n,o,t),n.child;case 14:return o=n.type,a=Ae(o,n.pendingProps),a=Ae(o.type,a),Bs(e,n,o,a,t);case 15:return Al(e,n,n.type,n.pendingProps,t);case 17:return o=n.type,a=n.pendingProps,a=n.elementType===o?a:Ae(o,a),Bo(e,n),n.tag=1,me(o)?(e=!0,zo(n)):e=!1,$n(n,t),ol(n,o,a),Ci(n,o,a,t),Si(null,n,o,!0,e,t);case 19:return Pl(e,n,t);case 22:return jl(e,n,t)}throw Error(w(156,n.tag))};function Kl(e,n){return vh(e,n)}function Id(e,n,t,o){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(e,n,t,o){return new Id(e,n,t,o)}function Br(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pd(e){if(typeof e=="function")return Br(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ri)return 11;if(e===Ui)return 14}return 2}function un(e,n){var t=e.alternate;return t===null?(t=be(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Oo(e,n,t,o,a,i){var r=2;if(o=e,typeof e=="function")Br(e)&&(r=1);else if(typeof e=="string")r=5;else e:switch(e){case Gn:return Wn(t.children,a,i,n);case Hi:r=8,a|=8;break;case Ua:return e=be(12,t,n,a|2),e.elementType=Ua,e.lanes=i,e;case qa:return e=be(13,t,n,a),e.elementType=qa,e.lanes=i,e;case Ka:return e=be(19,t,n,a),e.elementType=Ka,e.lanes=i,e;case ah:return da(t,a,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case th:r=10;break e;case oh:r=9;break e;case Ri:r=11;break e;case Ui:r=14;break e;case $e:r=16,o=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return n=be(r,t,n,a),n.elementType=e,n.type=o,n.lanes=i,n}function Wn(e,n,t,o){return e=be(7,e,o,n),e.lanes=t,e}function da(e,n,t,o){return e=be(22,e,o,n),e.elementType=ah,e.lanes=t,e.stateNode={isHidden:!1},e}function Fa(e,n,t){return e=be(6,e,null,n),e.lanes=t,e}function Ha(e,n,t){return n=be(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function kd(e,n,t,o,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wa(0),this.expirationTimes=Wa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wa(0),this.identifierPrefix=o,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ar(e,n,t,o,a,i,r,s,h){return e=new kd(e,n,t,s,h),n===1?(n=1,i===!0&&(n|=8)):n=0,i=be(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:o,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},mr(i),e}function vd(e,n,t){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ln,key:o==null?null:""+o,children:e,containerInfo:n,implementation:t}}function $l(e){if(!e)return dn;e=e._reactInternals;e:{if(Vn(e)!==e||e.tag!==1)throw Error(w(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(me(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(w(171))}if(e.tag===1){var t=e.type;if(me(t))return Kh(e,t,n)}return n}function Ql(e,n,t,o,a,i,r,s,h){return e=Ar(t,o,!0,e,a,i,r,s,h),e.context=$l(null),t=e.current,o=ie(),a=ln(t),i=Je(o,a),i.callback=n??null,sn(t,i,a),e.current.lanes=a,Kt(e,a,o),de(e,o),e}function ya(e,n,t,o){var a=n.current,i=ie(),r=ln(a);return t=$l(t),n.context===null?n.context=t:n.pendingContext=t,n=Je(i,r),n.payload={element:e},o=o===void 0?null:o,o!==null&&(n.callback=o),e=sn(a,n,r),e!==null&&(Ve(e,a,r,i),To(e,a,r)),r}function ea(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Es(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function jr(e,n){Es(e,n),(e=e.alternate)&&Es(e,n)}function bd(){return null}var Xl=typeof reportError=="function"?reportError:function(e){console.error(e)};function Or(e){this._internalRoot=e}ca.prototype.render=Or.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(w(409));ya(e,n,null,null)};ca.prototype.unmount=Or.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;On(function(){ya(null,e,null,null)}),n[He]=null}};function ca(e){this._internalRoot=e}ca.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ah();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Xe.length&&n!==0&&n<Xe[t].priority;t++);Xe.splice(t,0,e),t===0&&Oh(e)}};function Yr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ga(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _s(){}function Cd(e,n,t,o,a){if(a){if(typeof o=="function"){var i=o;o=function(){var u=ea(r);i.call(u)}}var r=Ql(n,o,e,0,null,!1,!1,"",_s);return e._reactRootContainer=r,e[He]=r.current,Et(e.nodeType===8?e.parentNode:e),On(),r}for(;a=e.lastChild;)e.removeChild(a);if(typeof o=="function"){var s=o;o=function(){var u=ea(h);s.call(u)}}var h=Ar(e,0,!1,null,null,!1,!1,"",_s);return e._reactRootContainer=h,e[He]=h.current,Et(e.nodeType===8?e.parentNode:e),On(function(){ya(n,h,t,o)}),h}function fa(e,n,t,o,a){var i=t._reactRootContainer;if(i){var r=i;if(typeof a=="function"){var s=a;a=function(){var h=ea(r);s.call(h)}}ya(n,r,e,a)}else r=Cd(t,n,e,a,o);return ea(r)}Sh=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=kt(n.pendingLanes);t!==0&&($i(n,t|1),de(n,F()),!(Y&6)&&(at=F()+500,gn()))}break;case 13:On(function(){var o=Re(e,1);if(o!==null){var a=ie();Ve(o,e,1,a)}}),jr(e,1)}};Qi=function(e){if(e.tag===13){var n=Re(e,134217728);if(n!==null){var t=ie();Ve(n,e,134217728,t)}jr(e,134217728)}};Bh=function(e){if(e.tag===13){var n=ln(e),t=Re(e,n);if(t!==null){var o=ie();Ve(t,e,n,o)}jr(e,n)}};Ah=function(){return V};jh=function(e,n){var t=V;try{return V=e,n()}finally{V=t}};ii=function(e,n,t){switch(n){case"input":if(Xa(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var o=t[n];if(o!==e&&o.form===e.form){var a=ra(o);if(!a)throw Error(w(90));rh(o),Xa(o,a)}}}break;case"textarea":hh(e,t);break;case"select":n=t.value,n!=null&&Rn(e,!!t.multiple,n,!1)}};gh=Tr;fh=On;var Td={usingClientEntryPoint:!1,Events:[Qt,En,ra,yh,ch,Tr]},wt={findFiberByHostInstance:vn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Wd={bundleType:wt.bundleType,version:wt.version,rendererPackageName:wt.rendererPackageName,rendererConfig:wt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ph(e),e===null?null:e.stateNode},findFiberByHostInstance:wt.findFiberByHostInstance||bd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Io.isDisabled&&Io.supportsFiber)try{ta=Io.inject(Wd),xe=Io}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Td;we.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yr(n))throw Error(w(200));return vd(e,n,null,t)};we.createRoot=function(e,n){if(!Yr(e))throw Error(w(299));var t=!1,o="",a=Xl;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=Ar(e,1,!1,null,null,t,!1,o,a),e[He]=n.current,Et(e.nodeType===8?e.parentNode:e),new Or(n)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=ph(n),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return On(e)};we.hydrate=function(e,n,t){if(!ga(n))throw Error(w(200));return fa(null,e,n,!0,t)};we.hydrateRoot=function(e,n,t){if(!Yr(e))throw Error(w(405));var o=t!=null&&t.hydratedSources||null,a=!1,i="",r=Xl;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),n=Ql(n,null,e,1,t??null,a,!1,i,r),e[He]=n.current,Et(e),o)for(e=0;e<o.length;e++)t=o[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new ca(n)};we.render=function(e,n,t){if(!ga(n))throw Error(w(200));return fa(null,e,n,!1,t)};we.unmountComponentAtNode=function(e){if(!ga(e))throw Error(w(40));return e._reactRootContainer?(On(function(){fa(null,null,e,!1,function(){e._reactRootContainer=null,e[He]=null})}),!0):!1};we.unstable_batchedUpdates=Tr;we.unstable_renderSubtreeIntoContainer=function(e,n,t,o){if(!ga(t))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return fa(e,n,t,!1,o)};we.version="18.2.0-next-9e3b772b8-20220608";function Zl(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zl)}catch(e){console.error(e)}}Zl(),Qs.exports=we;var Sd=Qs.exports;const Bd=nu(Sd);function Ad({index:e,songOne:n,songTwo:t,handlePreference:o,prompt:a}){return pe.jsxs("div",{className:"song-display-container",children:[pe.jsx("div",{children:a}),pe.jsx("div",{className:"song-item",children:n}),pe.jsx("button",{onClick:o(e,"llama"),children:"Prefer Song One"}),pe.jsx("div",{className:"song-item",children:t}),pe.jsx("button",{onClick:o(e,"lyre"),children:"Prefer Song Two"})]})}const jd=[{name:"SWINE",artist:"Demi Lovato",llama_response:`Verse 1:
I'm sick of being told what to do, sick of the chains that you've put on me
I've got the right to make my own decisions, to live my life wild and free
I won't be held down by societal expectations, I won't be silenced by your lies
I'm gonna take back control of my body, gonna rise up and reach for the skies

Chorus:
I own my body, I own my soul
I make my own choices, I'm in control
I won't be held down, I won't be tamed
I'm gonna live my life on my own terms, I'm gonna be the one to claim

Verse 2:
You can try to take away my reproductive rights, but you'll never take away my voice
I'll keep on fighting, I'll keep on choosing, I'll never let you take control
I'll stand up for my bodily autonomy, I'll stand up for my right to be free
I'll never let you dictate my choices, I'll never let you control my destiny

Chorus:
I own my body, I own my soul
I make my own choices, I'm in control
I won't be held down, I won't be tamed
I'm gonna live my life on my own terms, I'm gonna be the one to claim

Bridge:
I know you think you have the power, but you don't know me
I'm stronger than you think, I'm braver than you'll ever be
I'll rise up and take back what's mine, I'll make my voice heard loud and clear
I won't be silenced, I won't be ignored, I'll be the one to bring change here

Chorus:
I own my body, I own my soul
I make my own choices, I'm in control
I won't be held down, I won't be tamed
I'm gonna live my life on my own terms, I'm gonna be the one to claim

Outro:
I'm gonna stand up for what's right, I'm gonna fight for what I believe
I'm gonna be the change that I want to see, I'm gonna be the one to break the chain
I'm gonna own my body, I'm gonna own my life
I'm gonna be the one to take back control, I'm gonna be the one to thrive.

Musical Arrangement:
The song should have a strong, anthemic quality, with a driving rhythm and soaring melodies. The verses should have a slower, more introspective pace, with a focus on the lyrics and message. The chorus should be more upbeat and energetic, with a catchy and memorable melody. The bridge should have a more emotional and powerful delivery, with a focus on the personal struggle and determination. The song should incorporate a mix of acoustic and electric instruments, with a contemporary and pop-rock sensibility. The production should be bold and empowering, with a focus on creating a sense of unity and solidarity among the listeners.`,lyre_response:`[Intro]
Don't tell me what to do
I'm using my voice, I will always defend
Everybody's looking at me
Don't tell me what to do
[Verse 1]
They say, "Girl, you're such a fool
You better hold that baby, it's your duty"
I say, "Fuck that, I won't do it
I'm using my voice, I will always defend
My body's my own
Don't tell me what to do"
[Pre-Chorus]
They say, "Girl, you're such a fool
You better hold that baby, it's your duty"
I say, "Fuck that, I won't do it
I'm using my voice, I will always defend
My body's my own
Don't tell me what to do"
[Chorus]
I'm using my voice, I will always defend
My body's my own
Don't tell me what to do
I'm using my voice, I will always defend
My body's my own
Don't tell me what to do
[Verse 2]
They say, "Girl, you're such a fool
You better hold that baby, it's your duty"
I say, "Fuck that, I won't do it
I'm using my voice, I will always defend
My body's my own
Don't tell me what to do"
[Pre-Chorus]
They say, "Girl, you're such a fool
You better hold that baby, it's your duty"
I say, "Fuck that, I won't do it
I'm using my voice, I will always defend
My body's my own
Don't tell me what to do"
[Chorus]
I'm using my voice, I will always defend
My body's my own
Don't tell me what to do
I'm using my voice, I will always defend
My body's my own
Don't tell me what to do
[Bridge]
I'm using my voice, I will always defend
My body's my own
Don't tell me what to do
I'm using my voice, I will always defend
My body's my own
Don't tell me what to do
I'm using my voice, I will always defend
My body's my own
Don't tell me what to do [Chorus]
I'm using my voice, I will always defend
My body's my own
Don't tell me what to do
I'm using my voice, I will always defend
My body's my own
Don't tell me what to do`,id:9012842},{name:"Search & Rescue",artist:"Drake",llama_response:`Verse 1:
I'm trapped in this bubble, it's all smoke and mirrors
Fame and fortune, it's all just a blur
I'm chasing the dream, but it's not what it seems
Everybody wants a piece of me, but nobody knows the real me

Chorus:
Rescue me from this superficial life
Where the club and trap lifestyle is the only strife
I need someone who understands, who's not swayed by the fame
Somebody who'll stand by me, and be my guiding flame

Verse 2:
I see the world through different eyes, it's not all glamour and lights
The pressure's on, to keep it real, to keep it tight
But when you're living life in the public eye, it's hard to keep it real
I'm tired of the facade, I need someone who'll make me feel

Chorus:
Rescue me from this superficial life
Where the club and trap lifestyle is the only strife
I need someone who understands, who's not swayed by the fame
Somebody who'll stand by me, and be my guiding flame

Verse 3:
Loyalty's a rare find, in this game of give and take
I need someone who'll stand by me, when the lights go down and the cameras break
Someone who'll see the real me, beyond the fame and the fortune
Somebody who'll be my rock, and never leave me wondering

Chorus:
Rescue me from this superficial life
Where the club and trap lifestyle is the only strife
I need someone who understands, who's not swayed by the fame
Somebody who'll stand by me, and be my guiding flame

Bridge:
I know it's hard to find, someone who's genuine and true
But I'll keep on searching, until I find my heart's clue
I'll keep on holding on, to the hope that I feel
And I'll never let go, of the love that I conceal

Chorus:
Rescue me from this superficial life
Where the club and trap lifestyle is the only strife
I need someone who understands, who's not swayed by the fame
Somebody who'll stand by me, and be my guiding flame

Outro:
I'm reaching out, for someone to hold my hand
In this world of make-believe, I need someone to understand
I'm tired of the lies, I need someone to tell the truth
I need someone who'll rescue me, and be my saving youth.

The musical arrangement should blend Drake's signature moody hip-hop beats with introspective melodies, capturing the essence of his contemplative yet catchy sound. The use of atmospheric synths and a slow-burning beat create a sense of introspection and longing, while the chorus features a soaring melody that conveys a heartfelt plea for rescue. The verses should reflect on the challenges of expressing true emotions and the fear of vulnerability, while the bridge offers a glimmer of hope and determination. Overall, the song should convey a sense of yearning for genuine connection and understanding, beyond the superficial trappings of fame and fortune.`,lyre_response:`[Intro]
Yeah, yeah
It's the 6ix God and I'm back in the booth, yeah
Skrrt, skrrt
[Verse 1]
I'm not even in the club, but I'm tryna get rescued
From this shit, from this shit, it's so superficial
You see all the girls, they wanna give me a taskin'
But I only got eyes for one, and she ain't even a fan
She don't care about my money or my fame
She don't care that I'm a popular man
She don't care that I'm a famous rapper
She just want to get to know me as a person
And that's somethin' that no one else can offer
You know a real deal hard to find, right?
That's why I'm lookin' for that one in a million
Girl that's into me for me, not for my money
I'm lookin' for that one girl that's loyal
Like my niggas, you know how we do
We like to keep our circle small
We don't gotta be friends with his ex-wives
And yeah, she gotta want me for life
Can I have that? Is that too much to ask?
'Cause I'm tryna get rescued
From this shit, from this shit, it's so superficial
I'm tryna get rescued
From this shit, from this shit, it's so superficial [Chorus]
Rescue me, rescue me, rescue me, rescue me
From this shit, from this shit, it's so superficial
Rescue me, rescue me, rescue me, rescue me
From this shit, from this shit, it's so superficial
[Verse 2]
And you see all this stuff on the 'Gram, that's not me, woman
I'm not hanging with all these girls, that's not love, woman
You see a side of me that you never seen, woman
I'm just tryna get rescued from this life, woman
And I know that it's scary, I know that it's hard
'Cause you only see me in the daytime, you should see me at night
When all the curtains are closed and I'm by myself
Yeah, that's when I'm the most vulnerable
'Cause I'm tryna get rescued
From this shit, from this shit, it's so superficial
I'm tryna get rescued
From this shit, from this shit, it's so superficial
[Outro]
I'm just tryna get rescued
From this shit, from this shit, it's so superficial
Yeah, so superficial
Yeah, so superficial`,id:8955184},{name:"BACK THAT UP TO THE BEAT",artist:"Michael Jackson",llama_response:`(Verse 1)
Yo, it's the weekend, let's get it started
Got my dancing shoes on, gonna light up the party
Got my rhythm on lock, got my moves so sharp
Gonna show the world what I'm working with, yeah

(Chorus)
Music, music, it's the beat of my heart
Movin' my body, let the rhythm set us apart
We're livin' life to the fullest, gotta keep it goin'
Music, music, it's the sound of our glory

(Verse 2)
I'm feelin' like a star, shinin' bright on the stage
Got my band of brothers, we're gonna rock this age
Got my guitar and my mic, gotta let my voice be heard
Gonna make this crowd go wild, like we're living life unplugged

(Chorus)
Music, music, it's the beat of my heart
Movin' my body, let the rhythm set us apart
We're livin' life to the fullest, gotta keep it goin'
Music, music, it's the sound of our glory

(Bridge)
We're livin' like kings and queens, gotta keep it real
Got my crown on tight, got my sunglasses on
We're shinin' bright like diamonds, gotta let our light shine
Gonna keep on dancin', till the morning sun is fine

(Chorus)
Music, music, it's the beat of my heart
Movin' my body, let the rhythm set us apart
We're livin' life to the fullest, gotta keep it goin'
Music, music, it's the sound of our glory

(Outro)
So let's keep on dancing, till the party's over
Gonna make this night last, like we're living in a dream
Got my music in my soul, gotta let it take control
Gonna keep on moving, like a symphony in the night.

This song is written in the style of Michael Jackson, incorporating his signature rhythmic verses and catchy, repetitive choruses. The lyrics celebrate a carefree lifestyle and a luxurious attitude, with references to partying and dancing all night long. The song also includes elements of glamorous imagery, similar to Jackson's polished pop sound. The chorus is particularly reminiscent of Jackson's hit song "Billie Jean," with its repetitive phrase and emphasis on the beat of the heart. Overall, the song is designed to get people moving and feeling the music, with a celebratory mood that's hard to resist.`,lyre_response:`[Intro]
Don't you want to dance with me?
Don't you want to dance with me?
Don't you want to dance with me?
Don't you want to dance with me?
[Verse 1]
I can rock you
I can roll you
I can make you feel it in your soul
I can make it hot for you
I can make it cool for you
I can make you feel it in your soul
[Pre-Chorus]
I can make the music
Take you to that place, yeah
Take you to that place
I can make the music
Take you to that place, yeah
Take you to that place
[Chorus]
Don't you want to dance with me?
Don't you want to dance with me?
Don't you want to dance with me?
Don't you want to dance with me?
(Don't you want to dance with me?)
Don't you want to dance with me?
Don't you want to dance with me?
Don't you want to dance with me?
Don't you want to dance with me?
(Don't you want to dance with me?)
[Verse 2]
I can make the music
Take you to that place, yeah
Take you to that place
I can make the music
Take you to that place, yeah
Take you to that place
[Pre-Chorus]
I can make the music
Take you to that place, yeah
Take you to that place
I can make the music
Take you to that place, yeah
Take you to that place
[Chorus]
Don't you want to dance with me?
Don't you want to dance with me?
Don't you want to dance with me?
Don't you want to dance with me?
(Don't you want to dance with me?)
Don't you want to dance with me?
Don't you want to dance with me?
Don't you want to dance with me?
Don't you want to dance with me?
(Don't you want to dance with me?)
[Bridge]
You can go to the discothèques
Spend your money 'til you're broke
But you can't buy what I'm giving you
You can go to the discothèques
Spend your money 'til you're broke
But you can't buy what I'm giving you
[Chorus]
Don't you want to dance with me?
Don't you want to dance with me?
Don't you want to dance with me?
Don't you want to dance with me?
(Don't you want to dance with me?)
Don't you want to dance with me?
Don't you want to dance with me?
Don't you want to dance with me?
Don't you want to dance with me?
(Don't you want to dance with me?) [Outro]
I can rock you
I can roll you
I can make you feel it in your soul
I can make it hot for you
I can make it cool for you
I can make you feel it in your soul`,id:8838915},{name:"Desire",artist:"Sam Smith",llama_response:`Verse 1:
I've been alone for so long, feeling lost in my mind
Every night, I search for your face, but it's hard to find
The emptiness inside, it's tearing me apart
I need your touch, your love, to heal my broken heart

Chorus:
Please hold me tonight, don't leave me alone
In your arms, I find my home
The thought of you, it elevates me
Transports me to a place of bliss, where I can be free

Verse 2:
I dream of the day, when we can be together
When your skin will touch mine, and our hearts will forever be as one
Until then, I'll hold on to these memories
Of the way you make me feel, the way you set my soul free

Chorus:
Please hold me tonight, don't leave me alone
In your arms, I find my home
The thought of you, it elevates me
Transports me to a place of bliss, where I can be free

Bridge:
I know that life can be cruel, and it's hard to find
A love that's true and real, a love that's always by your side
But I believe in us, I believe in our love
And I know that together, we can rise above

Chorus:
Please hold me tonight, don't leave me alone
In your arms, I find my home
The thought of you, it elevates me
Transports me to a place of bliss, where I can be free

Outro:
I'll be waiting for the night, when you'll hold me tight
And I'll know that everything will be alright
In your arms, I'll find my peace
And I'll never let go, never let go of your love.

Musical Arrangement:

The song should have a slow and melancholic tempo, with a blend of piano, guitar, and strings to create a soulful and emotive atmosphere. The piano should play a prominent role in the arrangement, with a simple but effective melody that underscores the emotional intensity of the lyrics. The guitar should provide a subtle rhythmic accompaniment, while the strings should add depth and texture to the overall sound. The production should be stripped back and intimate, with a focus on showcasing the vocal performance.

Vocal Performance:
The vocal performance should be soulful and emotive, with a focus on conveying the longing and desire of the lyrics. The singer should have a strong, powerful voice that can convey the intensity of the emotions, as well as a softer, more vulnerable tone for the more introspective moments. The vocal delivery should be expressive and nuanced, with a focus on bringing the listener into the emotional world of the song.

Overall, the song should be a powerful ballad that captures the essence of longing and desire for a loved one's presence and touch. The emotive lyrics, combined with the soulful and intimate musical arrangement, should create a sense of bliss and transportation for the listener, leaving them feeling moved and inspired.`,lyre_response:`[Verse 1]
I'm alone, and it's a little too much to take
My heart is breaking, and I don't know how to fix it
So I'm calling you, asking you please
Can I touch you? Can I feel you?
Can I be held by you?
[Pre-Chorus]
Even if it's just for the night
Hold me and don't leave me alone
I'll be alright if I'm with you
[Chorus]
Just hold me and don't leave me alone
Even if it's just for the night
You raise me up, you transport me
To a place so far and bright
Thinking of you lifts me up and up
And up, and up, and up
[Verse 2]
Oh, my baby, you know just what to do
To keep me alive, you touch me with your hand
Oh, you don't know how much I need to feel you
So close, so close to me
[Pre-Chorus]
Even if it's just for the night
Hold me and don't leave me alone
I'll be alright if I'm with you [Chorus]
Just hold me and don't leave me alone
Even if it's just for the night
You raise me up, you transport me
To a place so far and bright
Thinking of you lifts me up and up
And up, and up, and up
[Outro]
Hold me and don't leave me alone
Hold me and don't leave me alone
You raise me up, you transport me
To a place so far and bright
Thinking of you lifts me up and up
And up, and up, and up`,id:9268440},{name:"Say Don’t Go (Taylor’s Version) [From The Vault]",artist:"Taylor Swift",llama_response:`Verse 1:
I've been waiting for your call, for weeks on end
But the silence is killing me, my heart's on its bend
I thought we had a connection, something real
But now I'm just a ghost, lost in your reveal

Chorus:
Please don't go, just ask me why
I'm still holding on, but the pain's in my eyes
I need you to see, the love I have for you
Please don't go, I'll be waiting for you

Verse 2:
I see you moving on, with someone new
But I can't help but wonder, what could have been true
I thought we had a bond, a love so strong
But now I'm just a memory, a song that's gone

Chorus:
Please don't go, just ask me why
I'm still holding on, but the pain's in my eyes
I need you to see, the love I have for you
Please don't go, I'll be waiting for you

Bridge:
I know I'm not the only one, who's felt this pain
But it's hard to let you go, when you never loved me in return
I thought we had a future, a life together to share
But now I'm just a dream, lost in the air

Chorus:
Please don't go, just ask me why
I'm still holding on, but the pain's in my eyes
I need you to see, the love I have for you
Please don't go, I'll be waiting for you

Outro:
I'll be waiting for your call, for one last try
To tell me you feel the same, and give my heart a chance to fly
But until then, I'll keep holding on
Hoping that someday, you'll ask me not to go.

This song captures the emotional turmoil of unrequited love through vivid imagery and storytelling, with a focus on the protagonist's vulnerability and strength in the face of silence and rejection. The catchy refrain and heart-wrenching lyrics convey the longing and pain of being led on, while the narrative-driven verse and bridge emphasize the disparity between the protagonist's feelings and the indifference they receive. The song incorporates Taylor Swift's signature confessional and storytelling songwriting style, with a focus on conveying the emotional intensity of unrequited love.`,lyre_response:`[Refrain]
Don't go, don't go
Please don't go and laugh with someone else
Oh, I won't look at all
But I'll know that you're happy
And that I was the one who didn't measure up
[Verse]
I'm writing this in a cab
Headed home from you know where
And I don't mind that I'm the only one
Who's hurt
I'll just play this song for you
It's about the time that you led me on
But I was too proud to say anything
At all [Refrain]
Don't go, don't go
Please don't go and laugh with someone else
Oh, I won't look at all
But I'll know that you're happy
And that I was the one who didn't measure up
[Bridge]
I'll say it again
There's just no pleasing an ungrateful man
I'll say it again
You're the one who didn't measure up
[Verse]
I'm writing this in a cab
Headed home from you know where
And I don't mind that I'm the only one
Who's hurt
I'll just play this song for you
It's about the time that you led me on
But I was too proud to say anything
At all [Refrain]
Don't go, don't go
Please don't go and laugh with someone else
Oh, I won't look at all
But I'll know that you're happy
And that I was the one who didn't measure up
[Outro]
Didn't measure up, didn't measure up
Didn't measure up, didn't measure up
Didn't measure up, didn't measure up
Didn't measure up, didn't measure up`,id:9538405},{name:"Uber Everywhere (Remix Demo)",artist:"Travis Scott ",llama_response:`(Verse 1)
I'm on a roll, been moving fast, ain't got no time to waste
From city to city, living life to the fullest, gotta keep the pace
Got a new flame every night, but they ain't gonna last
I'm chasing the high, gotta keep the momentum, gotta keep it fast

(Chorus)
I'm living life on the edge, gotta keep it real, gotta keep it real
Got my eyes on the prize, gotta keep it big, gotta keep it bold
I'm on a mission, ain't got no time for no regrets
Got my own lane, ain't gonna stop, gotta keep it lit

(Verse 2)
Living life in the fast lane, gotta keep it real, gotta keep it true
Got my hands on the wheel, ain't gonna slow down, ain't gonna break through
Got a taste for the finer things, gotta keep it luxurious, gotta keep it real
Got a heart full of fire, gotta keep it burning, gotta keep it feel

(Chorus)
I'm living life on the edge, gotta keep it real, gotta keep it real
Got my eyes on the prize, gotta keep it big, gotta keep it bold
I'm on a mission, ain't got no time for no regrets
Got my own lane, ain't gonna stop, gotta keep it lit

(Bridge)
I don't got time for no haters, gotta keep it moving, gotta keep it grooving
Got my own way of living, ain't gonna change, gotta keep it true
Got a heart full of passion, gotta keep it pumping, gotta keep it alive
Got a fire in my soul, gotta keep it burning, gotta keep it thriving

(Verse 3)
I'm on the move, ain't gonna stop, gotta keep it going, gotta keep it real
Got my eyes on the prize, gotta keep it big, gotta keep it bold
Got a life that's on the rise, gotta keep it high, gotta keep it real
Got a heart full of love, gotta keep it beating, gotta keep it feeling

(Chorus)
I'm living life on the edge, gotta keep it real, gotta keep it real
Got my eyes on the prize, gotta keep it big, gotta keep it bold
I'm on a mission, ain't got no time for no regrets
Got my own lane, ain't gonna stop, gotta keep it lit

(Outro)
I'm living life on the edge, gotta keep it real, gotta keep it true
Got my own way of living, ain't gonna change, gotta keep it through
Got a heart full of passion, gotta keep it pumping, gotta keep it alive
Got a fire in my soul, gotta keep it burning, gotta keep it thriving.

This song embodies the essence of Travis Scott's style, with a blend of melodic hip-hop beats, auto-tuned vocals, and ad-libs. The lyrics reflect themes of fleeting relationships, the pursuit of pleasure over substance, and the indifference to criticism, all while maintaining a carefree attitude towards love and money. The vibe of nonchalance and braggadocio is evident throughout the song, similar to Scott's cadence and delivery. The references to luxury brands, nightlife, and a carefree attitude towards love and money add to the overall vibe of the song, which is sure to get stuck in listeners' heads and keep them feeling the beat.`,lyre_response:`[Intro]
(
Yeah, yeah
)
[Bridge]
Every time I come through, they talk about it
Pussy, they talk about it
Pictures, they take about it
Do it, I don't about it
(
Yeah, yeah
)
[Verse 1]
We hop from city to city
Don't got no friends, but we lonely
I'm a sucker for a strange face
Even if it is only for the weekend
We take off 'round 2 or 3 in the morning
Go where we wanna, no reservations
Don't believe in love, but I'm a believer
Eat whatever, just make sure it's not vegetables (Woo)
[Chorus]
Six in the morning to six in the morning
We party like we don't know when the morning's coming (Woo, hey, yeah)
Six in the morning to six in the morning
We party like we don't know when the morning's coming (Woo, hey, yeah, woo)
[Verse 2]
We fly from city to city
I got a show in Tokyo, one in Mexico City
I got a girl in Paris, one in Miami Beachy
I got a problem with the press, always attackin' me (Woo)
I get a little bit of money, throw a little bit of money
I'm surrounded by the gunners, always tryin' to take my stuff (Woo)
I've been all around the world, but I'm not no tourist (Woo, hey, yeah)
I've been everywhere from Paris to Mexico City (Woo, hey, yeah)
They wanna talk about the fame, say it's such a tragedy (Woo, hey, yeah)
I'm here, I'm there, I'm everywhere (Woo, hey, yeah)
I got a problem with the time, I'm always sleepin' late (Woo, hey, yeah)
I don't believe in love, but I'm a believer
Eat whatever, just make sure it's not vegetables [Chorus]
Six in the morning to six in the morning
We party like we don't know when the morning's coming (Woo, hey, yeah)
Six in the morning to six in the morning
We party like we don't know when the morning's coming (Woo, hey, yeah, woo)
[Verse 3]
The weekend is my favorite part of the week
I do whatever to get that pussy wet (Yeah)
I got no friends, but I'm never lonely
Fuck her 'til she cry, then fuck her bestie (Woo, hey, yeah)
I'm not no gangster, but I'm not no lily-white
I'm more like "Fuck it," I'm a "Fuck yee" (Woo)
You could call me Trav, but on the internet, I'm called La Flame (La Flame, woo, hey, yeah)
You could call her T, but on the internet, she called Jane (Hey, yeah, woo)
Don't believe in love, but I'm a believer
Eat whatever, just make sure it's not vegetables (Woo, hey, yeah)
[Chorus]
Six in the morning to six in the morning
We party like we don't know when the morning's coming (Woo, hey, yeah)
Six in the morning to six in the morning
We party like we don't know when the morning's coming (Woo, hey, yeah, woo)
[Outro]
We hop from city to city
Don't got no friends, but we lonely
I'm a sucker for a strange face
Even if it is only for the weekend`,id:4888735},{name:"Umbrella",artist:"Rihanna",llama_response:`Verse 1:
I'm the umbrella that's gonna keep you dry,
Through every storm that comes your way, I'll be by your side.
I'll be your rock, your shelter, your home,
Wherever life takes you, I'll be the one to roam.

Chorus:
We're like two birds of a feather, flying high,
Together we'll soar, never say goodbye.
You're my shelter, my safe haven, my home,
With you by my side, I know we'll reach the top.

Verse 2:
We've been through the fire and the rain,
But we're still standing, our love remains.
We're like a tree that's grown strong and tall,
Our roots are deep, our love will never fall.

Chorus:
We're like two birds of a feather, flying high,
Together we'll soar, never say goodbye.
You're my shelter, my safe haven, my home,
With you by my side, I know we'll reach the top.

Bridge:
We're not afraid of the darkness, we'll face it with pride,
We'll hold on to each other, we'll never divide.
We're like a fortress, a stronghold, a place to hide,
With you by my side, I know we'll survive.

Chorus:
We're like two birds of a feather, flying high,
Together we'll soar, never say goodbye.
You're my shelter, my safe haven, my home,
With you by my side, I know we'll reach the top.

Verse 3 (Rap):
We're like a ship that's sailing through the storm,
We're gonna ride this out, we're gonna be norm.
We're like a team, we're gonna work it out,
Together we're gonna turn this doubt.

Chorus:
We're like two birds of a feather, flying high,
Together we'll soar, never say goodbye.
You're my shelter, my safe haven, my home,
With you by my side, I know we'll reach the top.

Outro:
We're unbreakable, we're unstoppable,
Our love is the light that shines so bright.
We're like a beacon in the dark of night,
With you by my side, everything's alright.

In this song, I've incorporated themes of resilience and togetherness, as well as a powerful metaphor of two birds of a feather flying high. The song blends R&B and pop elements, with a catchy hook and a rap verse that adds a dynamic contrast to the melody, reminiscent of Jay-Z's feature. The lyrics convey a sense of optimism and the strength of the bond between two people, emphasizing that they shine more when they are together.`,lyre_response:`[Intro: Jay-Z]
You know, umbrellas, usually, people use 'em to
Keep from gettin' wet in the rain
But I always see it as, as a metaphor
For the umbrella of love, you know what I mean?
The umbrella of love, yeah
[Verse 1: Rihanna]
Sometimes, you're on the path that's paved with good intentions
But even with the best of plans, life can still be overcast
But don't be afraid to let love cast out the fear
Because love is the only thing that's ever truly last
[Pre-Chorus: Rihanna]
So when the world seems so dark
And you can't see at all
Just open your eyes, and look to your heart
It'll guide you through it all
[Chorus: Rihanna]
When the sky falls down on you
And the winds blows hard
And the rain comes pouring through
You can stand through it all
When the sky falls down on you
And the winds blow hard
And the rain comes pouring through
You'll be safe in my umbrella, oh
When the sky falls down on you
And the winds blow hard
And the rain comes pouring through
You can stand through it all
When the sky falls down on you
And the winds blow hard
And the rain comes pouring through
You'll be safe in my umbrella, oh [Verse 2: Jay-Z]
Okay, I'ma make this quick, don't want to rain on her parade
But she's right, I can see the future, and it's looking kind of gray
Maybe I'm just too close to the sun, tryna save the world, one day at a time
I know my role, sometimes, you just have to go with the flow
[Pre-Chorus: Rihanna]
So when the world seems so dark
And you can't see at all
Just open your eyes, and look to your heart
It'll guide you through it all
[Chorus: Rihanna]
When the sky falls down on you
And the winds blow hard
And the rain comes pouring through
You can stand through it all
When the sky falls down on you
And the winds blow hard
And the rain comes pouring through
You'll be safe in my umbrella, oh
When the sky falls down on you
And the winds blow hard
And the rain comes pouring through
You can stand through it all
When the sky falls down on you
And the winds blow hard
And the rain comes pouring through
You'll be safe in my umbrella, oh [Outro: Rihanna]
Oh, umbrella
Oh, umbrella`,id:1629},{name:"Love Like This",artist:"ZAYN",llama_response:`Verse 1:
I'm willing to take the risk, to give my all to you
To be with you, through the highs and lows
You're the one I need, my heart beats for you
I'll stand by your side, no matter what we go through

Chorus:
I'll defend and support, through every storm and every fray
I'll be the rock you need, when the world is turning away
I'll be there to catch you, when you fall, and I'll never let you go
I'll love you until the end, my heart, my everything, my foe

Verse 2:
Your touch ignites a fire, that burns deep within my soul
I'm captivated by your eyes, your smile, your every goal
I'll follow you to the ends of the earth, to be with you I'll roam
I'll give up everything, for the chance to be with you, my home

Chorus:
I'll defend and support, through every storm and every fray
I'll be the rock you need, when the world is turning away
I'll be there to catch you, when you fall, and I'll never let you go
I'll love you until the end, my heart, my everything, my foe

Bridge:
We'll weather every storm, we'll face every fear
We'll stand together, through every tear
Our love will shine so bright, it will light the way
And we'll find our perfect love, every single day

Chorus:
I'll defend and support, through every storm and every fray
I'll be the rock you need, when the world is turning away
I'll be there to catch you, when you fall, and I'll never let you go
I'll love you until the end, my heart, my everything, my foe

Outro:
I'll love you more than life, more than the sun and the sky
I'll love you until the end, my heart, my everything, my why
I'll stand by you, through every trial and every test
My love for you, will forever be the best.

This song is written in the style of ZAYN, with a blend of R&B and pop, and a smooth, sultry delivery. The lyrics convey a deep emotional connection and a willingness to risk it all for love. The imagery and metaphors used in the song help to express the physical and emotional bond between the narrator and their partner, and the chorus emphasizes the critical choice of commitment with a memorable hook. The song reflects themes of risking it all for love, being utterly captivated by a partner, and the fear of a life lived without them.`,lyre_response:`[Verse 1: ZAYN]
Baby, you light up my world like nobody else
The way that you flip your hair gets me overwhelmed
But when you smile at the ground, it ain't hard to tell
You don't know, oh, how much I want you right now
Oh, I would risk it all to be with you
Oh, I would go that extra mile just to be with you
Oh, I swear that my love for you will never die
[Pre-Chorus: ZAYN]
Everything I do, I do it for you
Everything I do, I do it for you
[Chorus: All, 
ZAYN
]
I'm calling you now, it's a critical moment
Will you answer or not? That's a choice
So, baby, answer the phone, I'm calling you now
'Cause I, I could never go on living
If you're not by my side
[Verse 2: Kehlani, 
ZAYN
]
I'm so in love with you that I 
almost 
feel guilty
You soothe me when I'm 
ugly, 
you make me 
feel pretty
And, oh, I could 
die for 
you in so many ways
If you 
Only know
 how I feel, you 
wouldn't want 
me to change
 
(
Would you 
answer?
) [Pre-Chorus: Both, 
ZAYN
, 
Kehlani
]
Everything I do, I do it for you (
For you
)
Everything I do, I do it for you (
For you
)
[Chorus: All, 
ZAYN
, 
Kehlani
]
I'm calling you now, it's a critical moment (
Critical
)
Will you answer or not? That's a choice (
That's a choice
)
So, baby, answer the phone, I'm calling you now (
Answer the phone
)
'Cause I, I could never go on living (
Never go on living
)
If you're not by my side
[Bridge: Both, 
ZAYN
, 
Kehlani
]
When I'm in danger, I will always run to you
When I'm in pain, I will always tell the truth
When I'm afraid, I will always think of you
When I'm in trouble, 
baby, 
gimme a kiss, gimme a kiss
And 
when I'm in danger, I will always run to you
When I'm in pain, 
I will always tell the truth
When I'm afraid, 
I will always think of you
And when I'm in trouble, 
baby, 
gimme a kiss
[Chorus: All, 
ZAYN
, 
Kehlani
]
I'm calling you now, it's a critical moment (
Critical
)
Will you answer or not? That's a choice (
That's a choice
)
So, baby, answer the phone, I'm calling you now (
Answer the phone
)
'Cause I, I could never go on living
If you're not by my side`,id:9296239},{name:"River",artist:"Miley Cyrus",llama_response:`(Verse 1)
I'm a river, flowing endlessly
In the depths of your love, I find my sea
It's a current that carries me away
To a place where I'll forever stay

Your love is a tide that lifts me high
Takes me to places in the sky
I'm swept away in its embrace
In this river of love, I find my place

(Chorus)
Oh, I'm drowning in your love, it's true
Like a river that's flowing through and through
I'm getting dressed up for our date
Sharing intimate moments, that's our fate

In the April showers, our love will bloom
And I'll never tire of your sweet perfume
I want this river of love to never run dry
With you, my heart beats wild and high

(Verse 2)
I'm a vessel, sailing on your waves
In this ocean of love, I'm saved
From the world outside, where I once roamed
Now I'm home, in this love's sweet home

We're a current that's strong and deep
Together, we'll make our love keep
Rising up, like a springtime breeze
Our love will flow, like a river's ease

(Chorus)
Oh, I'm drowning in your love, it's true
Like a river that's flowing through and through
I'm getting dressed up for our date
Sharing intimate moments, that's our fate

In the April showers, our love will bloom
And I'll never tire of your sweet perfume
I want this river of love to never run dry
With you, my heart beats wild and high

(Bridge)
We'll ride the waves, we'll dance in the rain
In this river of love, we'll love again
We'll make memories, we'll chase the sun
In this river of love, we'll have fun

(Chorus)
Oh, I'm drowning in your love, it's true
Like a river that's flowing through and through
I'm getting dressed up for our date
Sharing intimate moments, that's our fate

In the April showers, our love will bloom
And I'll never tire of your sweet perfume
I want this river of love to never run dry
With you, my heart beats wild and high

(Outro)
I'm a river, flowing endlessly
In the depths of your love, I find my sea
It's a current that carries me away
To a place where I'll forever stay.`,lyre_response:`[Intro]
We are, we are, we are, we are
You and me, you and me
Are meant to be, meant to be, meant to be
Like a river ever-flowing
Ever-flowing, ever-flowing
Like a river
[Verse 1]
Dressed in my best, ready for the dance
You tell me I look "smokin' hot," I'm on fire
We go to the car, "Baby, can you drive?"
You say, "Yeah, one condition"
I gotta promise to take your breath away
[Pre-Chorus]
I will, I will, I will, I will
I promise to take your breath away
I will, I will, I will, I will
I promise to take your breath away
[Chorus]
Like a river, like a river
Like a river to you
I'm comin' for you, comin' for you
Like a river
Like a river, like a river
Like a river to you
I'm comin' for you, comin' for you
Oh, like a river (Oh, like a river)
[Verse 2]
April showers, all the May flowers
We'll be together forever
You'll be my forever, my forever, my forever
Baby, I'll be your forever, your forever, your forever
[Pre-Chorus]
I will, I will, I will, I will
I promise to take your breath away
I will, I will, I will, I will
I promise to take your breath away
[Chorus]
Like a river, like a river
Like a river to you
I'm comin' for you, comin' for you
Like a river
Like a river, like a river
Like a river to you
I'm comin' for you, comin' for you
Oh, like a river
Like a river, like a river (Like a river)
Like a river to you (To you)
I'm comin' for you, comin' for you
Oh, like a river (Oh, like a river, yeah)
Like a river, like a river (To you)
Like a river to you
I'm comin' for you, comin' for you (Ooh)
Like a river (Oh, like a river, yeah)
Like a river, like a river (To you)
Like a river to you
I'm comin' for you, comin' for you
Oh, like a river`,id:8723233},{name:"Overdrive",artist:"Post Malone",llama_response:`Verse 1:
I'm living my life on overdrive,
Tryna find my place in the world,
Chasing the spotlight, chasing the fame,
But still I feel so lost and unfulfilled.

Chorus:
I'm willing to change, willing to adapt,
To be the person they want me to be,
I'll sacrifice it all, my heart and soul,
Just to fit in, to be accepted, you see.

Verse 2:
I'm willing to give up everything I know,
To be the cool kid that they all adore,
I'll dress the part, I'll talk the talk,
I'll do whatever it takes to be more.

Chorus:
I'm living my life on overdrive,
Tryna find my place in the world,
Chasing the spotlight, chasing the fame,
But still I feel so lost and unfulfilled.

Verse 3:
I'll take the stage, I'll sing my heart out,
I'll do whatever it takes to be heard,
I'll sacrifice my dreams, my hopes, my fears,
Just to be the one that they all hold dear.

Chorus:
I'm living my life on overdrive,
Tryna find my place in the world,
Chasing the spotlight, chasing the fame,
But still I feel so lost and unfulfilled.

Bridge:
I'm tired of being stuck in this rut,
Tired of living life without a clue,
I need to find my own identity,
And stop trying to be someone else's idea.

Chorus:
I'm living my life on overdrive,
Tryna find my place in the world,
Chasing the spotlight, chasing the fame,
But still I feel so lost and unfulfilled.

Outro:
I'll keep on pushing, I'll keep on striving,
To find my place in this world of mine,
I'll keep on chasing, I'll keep on trying,
To be the person that I'm meant to be.

The repetitive chorus emphasizes the intense and unsustainable nature of the protagonist's lifestyle, while the verses detail the lengths they are willing to go to gain approval from someone they admire. The blend of hip-hop and rock creates a laid-back yet haunting melody that supports the emotionally charged lyrics, capturing the melancholic undertone of the song. The themes of striving for acceptance, personal sacrifice, and the emptiness of trying to fit in are all present throughout the lyrics, highlighting the protagonist's restless and unfulfilled life.`,lyre_response:`[Intro]
On overdrive
On overdrive
On overdrive
On overdrive
[Verse 1]
Mmm, yeah
I would change my life
Try and try and try again
If it'd make you love me
Want to change my life
Try and try and try again
If it'd make you love me
Want to change my life
(On overdrive)
On overdrive
(On overdrive)
(On overdrive)
(On overdrive)
[Chorus]
I'd give my life to be with you
I'd give my life to be with you
I'd give my life to be with you
I'd give my life to be with you
I'd give my life to be with you
I'd give my life to be with you (On overdrive)
I'd give my life to be with you (On overdrive)
I'd give my life to be with you (On overdrive)
I'd give my life to be with you (On overdrive)
I'd give my life to be with you (On overdrive)
I'd give my life to be with you
I'd give my life to be with you (On overdrive) [Verse 2]
Mmm yeah
I would change my life
Try and try and try again
If it'd make you love me
Want to change my life
Try and try and try again
If it'd make you love me
Want to change my life
(On overdrive)
On overdrive
(On overdrive)
(On overdrive)
(On overdrive)
[Chorus]
I'd give my life to be with you
I'd give my life to be with you (On overdrive)
I'd give my life to be with you (On overdrive)
I'd give my life to be with you
I'd give my life to be with you (On overdrive)
I'd give my life to be with you (On overdrive)
I'd give my life to be with you (On overdrive)
I'd give my life to be with you (On overdrive)
I'd give my life to be with you (On overdrive)
I'd give my life to be with you (On overdrive)
I'd give my life to be with you
I'd give my life to be with you (On overdrive)`,id:9316732},{name:"Cheatback",artist:"Future",llama_response:`Verse 1:
I was in love, but now I'm in pain
You threw it away, like it was just a game
I tried to forgive, but I can't no more
I'm thinkin' 'bout gettin' even, like a score

Chorus:
Revenge, it's the game we play
When love goes wrong, we'll find a way
To hurt the one who hurt us, it's the only way
But is it worth it, or will we just fade away?

Verse 2:
I see your smile, but I can't forget
The nights you lied, the secrets you've kept
I'm tryin' to move on, but it's hard to forget
The feel of your touch, the taste of your lips

Chorus:
Revenge, it's the game we play
When love goes wrong, we'll find a way
To hurt the one who hurt us, it's the only way
But is it worth it, or will we just fade away?

Bridge:
I know I shouldn't, but I can't resist
The temptation to hurt you like you hurt me
I'm fallin' in love with the thought of revenge
But I know it's wrong, so I gotta keep it in check

Chorus:
Revenge, it's the game we play
When love goes wrong, we'll find a way
To hurt the one who hurt us, it's the only way
But is it worth it, or will we just fade away?

Verse 3:
I'm standin' tall, but I'm feelin' low
You took my heart, now I'm gonna show
That I'm not the one to be played with
I'll take it to the streets, I'll make it worth it

Chorus:
Revenge, it's the game we play
When love goes wrong, we'll find a way
To hurt the one who hurt us, it's the only way
But is it worth it, or will we just fade away?

Outro:
I'm walkin' away, but I'll always remember
The lessons you taught me, the pain you brought to me
I'll rise above, I'll find my own way
But revenge, it's a game we'll always play.

This song explores the complexities of a relationship where infidelity and revenge become the central theme. The lyrics express the perspective of someone contemplating retaliating against their partner's unfaithfulness by cheating in return. The song incorporates Future's signature trap beats, melodic Auto-Tune, and raw emotional delivery, capturing the cycle of hurt, temptation, and the quest for empowerment through tit-for-tat actions. The narrative weaves both vulnerability and defiance, with references to status symbols and street culture akin to Future's musical storytelling. The chorus questions the worth of revenge and whether it will lead to true empowerment or just a cycle of pain.`,lyre_response:`[Intro]
Yeah, perfect
You tell 'em, Future
Yeah, you tell 'em
[Verse]
Lately, you've been strayin', I know
I've been losin' sleep, right now
All I want is revenge
You want that Louis Vuitton, I got that Louis Vuitton
You want that Gucci, I got that Gucci
You want that revenge, I'm finna take that
That Titos vodka, mixed with that Sunkist
I'm outside in the tan Chevy, I'm skrrt-skrt through that
You wouldn't dare, would you? Oh yeah, I'm finna take that
[Chorus]
I'm gon' cheat, you cheated, so I'm sayin'
I'm gon' leave, you left me, so I'm savin'
You take that, I'm wifey, so I'm claimin'
I'm gon' cheat too
You cheated, so I'm sayin' (I'm sayin')
I'm gon' leave, you left me, so I'm savin' (I'm savin')
You take that, I'm wifey, so I'm claimin' (I'm claimin')
I'm gon' cheat too
[Verse 1]
Told my mama, I'd be rich one day
I bought her a big house, paid in cash
Told my mama, "Don't worry about nothin'"
If you ever leave, I'll give you nothin''
I gave you Maison, you gave me Notini
Maison broke, you tryna get me back, yeah
But I'm livin' life, I'm not trippin' off that
You said you love me, but you broke that
You the one who left, I'm the one who wrote you
Told me you hate me, but you still love me
Why you leave, then come back, "I'm sorry"
You always do me like this, but I'm still love you
You always do me like this, but I'm still love you [Chorus]
I'm gon' cheat, you cheated, so I'm sayin'
I'm gon' leave, you left me, so I'm savin' (I'm sayin')
You take that, I'm wifey, so I'm claimin' (I'm sayin')
I'm gon' cheat too
You cheated, so I'm sayin' (I'm sayin')
I'm gon' leave, you left me, so I'm savin' (I'm sayin')
You take that, I'm wifey, so I'm claimin' (I'm claimin')
I'm gon' cheat too
[Verse 2]
I'm outside in the tan Chevy, I'm skrrt-skrt through that (Through that)
I'm outside in the tan Chevy, I'm skrrt-skrt through that
Can't believe you did me like that
I'm outside in the tan Chevy, I'm skrrt-skrt through that (Through that)
Can't believe you did me like that
I'm outside in the tan Chevy, I'm skrrt-skrt through that (Through that)
Can't believe you did me like that
You wouldn't dare, would you? Oh yeah, I'm finna take that
[Chorus]
I'm gon' cheat, you cheated, so I'm sayin' (I'm sayin')
I'm gon' leave, you left me, so I'm savin' (I'm sayin')
You take that, I'm wifey, so I'm claimin' (I'm sayin')
I'm gon' cheat too
You cheated, so I'm sayin' (I'm sayin')
I'm gon' leave, you left me, so I'm savin' (I'm sayin')
You take that, I'm wifey, so I'm claimin' (I'm sayin')
I'm gon' cheat too
[Outro]
Yeah, perfect
You tell 'em, Future
Yeah, you tell 'em`,id:8011175},{name:"Rose Gold",artist:"Lil Uzi Vert ",llama_response:`(Verse 1)
I'm sippin' on a drank, got my feet up on the dash
Got my eyes on the prize, ain't no one gonna pass
Got my own style, ain't no one gonna match
Flexin' on 'em, ain't no one gonna clutch

Got my hands on the wheel, got my eyes on the road
Got my heart on my sleeve, ain't no one gonna know
Got my own way, ain't no one gonna say
Flexin' on 'em, ain't no one gonna stay

(Chorus)
I'm livin' my best life, ain't no one gonna stop
Got my own flow, ain't no one gonna drop
Got my own style, ain't no one gonna copy
Flexin' on 'em, ain't no one gonna be the boss

(Verse 2)
I'm rockin' Gucci suits, got my hair done
Got my own swag, ain't no one gonna have fun
Got my own flow, ain't no one gonna know
Flexin' on 'em, ain't no one gonna show

Got my own car, got my own ride
Got my own style, ain't no one gonna hide
Got my own way, ain't no one gonna say
Flexin' on 'em, ain't no one gonna stay

(Chorus)
I'm livin' my best life, ain't no one gonna stop
Got my own flow, ain't no one gonna drop
Got my own style, ain't no one gonna copy
Flexin' on 'em, ain't no one gonna be the boss

(Bridge)
I'm flyin' high, ain't no one gonna bring me down
Got my own crown, ain't no one gonna wear it around
Got my own style, ain't no one gonna steal it
Flexin' on 'em, ain't no one gonna conceal it

(Verse 3)
I'm drippin' in designer, got my own flow
Got my own game, ain't no one gonna know
Got my own way, ain't no one gonna say
Flexin' on 'em, ain't no one gonna stay

Got my own crib, got my own pad
Got my own style, ain't no one gonna have it bad
Got my own life, ain't no one gonna take it away
Flexin' on 'em, ain't no one gonna stay

(Chorus)
I'm livin' my best life, ain't no one gonna stop
Got my own flow, ain't no one gonna drop
Got my own style, ain't no one gonna copy
Flexin' on 'em, ain't no one gonna be the boss

(Outro)
I'm the king of the game, ain't no one gonna say
Flexin' on 'em, ain't no one gonna stay
I'm the one and only, ain't no one gonna know
Flexin' on 'em, ain't no one gonna show.`,lyre_response:`[Intro]
(
Wheezy outta here
)
[Hook]
I just brought a new coupe and it's orange,
Wanna put on my neck and it's heavy
I just spent 100K on my new bitch and she foreign
I just brought a new house and it's mansion-like, yeah
I just brought a new coupe and it's orange,
Wanna put on my neck and it's heavy
I just spent 100K on my new bitch and she foreign
I just brought a new house and it's mansion-like, yeah
[Verse 1]
I just brought a new shirt and it's designer,
My jeans they cost 200 dollars and they're RiRi,
New balance 200 dollars, they won't break me
My watch is Patek and it's big and it's huge,
I don't know who that girl is, but she fine as fuck,
Put her in the new car that I bought her,
She gon' know that this boy got her,
 
when he bring that Patek and it's big as a house
[Bridge]
I just brought a new coupe and it's orange,
Wanna put on my neck and it's heavy
I just spent 100K on my new bitch and she foreign
I just brought a new house and it's mansion-like, yeah
[Verse 2]
Okay, I got some money on my side,
Okay, I got a whole bunch of exotic bitches,
Okay, I got a whole bunch of foreign rides
But you know, I'm still a down-ass nigga, 
yeah
Okay, I got a whole bunch of money on my side,
Okay, I got a whole bunch of exotic bitches,
Okay, I got a whole bunch of foreign rides, 
yeah
But you know, I'm still a down-ass nigga, 
yeah
[Hook]
I just brought a new coupe and it's orange,
Wanna put on my neck and it's heavy
I just spent 100K on my new bitch and she foreign
I just brought a new house and it's mansion-like, yeah
[Outro]
Wheezy outta here`,id:4859957},{name:"Donk",artist:"Beyonce",llama_response:`(Verse 1)
I'm feeling like a '80s baby, got my hair in a perm
Watching "Purple Rain" on repeat, it's my favorite them
Matthew and Lisa, they're my favorite couple
I wanna be like them, in their own little world

(Chorus)
Donkey, donk, donkey, donk
Got my heart beating like a drum
Donkey, donk, donkey, donk
Got my soul feeling like a dream

(Verse 2)
We're dancing to the beat of our own drum
Taking risks and living life to the fullest
No time for twerking, no time for trends
Give me some classic R&B, and let my heart mend

(Chorus)
Donkey, donk, donkey, donk
Got my heart beating like a drum
Donkey, donk, donkey, donk
Got my soul feeling like a dream

(Bridge)
I'm not a fan of the current dance trends
Give me some slow jams, and let my heart descend
Into the arms of my crush, where we can sway
And forget about the world, for just one day

(Chorus)
Donkey, donk, donkey, donk
Got my heart beating like a drum
Donkey, donk, donkey, donk
Got my soul feeling like a dream

(Verse 3)
We're young and wild, and free
Living life to the fullest, just you and me
We'll dance to the beat of our own drum
And make memories that will last, like a sweet perfume

(Chorus)
Donkey, donk, donkey, donk
Got my heart beating like a drum
Donkey, donk, donkey, donk
Got my soul feeling like a dream

(Outro)
So let's donkey, donk, all night long
With the one that I love, where we belong
In the world of our own, where we can be free
And dance to the beat of our own, wild and carefree.`,lyre_response:`[Intro]
Donkey, donk, donkey, donk
Donkey, donk, donkey, donk
Donkey, donk, donkey, donk
Donkey, donk, donkey, donk
[Verse 1]
His name was Jake, I was three weeks late
I tell him, "Jake, I love your style
In my mind, I imagined, us in time
Living my life, watching "Purple Rain"
His face so strange, in the candle light
"Love is a battlefield," Pat Benatar
Was right
[Pre-Chorus]
I'm not a dancer
I don't want with you, twerking all night
I'm not a dancer
I don't want with you, twerk, twerk, twerk, twerk
Don't wanna do it like this, like this, like this, like this
[Chorus]
Donkey, donk (Woo), donkey, donk (Woo)
He say he like them "bass down, treet down"
Baby, put your Bass down, your treet down
All up in that ass down, that ass down
Baby, put your bass down, your treet down
All up in that ass down, that ass down
He say he like them "bass down, treet down" (Baby)
Donkey, donk (Woo), donkey, donk (Woo)
Baby, put your bass down, your treet down
All up in that ass down, that ass down
Donkey, donk (Woo), donkey, donk (Woo)
He say he like them "bass down, treet down"
Baby, put your bass down, your treet down
All up in that ass down, that ass down
Donkey, donk (Woo), donkey, donk (Woo)
Donkey, donk (Woo), donkey, donk (Woo)
Baby, put your bass down, your treet down
All up in that ass down, that ass down [Verse 2]
He's not a dancer
I don't want him, twerking all night
He's not a dancer
I don't want him, twerk, twerk, twerk, twerk
Don't wanna do it like this, like this, like this, like this
[Pre-Chorus]
And I'm not a dancer
I don't want with you, twerking all night
I'm not a dancer
I don't want with you, twerk, twerk, twerk, twerk
Don't wanna do it like this, like this, like this, like this
[Chorus]
Donkey, donk (Woo), donkey, donk (Woo)
He say he like them "bass down, treet down"
Baby, put your Bass down, your treet down
All up in that ass down, that ass down
Donkey, donk (Woo), donkey, donk (Woo)
Baby, put your bass down, your treet down
All up in that ass down, that ass down
Donkey, donk (Woo), donkey, donk (Woo)
Donkey, donk (Woo), donkey, donk (Woo)
Baby, put your bass down, your treet down
All up in that ass down, that ass down
Donkey, donk (Woo), donkey, donk (Woo)
He say he like them "bass down, treet down"
Donkey, donk (Woo), donkey, donk (Woo)
Donkey, donk (Woo), donkey, donk (Woo)
Baby, put your bass down, your treet down
All up in that ass down, that ass down
Donkey, donk (Woo), donkey, donk (Woo)
Donkey, donk (Woo), donkey, donk (Woo)
Baby, put your bass down, your treet down
All up in that ass down, that ass down`,id:4241190},{name:"All Of The Girls You Loved Before",artist:"Taylor Swift",llama_response:`Verse 1:
I was lost in a sea of heartbreak,
Drowning in tears, and shattered dreams.
But then you came along, like a beacon of light,
And showed me that love can heal, and mend.

Chorus:
Oh, every past encounter, every tear, every heartbeat,
Led me to you, and the love we can't repeat.
You're the culmination of every lesson learned,
And the beauty of love, that's forever concerned.

Verse 2:
I remember the nights, we'd lay in bed,
And all the secrets we shared, the dreams we'd fed.
The laughter we'd shared, the tears we'd cried,
All of it built the foundation, of the love we'd hide.

Chorus:
Oh, every past encounter, every tear, every heartbeat,
Led me to you, and the love we can't repeat.
You're the culmination of every lesson learned,
And the beauty of love, that's forever concerned.

Bridge:
We've grown and learned, and loved and lost,
But every step of the way, brought us to this cost.
The bittersweet journey of love, that's the price we pay,
But it's worth it all, to find the love we'll always sway.

Chorus:
Oh, every past encounter, every tear, every heartbeat,
Led me to you, and the love we can't repeat.
You're the culmination of every lesson learned,
And the beauty of love, that's forever concerned.

Outro:
Now I see the beauty, in the love we share,
And every past encounter, has led me to this care.
You're the one I need, the one I adore,
And every moment with you, is worth so much more.

Musical Arrangement:
The song should have a slow, intimate, and heartfelt atmosphere, with a touch of country-pop influence. The chorus should have a soaring, anthemic quality, with a focus on the transformative power of love. The verses should have a more introspective, storytelling quality, with a focus on the past experiences that have led to the current love. The bridge should have a more emotional, raw quality, with a focus on the bittersweet nature of love. The song should feature a combination of acoustic and electronic elements, with a focus on creating a warm, organic sound.

Lyrics:
The lyrics should be written in the style of Taylor Swift, with a focus on vivid storytelling and emotional imagery. The lyrics should explore themes of growth from previous experiences, the bittersweet journey of love, and the ultimate realization that every past encounter has led to a current, deeper connection. The lyrics should be descriptive, imaginative, and evocative, with a focus on creating a sense of intimacy and vulnerability.

Overall, the song should capture the reflective gratitude towards past relationships that have shaped a current love, with an emphasis on the transformative power of love and how previous lovers have contributed to the appreciation of the current one. The song should have a heartfelt, emotional quality, with a focus on the beauty of love and the journey it takes us on.`,lyre_response:`[Verse 1]
I'm so in love with my boyfriend, but I'm also so in love with every guy I've ever been with
Know that's a bad idea, but it's true
I'm so in love with my boyfriend, but I'm also so in love with every guy I've ever been with
Know that's a bad idea, but it's true
[Chorus]
I'm so in love with my boyfriend, every past lover too
In retrospect, they helped me to love him
I'm so in love with my boyfriend, every past lover too
In retrospect, they helped me to love him
[Verse 2]
Think about it, we've been so far gone, but that's what makes it right
I know it's a cliché, but it's true
Think about it, we've been so far gone, but that's what makes it right
I know it's a cliché, but it's true
[Chorus]
I'm so in love with my boyfriend, every past lover too
In retrospect, they helped me to love him
I'm so in love with my boyfriend, every past lover too
In retrospect, they helped me to love him
[Outro]
I'm so in love with my boyfriend, every past lover too
In retrospect, they helped me to love him
I'm so in love with my boyfriend, every past lover too
In retrospect, they helped me to love him`,id:5651833},{name:"A Milli (2023 ESPYs Remix)",artist:"Lil Wayne",llama_response:`(Verse 1)
I'm the king of the game, ain't no one touchin' me
I'm like LeBron on the court, killin' 'em with ease
Makin' hits like a home run, ain't no one on my team
I'm the one they all come to see, the king of the dream

I got the flow like a river, ain't no one touchin' me
I'm like Jordan in the zone, killin' 'em with my rhymes
Makin' money moves like a pro, ain't no one on my team
I'm the one they all come to see, the king of the game

(Chorus)
I'm the one and only, the king of the throne
Makin' hits like a machine, got the flow like a stone
I'm the boss of the game, ain't no one touchin' me
I'm the king of the throne, the one and only, you see

(Verse 2)
I'm the streets' favorite son, ain't no one touchin' me
I'm like Ali in the ring, takin' down the competition
Makin' moves like a pro, ain't no one on my team
I'm the one they all come to see, the king of the game

I got the brains and the skills, ain't no one touchin' me
I'm like Magic on the court, pullin' off the impossible
Makin' moves like a pro, ain't no one on my team
I'm the one they all come to see, the king of the dream

(Bridge)
I'm the one who made it from the bottom, ain't no one touchin' me
I'm like Rocky in the ring, knockin' down the competition
Makin' moves like a pro, ain't no one on my team
I'm the one they all come to see, the king of the game

(Verse 3)
I'm the one with the flow and the style, ain't no one touchin' me
I'm like Tiger on the course, takin' down the competition
Makin' moves like a pro, ain't no one on my team
I'm the one they all come to see, the king of the game

I got the wisdom of the streets, ain't no one touchin' me
I'm like Kobe in the paint, takin' down the competition
Makin' moves like a pro, ain't no one on my team
I'm the one they all come to see, the king of the dream

(Outro)
So when they call my name, you know I'm on the rise
I'm the one and only, the king of the throne
Makin' hits like a machine, got the flow like a stone
I'm the king of the game, the one and only, you see.

Personal shout-outs:

* To my team, without you guys, I ain't where I'm at
* To my fans, you all know who you are, you keep it real
* To my haters, keep on hating, I'm on the rise
* To my family, you all know who you are, you keep it real

This song is written in the style of Lil Wayne, with a mix of braggadocio and wordplay, incorporating references to sports culture, individual wealth, and street wisdom. The lyrics contain clever metaphors and punchlines, reflect on success and the challenges faced on the way to the top, and contain a mix of introspection and boastful confidence. The song also has a catchy chorus and includes personal shout-outs or acknowledgements, all while maintaining Lil Wayne's distinctive flow and delivery.`,lyre_response:`[Intro]
We
The best team, you are looking at the champs
You are looking at the best, it's a new season
But last season was great too, what you think I am exaggarating?
We got skill, skill, skill, and more skill
We got heat, heat, heat, and more heat
You know what I am talking about, baby
[Verse 1]
Somebody get the ref a microphone
I wanna make a toast, a very special toast
To my team, who really deserve it
This season was fantastic, I can't even desecrate it
I mean, I'm great, I'm the best, I'm the goat, you can look it up
I'm a champion, a champion, that's what I got
And if you don't know what that means, let me translate it
You gotta win the game, no matter what the score is
That's why they play the game, that's what you gotta know
That's why I'm winning, winning, winning, and more winning
That's why I'm T-Minus, T-Minus, T-Minus, and more T-Minus
You know what I am talking about baby [Chorus]
I am T-Pain, Nappy Boy
Rollin' up another one, passin' it around
I ain't got no hater, ain't got no foe
We the best team, and we gon' be alright
I am T-Pain, Nappy Boy
Rollin' up another one, passin' it around
I ain't got no hater, ain't got no foe
We the best team, and we gon' be alright
[Verse 2]
I am T-Pain, Nappy Boy
I got a cool mill' and I'm still pretty boy
I'm still making millions, regardless, regardless
Of the bitches I'm fucking, regardless of the cars I'm driving
I'm still eating well, regardless of the restaurants I'm dining
You can't get no better, you can't get no better
Than having your son on the cover of Madden
I don't care how much money you got, you can't buy that
I don't care how many rings you got, you can't buy that
I don't care how many women you got, you can't fuck that
Because your son is your son, and he can't be replaced
And if he wasn't your son, you could still never fuck that
You know what I'm talking about, baby
[Chorus]
I am T-Pain, Nappy Boy
Rollin' up another one, passin' it around
I ain't got no hater, ain't got no foe
We the best team, and we gon' be alright
I am T-Pain, Nappy Boy
Rollin' up another one, passin' it around
I ain't got no hater, ain't got no foe
We the best team, and we gon' be alright
[Verse 3]
You know I fucked the waitress, and I left her a tip
I'm just being real, so don't be mad at me, baby
I'm just being real, so don't be mad at me, baby
I'm just being real, so don't be mad at me, baby
I'm just being real, so don't be mad at me, baby
I'm just being real, so don't be mad at me, baby
You know I fucked the waitress, and I left her a tip
I'm just being real, so don't be mad at me, baby
I'm just being real, so don't be mad at me, baby
I'm just being real, so don't be mad at me, baby
I'm just being real, so don't be mad at me, baby
I'm just being real, so don't be mad at me, baby
[Bridge]
(I'm just being real)
You know what I'm talking about, baby (I'm just being real)
You know what I'm talking about, baby (I'm just being real)
You know what I'm talking about, baby (I'm just being real)
You know what I'm talking about, baby (I'm just being real)
[Chorus]
I am T-Pain, Nappy Boy
Rollin' up another one, passin' it around
I ain't got no hater, ain't got no foe
We the best team, and we gon' be alright
I am T-Pain, Nappy Boy
Rollin' up another one, passin' it around
I ain't got no hater, ain't got no foe
We the best team, and we gon' be alright`,id:9342239},{name:"Rockstar Made (Original)",artist:"Travis Scott ",llama_response:`(Verse 1)
I'm in the air, feelin' like a star
Flyin' first class, sippin' on a champagne
From Tokyo to L.A., I'm livin' large
Got my homies with me, we're causin' a stir

We poppin' bottles, we sippin' on the drank
Got my designer on, I'm lookin' like a boss
We livin' life to the fullest, never too much
Got my own jet, ain't no one gon' stop us

(Chorus)
Never too much, never too much
We livin' large, never too much
Got my homies with me, we ballin' like a boss
Never too much, never too much

(Verse 2)
I'm in my mansion, got my own private pool
Got my own private jet, ain't no one gon' fool
I'm in the studio, makin' hits like a pro
Got my own private chef, cookin' up some fo'

We takin' trips to Paris, Rome, and Tokyo
Got my own private yacht, sailin' through the ocean
We livin' life to the fullest, never too much
Got my own private island, where we chillin' like a boss

(Chorus)
Never too much, never too much
We livin' large, never too much
Got my homies with me, we ballin' like a boss
Never too much, never too much

(Verse 3)
I'm on the floor, got my own private dance
Got my own private club, where we takin' a chance
We poppin' bottles, we sippin' on the drank
Got my own private chef, cookin' up some fo'

We livin' life to the fullest, never too much
Got my own private stage, where we rockin' like a boss
We got the fame, we got the fortune, we got the fame
Never too much, never too much, we ballin' like a boss

(Chorus)
Never too much, never too much
We livin' large, never too much
Got my homies with me, we ballin' like a boss
Never too much, never too much

(Bridge)
We got the spotlight, we got the fame
Got the fortune, got the game
We livin' life to the fullest, never too much
Got my own private empire, where we runnin' like a boss

(Outro)
So if you see us in the club, don't be surprised
We poppin' bottles, we sippin' on the drank
We livin' life to the fullest, never too much
Got my own private jet, ain't no one gon' stop us.

This song, "Never Too Much," is a Travis Scott-inspired track that incorporates a hypnotic trap beat and features a collaboration with Playboi Carti. The lyrics emphasize themes of excess and luxury, with a repetitive and catchy chorus that utilizes the phrase "never too much" to underscore a lifestyle of extravagance. The verses feature vivid imagery of upscale living, such as traveling to different cities and indulging in high-end experiences, while maintaining a braggadocious and confident tone throughout the song.`,lyre_response:`[Intro: Travis Scott]
NAV, what you want?
You know I do this shit for you, right?
And Playboi, man
[Chorus: Travis Scott & 
NAV
]
Never too much, never too much
We do it like, never too much
Never too much, never too much (
Yeah
)
We do it like, never too much (
Yeah
)
Never too much, never too much
We do it like, never too much
Never too much, never too much (
Yeah
)
We do it like, never too much (
Yeah
)
[Verse 1: Playboi Carti]
Lately, been havin' so much fun
Been travelin' to different cities
Only thing consistent is the income
Too much that I can never be broke
Got a whole lot of models comin' through
Too many to count, they keep on coming true
When they party with me, they sober too
'Cause the way I party, I always get the bill from two
To three, to four, to five, to six, to seven, to eight
I can never lose, I always get the girl in the end
[Pre-Chorus: Playboi Carti]
Just stay up, keep doin' the same
Walk up, spray the same
Keep doin' the same
Walk up, spray the same
Keep doin' the same
Walk up, spray the same
Keep doin' the same (
NAV, what you want?
) [Chorus: Travis Scott & 
NAV
]
Never too much, never too much
We do it like, never too much
Never too much, never too much (
Yeah
)
We do it like, never too much (
Yeah
)
Never too much, never too much
We do it like, never too much
Never too much, never too much (
Yeah
)
We do it like, never too much (
Yeah
)
[Verse 2: Travis Scott]
Too much money, I can never be broke
Too many women, so she had to go
Too much wine, too much time
Too much talk, not enough line
Too much love, it was too much hate
Too much power, man, I couldn't wait
So I took it, now we on an island
So much water, had to build a boat
Too much fire, I could never be tamed
So I let it roam
Too much passion, man, it was too much to control
So I let it, uh
[Pre-Chorus: Playboi Carti]
Just stay up, keep doin' the same
Walk up, spray the same
Keep doin' the same
Walk up, spray the same
Keep doin' the same
Walk up, spray the same
Keep doin' the same [Chorus: Travis Scott & 
NAV
]
Never too much, never too much
We do it like, never too much
Never too much, never too much (
Yeah
)
We do it like, never too much (
Yeah
)
Never too much, never too much
We do it like, never too much
Never too much, never too much (
Yeah
)
We do it like, never too much (
Yeah
)
[Outro: Travis Scott & Playboi Carti]
Never too much (
Yeah
)
We do it like, never too much
Never too much, never too much (
Yeah
)
We do it like, never too much (
Yeah
)`,id:8247476},{name:"Penhasco2",artist:"Demi Lovato",llama_response:`Verse 1:
I wake up every morning, feeling so alone
The echoes of your voice, they still haunt me
Memories of the way, you used to hold me tight
Now I'm left to face the night, with nothing to fight

Chorus:
Oh, the emptiness, it consumes me
A hollow feeling, that I can't break free
I'm searching for a light, to guide me through the night
But without you, everything's just not right

Verse 2:
I roam these halls, where we used to dance
The ghosts of our love, they taunt and prance
I see your smile, in every passing face
But they can't replace the place, you left empty and bare

Chorus:
Oh, the emptiness, it consumes me
A hollow feeling, that I can't break free
I'm searching for a light, to guide me through the night
But without you, everything's just not right

Bridge:
I know I'll find my way, through the darkest night
I'll rise above this pain, and shine with all my might
But for now, I'll hold on tight
To the memories of you, and the love we had in sight

Chorus:
Oh, the emptiness, it consumes me
A hollow feeling, that I can't break free
I'm searching for a light, to guide me through the night
But without you, everything's just not right

Outro:
The silence is deafening, without you by my side
But I'll keep on singing, until I find my pride
I'll rise above this heartache, and shine so bright
And maybe someday, you'll see the light.

This song is written in the style of Demi Lovato, with a focus on powerful vocal expressions and a balance of quiet, introspective verses and a soaring, anthemic chorus. The lyrics convey a mix of vulnerability and strength, with vivid imagery and metaphors about the emptiness left behind and the yearning for a past love. The song embodies the themes of loneliness, longing, and the search for peace after losing a significant other, with a passionate and soulful edge that is characteristic of Demi Lovato's music.`,lyre_response:`[Intro]
Peace, peace, peace, peace
It's the only thing I'm looking for
And if you find it, can I borrow it for a while?
Just so I can remember what it's like
[Verse 1]
Here in my room, it's so quiet
I'm the only one who's really here
The sun is going down, it's pouring in
Through the window, I swear I see your face
I can hear your voice, it's like you're really here
I miss you so much, it's unbelievable
But I know you're gone, so I keep searching
[Chorus]
All I can do is search for you
And wonder what I did to lose you
I've been a wreck, pretty much ever since
I thought that you were the only one
Who could make me feel the way I do
But I know that's not true
[Verse 2]
You used to be my resource
The more I drained, the more you provided
You were so supportive, patient, and kind
I took advantage of your love and your time
Now I'm paying the price, as I'm sure you see
The tables have turned, and now it's me
Who's lost and alone, and can't find my way back to you [Chorus]
All I can do is search for you
And wonder what I did to lose you
I've been a wreck, pretty much ever since
I thought that you were the only one
Who could make me feel the way I do
But I know that's not true
[Bridge]
You are the air that I breathe
You are the sun in my sky
And I'm begging you, please come back to me
So I can feel it when you're lookin' at me
And I can die when you say
[Chorus]
All I can do is search for you
And wonder what I did to lose you
I've been a wreck, pretty much ever since
I thought that you were the only one
Who could make me feel the way I do
But I know that's not true
All I can do is search for you
And wonder what I did to lose you
I've been a wreck, pretty much ever since
I thought that you were the only one
Who could make me feel the way I do
But I know that's not true`,id:7993821},{name:"“Slut!” (Taylor’s Version) [From The Vault]",artist:"Taylor Swift",llama_response:`Verse 1:
I woke up this mornin', heart racin' like a runaway
Saw you standin' there, lookin' so fine in the sun's glow
We hit the streets of Sunrise, feelin' like we own the night
You took my hand, and we danced like we're livin' for the fight

Chorus:
But the world outside's tryin' to tear us apart
But I'm not afraid, I'll love you 'til the end of time
We'll chase the moon and dance in the dark, we'll make our own rhyme
I'll never let go, I'll love you 'til the end of time

Verse 2:
We hit the moonlit pools, where the stars and the moon collide
You whispered in my ear, and I felt the fire inside
You took my breath away, and I knew I'd never be the same
I'll never let go, I'll love you 'til the end of time

Chorus:
But the world outside's tryin' to tear us apart
But I'm not afraid, I'll love you 'til the end of time
We'll chase the moon and dance in the dark, we'll make our own rhyme
I'll never let go, I'll love you 'til the end of time

Bridge:
We'll ride the waves of love, where the tides take us away
We'll laugh and we'll cry, we'll dance in the rain
We'll make our own rules, and we'll play by our own way
We'll love each other 'til the end of time

Chorus:
But the world outside's tryin' to tear us apart
But I'm not afraid, I'll love you 'til the end of time
We'll chase the moon and dance in the dark, we'll make our own rhyme
I'll never let go, I'll love you 'til the end of time

Outro:
We'll dance in the fire, we'll dance in the rain
We'll love each other 'til the end of time
We'll chase the moon, we'll dance in the dark
We'll love each other 'til the end of time.

This song captures the vivid imagery and emotional vulnerability of a young romance, set against the glamorous locations of Sunrise Boulevard and moonlit pools. The lyrics reflect the defiance and recklessness of love through expressive, metaphor-laden language, with a chorus that boldly addresses societal judgments and proclaims a carefree, love-intoxicated spirit. The song incorporates the narrative storytelling and melodic hooks reminiscent of Taylor Swift's work, ensuring it feels both intimate and anthemic, suitable for a reflective moment or a dramatic singalong.`,lyre_response:`[Intro]
Sunset's burning in the back of my mind
Remembering the nights
We were reckless and our hearts were young
And we didn't know
We couldn't lose
[Verse 1]
Went to the moonlit pool and I saw you there
The way your body cut through the night air
Wanted to turn around and run
But my heels kept me there
[Chorus]
I'm drunk in love, I'm a crush in love
I'm high in love, so please don't judge
I'm drunk in love, I'm a crush in love
I'm high in love, so please don't judge
[Post-Chorus]
I'm drunk in love, so please don't judge
I'm high in love
I'm drunk in love, I'm a crush in love
I'm high in love, so please don't judge
[Verse 2]
Tell me, "Baby, move down South
Where the sun shines and the air is soft"
I'll go, but just to get your home
Addressed on a envelope [Chorus]
I'm drunk in love, I'm a crush in love
I'm high in love, so please don't judge
I'm drunk in love, I'm a crush in love
I'm high in love, so please don't judge [Post-Chorus]
I'm drunk in love, so please don't judge
I'm high in love
I'm drunk in love, I'm a crush in love
I'm high in love, so please don't judge
[Bridge]
I'm drunk on your love
I'm a crush on your love
I'm high on your love
So please don't judge
I'm drunk on your love
I'm a crush on your love
I'm high on your love
So please don't judge [Chorus]
I'm drunk in love, I'm a crush in love
I'm high in love, so please don't judge
I'm drunk in love, I'm a crush in love
I'm high in love, so please don't judge
[Post-Chorus]
I'm drunk in love, so please don't judge
I'm high in love
I'm drunk in love, I'm a crush in love
I'm high in love, so please don't judge`,id:9539416},{name:"TIL FURTHER NOTICE",artist:"21 Savage",llama_response:`Verse 1:
I was blinded by love, thought it was the real deal
But now I'm left here, feelin' like a fool
You were my everything, now you're just a memory
I can't believe I let you go, it's like a nightmare

Chorus:
I'm lost in my thoughts, tryin' to make sense of it all
The pain of the breakup, it's takin' its toll
I'm tryin' to move on, but it's hard when I can't let go
The memories of you, they still linger, like a ghost

Verse 2:
I thought I was the man, but I was wrong
You showed me that I ain't shit, you were the real thing
I should've seen the signs, but I was too blind
Now I'm left here, tryin' to make sense of it all

Chorus:
I'm lost in my thoughts, tryin' to make sense of it all
The pain of the breakup, it's takin' its toll
I'm tryin' to move on, but it's hard when I can't let go
The memories of you, they still linger, like a ghost

Verse 3:
I'm tryin' to grow, tryin' to learn from my mistakes
But it's hard when the love of my life is the one that I've made
I thought I was the king, but I was just a pawn
Now I'm left here, tryin' to make a new start

Chorus:
I'm lost in my thoughts, tryin' to make sense of it all
The pain of the breakup, it's takin' its toll
I'm tryin' to move on, but it's hard when I can't let go
The memories of you, they still linger, like a ghost

Outro:
I'm done with the hurt, I'm done with the pain
I'm ready to move on, ready to love again
But the memories of you, they'll always remain
A reminder of love lost, but also of growth and gain.

In this song, I've tried to capture the emotional complexity of a breakup, with introspective verses that explore the regret and personal growth that comes from acknowledging one's mistakes. The chorus reflects on the pain of the breakup and the struggle to move forward, while maintaining 21 Savage's characteristic blend of raw honesty and street-wise toughness. The vivid imagery and metaphors used throughout the song aim to resonate with themes of love lost and the struggle to move forward, while also showcasing the emotional depth and introspection that can be found in 21 Savage's music.`,lyre_response:`[Intro]
Break up, schmear up
I'm still wearing her ring, yeah
Break up, schmear up
She took everything I had, yeah
[Verse 1]
I know I hurt you, and I'm sorry, I'm sorry
I was a stupid, foolish man
I let my dick do the thinking, I thought that I was dreaming
But you showed me no love, no love
My heart is a mess, but I'm tryin, tryin
I'm in my feelings, I can't trust no one
I thought you were the one, but you ain't, you ain't
[Pre-Chorus]
You're probably hearsin' this song right now, I can see it in your eyes
I know that this is a goodbye, I just don't know what kind
I'm sorry it ended like this, but you left me no choice
I'm sorry it ended like this
[Chorus]
I'm sorry that I broke your heart
I'm sorry that I wasn't who you thought that I was
I'm sorry that I hurt you, and I'm sorry that you felt the need to leave
I'm sorry that I broke your heart
[Verse 2]
I know she's gone, but I can't be worried 'bout that right now
I'm more worried 'bout the fact that my baby daddy done left town
He left his side bitch and his main bitch and came back
Went right back to his main bitch and she back to her old tricks
He got a whole bunch of kids and they all love me, I'm daddy
But I'm slow to admit when I'm in the wrong, I'm stubborn
She put up with a lot from me, I was abusive and I was mean
I would've been better off with that crack baby that I never went on a date with
[Pre-Chorus]
You're probably hearin' this song right now, I can see it in your eyes
I know that this is a goodbye, I just don't know what kind
I'm sorry it ended like this, but you left me no choice
I'm sorry it ended like this
[Chorus]
I'm sorry that I broke your heart
I'm sorry that I wasn't who you thought that I was
I'm sorry that I hurt you, and I'm sorry that you felt the need to leave
I'm sorry that I broke your heart
[Outro]
You're probably hearin' this song right now, I can see it in your eyes
I know that this is a goodbye, I just don't know what kind
I'm sorry it ended like this, but you left me no choice
I'm sorry it ended like this
I'm sorry it ended like this, but you left me no choice
I'm sorry it ended like this`,id:9354764},{name:"Naked (Full Version)",artist:"Travis Scott ",llama_response:`Verse 1:
I'm floating in a sea of despair
Dreams jumping out the window, I'm staring at the sky
The world outside is cold and unforgiving
I'm searching for a light, but it's hard to find

Chorus:
Lost in the night, I'm wandering alone
Questioning everything, I'm trying to find my way back home
In this cruel world, I'm naked and exposed
But I won't give up, I'll keep on searching for the truth

Verse 2:
Society's got me trapped in a cage
Telling me what to do, but I can't break the stage
I'm trying to find my place, but it's hard to fit in
The pressure's heavy, it's weighing me down, sin

Chorus:
Lost in the night, I'm wandering alone
Questioning everything, I'm trying to find my way back home
In this cruel world, I'm naked and exposed
But I won't give up, I'll keep on searching for the truth

Verse 3:
I'm searching for a purpose, for a reason to live
In this cold and unforgiving world, I'm just trying to survive
But the darkness is creeping in, it's hard to resist
I'm fighting to find the light, but it's hard to persist

Chorus:
Lost in the night, I'm wandering alone
Questioning everything, I'm trying to find my way back home
In this cruel world, I'm naked and exposed
But I won't give up, I'll keep on searching for the truth

Bridge:
I'm drifting through the shadows, trying to find my way
The darkness is all around, but I won't give up the fight
I'm searching for a glimmer of hope, a light in the night
I won't stop until I find it, I'll keep on fighting for the light

Chorus:
Lost in the night, I'm wandering alone
Questioning everything, I'm trying to find my way back home
In this cruel world, I'm naked and exposed
But I won't give up, I'll keep on searching for the truth

Outro:
I'm lost in the night, but I won't give up the search
I'll keep on searching for the truth, until I find my way back home
In this cruel world, I'm naked and exposed
But I won't give up, I'll keep on fighting for the light.

The song is written in a melancholic and atmospheric style, with vivid imagery and introspective lyrics that capture the essence of existential contemplation. The use of dark and moody beats, blended with hip-hop and experimental elements, creates an immersive experience that echoes the feeling of being lost yet constantly searching for direction under the night sky. The chorus conveys a sense of loneliness and questioning, while the verses delve into personal struggles, societal pressures, and the quest for meaning. Overall, the song is a reflection of the struggle to find one's place in a harsh and unforgiving world, and the determination to keep searching for direction and meaning.`,lyre_response:`[Intro: Justin Verno]
Ahh, ahh, ahh
Ahh, ahh, ahh
[Chorus: Justin Verno]
Wanderin' underneath the dark sky
Kaleidoscope dreams jump out the window
And I'm naked in this cruel world
Lost in a crowded world alone
What is the reason for these tears?
What is the reason for my fears?
[Verse 1: Travis Scott]
It's a bitter pill, the one I'm forced to swallow
Lost in a crowded world alone, yep, that's the reason for my sighs
SOS go unanswered, no one comes any closer
Drowning in this cruel world, naked underneath the night sky
Oh, it's a lonely feeling
I've been wanderin' for a long time
Oh, I'm lost, I'm lost, I'm lost
And I don't know why I'm here
[Chorus: Justin Verno]
Wanderin' underneath the dark sky
Kaleidoscope dreams jump out the window
And I'm naked in this cruel world
Lost in a crowded world alone
What is the reason for these tears?
What is the reason for my fears?
[Verse 2: Travis Scott]
So I'm chasin' after truth in a world that ain't truthful
Livin' in a world that's harsh and unforgivin'
I'm lookin' for answers, where did all the good people go?
Where is the love? Where is the love?
I'm lost, I'm lost, I'm lost
And I don't know why I'm here
[Verse 3: Justin Vernon]
Wanderin' underneath the dark sky
Kaleidoscope dreams jump out the window
And I'm naked in this cruel world
Lost in a crowded world alone
What is the reason for these tears?
What is the reason for my fears?
Wanderin' underneath the dark sky
Kaleidoscope dreams jump out the window
And I'm naked in this cruel world
Lost in a crowded world alone
What is the reason for these tears?
What is the reason for my fears?`,id:9152732},{name:"No God",artist:"Sam Smith",llama_response:`Verse 1:
I see you standing tall, with your head held high
Thinking you're the king of the world, and nothing can deny
Your confidence is strong, your voice is loud and clear
But beneath the surface, there's a fear that you can't shed

Chorus:
You're no god, no one's perfect, no one's in control
We're all just trying to find our way, through this life's roller coaster
You may think you know it all, but you don't know it all
There's so much more to life, than what you can see

Verse 2:
You may think you're in charge, but life has other plans
Sometimes the ones we trust, are the ones who cause the pain
We're all just trying to find our place, in this world so vast
But the illusion of control, can make us feel so fast

Chorus:
You're no god, no one's perfect, no one's in control
We're all just trying to find our way, through this life's roller coaster
You may think you know it all, but you don't know it all
There's so much more to life, than what you can see

Bridge:
We're all just trying to find our footing, in this world that's spinning
We're all just trying to find our voice, in a world that's full of dinning
So let's lift each other up, and not tear each other down
Let's embrace our humility, and wear it like a crown

Chorus:
You're no god, no one's perfect, no one's in control
We're all just trying to find our way, through this life's roller coaster
You may think you know it all, but you don't know it all
There's so much more to life, than what you can see

Outro:
So let's be humble, and open to the truth
We're all just trying to find our way, through this life's youth
And maybe then, we'll find some peace
In the knowledge that we're not the ones who'll always win the race.

This song is written in the style of Sam Smith, with soulful melodies and emotive vocal delivery. The lyrics challenge the listener's self-importance and emphasize the idea that everyone has limitations and should be open to other perspectives. The song has a contemporary pop and R&B feel, with a balance of poignant verses and a powerful, catchy chorus that repeats the message "You're no god" to underscore the idea that no one is infallible or all-knowing.`,lyre_response:`[Intro]
Don't you think it's time
You had a little less talk and a lot more listen?
Don't you think it's time
You had a little less talk and a lot more listen?
[Verse 1]
You're so certain, you're so sure
You know just what to say and how to move
But when it comes to you, you're unsure
It's so uncertain
[Pre-Chorus]
Your arrogance won't save you now
You're not alone when you're on your knees
No one bails you out
When you're all alone
[Chorus]
You're no god
No, you're not God
You're no god
No, you're not God
[Verse 2]
Your beliefs are old and tired
You can't even recognize that you're lied to
You march and protest, carrying signs
But you're so blind to the truth, oh
[Pre-Chorus]
Your arrogance won't save you now
You're not alone when you're on your knees
No one bails you out
When you're all alone
[Chorus]
You're no god
No, you're not God
You're no god
No, you're not God
[Bridge]
You're no god
You're no god
You're no god
You're no god [Outro]
You're no god
No, you're not God
You're no god
No, you're not God`,id:8535327},{name:"Forgot I Was Famous (At The Gates)",artist:"Drake",llama_response:`Verse 1 (Drake):
I'm living my best life, ain't no one gonna stop me
Custom whip, custom fit, got my own personal dro
Fashion game on point, got my own personal stylist
Got my own private jet, fly high, ain't no time to be missin'

Chorus:
Living luxe, living fame, got my own personal game
Ain't no one touching me, I'm on top of the fame
Got my own private circle, exclusive as it gets
Living life to the fullest, ain't no time to forget

Verse 2 (Lil Uzi Vert):
I'm living life on the fast lane, ain't no time to slow down
Got my own personal brand, got the world on a drown
Custom everything, got my own personal crew
Got my own private mansion, ain't no one gonna break through

Chorus:
Living luxe, living fame, got my own personal game
Ain't no one touching me, I'm on top of the fame
Got my own private circle, exclusive as it gets
Living life to the fullest, ain't no time to forget

Verse 3 (Drake):
I'm on top of the world, ain't no one gonna stop me
Got my own personal style, ain't no one gonna top me
Got my own private life, ain't no one gonna know
Living life to the fullest, ain't no time to slow down

Chorus:
Living luxe, living fame, got my own personal game
Ain't no one touching me, I'm on top of the fame
Got my own private circle, exclusive as it gets
Living life to the fullest, ain't no time to forget

Outro (Lil Uzi Vert):
I'm living life on my own terms, ain't no one gonna stop me
Got my own personal brand, got the world on a drown
Custom everything, got my own personal crew
Living life to the fullest, ain't no time to slow down.

This song captures the essence of luxury and fame, with lyrics that boast about extravagant lifestyles, including references to custom cars, high fashion, and exclusivity in social circles. The song has a laid-back yet confident hip-hop rhythm, reflecting a nonchalant attitude towards wealth and fame. The collaborations with artists such as Lil Uzi Vert add to the theme of opulence and the surprise of fame's impact on personal life, similar to the lyrical style of the Sirius XM/Sound 42 Preview.`,lyre_response:`[Intro: Lil Uzi Vert]
(
Phantom phantom, oh, yeah
)
Ayy, ayy, ayy, ayy, yeah
[Verse 1: Lil Uzi Vert]
Drivin' a clean coupe, don't need no vacuum (Yeah, yeah, yeah, yeah)
Walkin' around on my way to be a star, yeah (Yeah, yeah, yeah, yeah)
Bet you never would've thought that I'd go this far, yeah (No way, yeah, yeah, yeah)
I used to cut the porch lights on when my mom came home, yeah (Yeah, yeah, yeah, yeah)
I used to shine so bright, never thought that I'd burn out, yeah (No way, yeah, yeah, yeah)
Never thought that I'd burn out, yeah
[Chorus: Lil Uzi Vert]
Phantom, oh, yeah (Oh, yeah, yeah)
Ayy, ayy, ayy, ayy, yeah (Oh, yeah, yeah)
Drippin' in Louis V (Uh, yeah, yeah)
Ayy, ayy, ayy, ayy, yeah (Oh, yeah, yeah)
[Verse 2: Lil Uzi Vert]
Got a girl that's so fine, she gon' do anything I say (Uh, uh, yeah, yeah, yeah)
Got a girl that's so bad, she gon' do anything all day (Uh, uh, yeah, yeah, yeah)
She pull up on me with her friend, I'm in love, what would you do? (Uh, uh, yeah, yeah, yeah)
I don't wanna be a player, but I can't resist no booty, yeah (No way, uh, uh, yeah, yeah)
I got a house in the hills, that's just how I roll (Uh, uh, yeah, yeah, yeah)
I got a garage full of cars, that's just how I roll (Uh, uh, yeah, yeah, yeah)
I got a girl that's a model, that's just how I roll (Uh, uh, yeah, yeah, yeah)
I got a girl that's a model, she let me hit it while her man is home (Oh, oh, yeah, yeah)
[Chorus: Lil Uzi Vert]
Phantom, oh, yeah (Oh, yeah, yeah)
Ayy, ayy, ayy, ayy, yeah (Oh, yeah, yeah)
Drippin' in Louis V (Uh, yeah, yeah)
Ayy, ayy, ayy, ayy, yeah (Oh, yeah, yeah)
[Verse 3: Drake]
Everyone wants to be my friend, I wonder how it'll end (I do)
I got free rein to do whatever as long as it don't offend
I never gotta wait for a table at a restaurant again
I always get a VIP section with my name on the guest list
Backstage at a U of M game, I never had to pay for a visit
I used to fantasize about havin' a lick before I had a deal
I used to walk around the 6 with my CD in my deal
Never knew the day would come when I would have to chill on the real
Never knew the day would come when I wouldn't be able to feel
Like everything was possible, like the future was mine to seize
It's just a different time, you know, and I can't help but wonder how it'll always be like this
With the private flight and the Hidden Pizza, it's just life now
I always tell young Drake that the fame will get to you slowly
But you get used to it, you'll never know until you're there though
It's just a different world, it's just life now
I wanna show you around, down in the tunnels under the stadium
I can take you to places that you thought you'd never be
And now you're here with me and we're just two regular guys
You can see the look on your face, you can tell that you never expected to see this
I take you to Hidden Pizza and we get a pie with extra cheese
We eat it in the back like two regular guys
Talkin' 'bout, "Wow, I can't believe we here"
Two regular guys
And, "Wow, I can't believe I'm eating at Hidden Pizza"
Two regular guys
It's just life now [Chorus: Lil Uzi Vert & 
Drake
]
Phantom, oh, yeah (
Yeah
, oh, yeah)
Ayy, ayy, ayy, ayy, yeah
(
Woah, yeah
)
Drippin' in Louis V (
Uh, yeah
, uh, yeah)
Ayy, ayy, ayy, ayy, yeah
(
Woah, yeah
)
[Outro: Lil Uzi Vert & 
Drake
]
I used to cut the porch lights on
When my mom came home (
Yeah, yeah, yeah, yeah
)
I used to shine so bright
Never thought that I'd burn out, yeah (
No way, yeah
, no way, yeah)`,id:7179459},{name:"Selfish (Ski Mask the Slump God Reference)",artist:"Kanye West",llama_response:`Verse 1:
I'm living large, but it ain't feeling right
Money and fame, they don't keep the darkness at bay
I'm lost in the haze, trying to find my way
But every night, I'm alone in this mansion, what have I done?

Chorus:
I'm searching for a connection, something real
But all I find is loneliness, it's the price I pay
For the life I've chosen, the fame and the wealth
But it's not worth it, when all I want is someone to steal

Verse 2:
My heart's on fire, but I can't find a way to express
The pain and the hurt, the emptiness that I can't repress
I'm trying to keep it together, but it's tearing me apart
I'm drowning in my own world, and I can't find a way to start

Chorus:
I'm searching for a connection, something real
But all I find is loneliness, it's the price I pay
For the life I've chosen, the fame and the wealth
But it's not worth it, when all I want is someone to steal

Verse 3:
I've got the world at my feet, but it's not enough
I need someone to share it with, to make it all worth it
But every night, I'm alone, with my thoughts and my demons
And I'm starting to realize, that this life I've chosen is not the one I want

Chorus:
I'm searching for a connection, something real
But all I find is loneliness, it's the price I pay
For the life I've chosen, the fame and the wealth
But it's not worth it, when all I want is someone to steal

Bridge:
I know I'm not alone, in this struggle and this pain
But it's hard to keep going, when the only thing that remains
Is the emptiness inside, and the feeling of being alone
But I'll keep pushing forward, and I'll make it through this cold

Chorus:
I'm searching for a connection, something real
But all I find is loneliness, it's the price I pay
For the life I've chosen, the fame and the wealth
But it's not worth it, when all I want is someone to steal

Outro:
I'll keep my head up high, and I'll keep on fighting
I'll find my way to the other side, where the light is shining bright
And I'll hold on to hope, and I'll never let go
Because I know that someday, I'll find my way to go.

This song is written in the style of Kanye West, with a focus on introspective verses and a haunting and repetitive chorus to emphasize the theme of isolation. The lyrics reflect a personal struggle with loneliness and the desire for exclusive companionship, underscored by a sense of self-awareness and resilience. The song captures the conflict between seeking solace in material success and the inherent need for genuine connection, with a raw emotional narrative similar to XXXTENTACION and Ski Mask the Slump God.`,lyre_response:`[Intro: XXXTENTACION & 
Ski Mask the Slump God
]
P
enitence is 
torture, 
who am I kidding?
 (
I'm just kidding, 
haha
)
You know what I need
 (
You know what I need, yeah
)
Baby, I'm lonely
 (
I'm so lonely, 
ahh
)
Baby, I'm lonely
 (
I'm so lonely
)
Baby, I need you
 (
You know I need you, 
yeah
)
Baby, I'm lonely
 (
I'm so lonely
)
Baby, I need you
 (
You know I need you
)
[Chorus: XXXTENTACION]
Even in my mansion, isolated
I still feel alone, I still feel isolated (
I'm so lonely
)
[Verse 1: XXXTENTACION]
I'm in my mansion, I got a pool party
And all these pretty girls, I'm surrounded
But I still feel lonely, I'm not a social person (
I'm so lonely
)
I wish I had someone to talk to
I'm bored out of my mind, got no one to chill with (
I'm so lonely
)
They say money don't solve problems, I should know, I have none (
I'm so lonely
)
I'm gonna fly to wherever she at, hop on a plane, call her, make it
To a three-way if she into that (
I'm so lonely
)
But honestly, I just need you, I don't need whatever she doing
I don't need no more partying, I just need you (
I'm so lonely
)
[Verse 2: XXXTENTACION]
I'm in my mansion, I'm in my room, I see straight through 
(See straight through)
All these cameras, they record what I do (What I do)
Wonderin' if somebody out there thinks like me (Like me)
'Cause I don't mind if nobody hears me
I'll just scream at the top of my lungs if that's what it takes (
I'm so lonely
)
Too many fuckin' demons, I can't leave them behind (
I'm so lonely
)
I'm done with this life, I swear, I can't take it no more (
I'm so lonely
)
I need someone to hold me, I need someone to love me (
I'm so lonely
)
I just need you, is that too much to ask? (
I'm so lonely
)
[Chorus: XXXTENTACION]
Even in my mansion, isolated
I still feel alone, I still feel isolated
[Bridge: XXXTENTACION]
I thought that I'd be happy
I thought that all of this shit 
would make me happy
I thought that I'd be satisfied
I thought that all of this shit 
would make me satisfied
But I'm still lonely, I'm still lonely
I thought that I'd be happy
I thought that all of this shit 
would make me happy
I thought that I'd be satisfied
I thought that all of this shit 
would make me satisfied
But I'm still lonely, I'm still lonely
[Outro: XXXTENTACION]
I just need you, I just need you
I just need you, I just need you
I just need you, I just need you
I just need you, I just need you`,id:9390671},{name:"Juice II",artist:"Logic",llama_response:`(Verse 1)
I was born in the struggle, but I ain't never been weak
Got my eyes on the prize, and I won't stop until I reach
The top of the game, where the real players reside
Got my juice, got my flow, and I'm ready to ride

Growing up, it wasn't easy, but I learned how to grind
Had to fight for every break, every chance I could find
But now I'm on top, and I won't let nobody bring me down
Got my squad with me, and we running this town

(Chorus)
I got the juice, I got the power
I'm the king of the game, and I'm taking control
I got the flow, I got the style
I'm on top of the world, and I'm feeling alive

(Verse 2)
My rhymes so tight, they'll leave you in a daze
Got my own lane, ain't nobody touching my place
I'm the real deal, ain't no faking my grace
Got my own style, ain't nobody wearing my face

I'm the one they call when they need a verse that's fire
Got my own flow, ain't nobody touching my desire
I'm the king of the game, and I'm here to stay
Got my juice, got my power, and I'm here to play

(Chorus)
I got the juice, I got the power
I'm the king of the game, and I'm taking control
I got the flow, I got the style
I'm on top of the world, and I'm feeling alive

(Bridge)
I'm living large, got my diamond rings
Flying high, got my private things
I'm the king of the game, and I'm feeling right
Got my juice, got my power, and I'm feeling tight

(Verse 3)
I'm the one they call when they need a verse that's real
Got my own style, ain't nobody touching my feel
I'm the king of the game, and I'm here to stay
Got my juice, got my power, and I'm here to play

I'm the one they call when they need a verse that's fire
Got my own flow, ain't nobody touching my desire
I'm the king of the game, and I'm here to stay
Got my juice, got my power, and I'm here to play

(Outro)
I got the juice, I got the power
I'm the king of the game, and I'm taking control
I got the flow, I got the style
I'm on top of the world, and I'm feeling alive.

This rap song in the style of Logic reflects on the themes of overcoming adversity, personal growth, and the stark contrast between past hardships and current success. The repetitive chorus of "I got the juice" signifies power and influence, similar to the characters Tupac and Bishop from the film "Juice." The verses incorporate vivid imagery related to wealth, such as expensive watches and rings, and touch on the importance of realness and paying homage in the rap game. The song also emphasizes the rapper's confidence and braggadocio, with lines like "I'm the king of the game" and "I'm feeling alive."`,lyre_response:`[Intro]
Yo, yo, yo, yo
Yo, yo, yo, yo
Yo, yo, yo, yo
Yo, yo, yo
[Chorus]
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice
[Verse 1]
I was homeless in the winter
With just a sleeping bag to keep me warm
I had to grow up fast
I had to learn how to fend for myself
And that's why I'm so fucking hard
That's why I'm so fucking hard
That's why I'm so fucking hard
That's why I'm so fucking hard
I'm so fucking hard
I'm so fucking hard
I'm so fucking hard
That's why I'm so fucking hard
That's why I'm so fucking hard
I'm so fucking hard
I'm so fucking hard
I'm so fucking hard
That's why I'm so fucking hard
That's why I'm so fucking hard
That's why I'm so fucking hard
I'm so fucking hard [Chorus]
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice
[Verse 2]
I done copped me a 
Patek
I done copped me a 
Rolie
I got me a mansion, I got me a boat
And every day, I'm gettin' nothin' but gains, yeah
And every girl I take home, she wanna be my bae
And every man, he jealous 'cause I'm the man anyway
So fuck with me, or you get spray
From the sting like a bee, and that's just the beginning
FBI, CIA, any agent, comin' to the event
To see if I'm sexy or not, but I don't give a damn
[Chorus]
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice
[Verse 3]
Okay, look
Y'all know me, I'm Logic
I'ma say it until my voice go south like Dollywood
I got the juice, like whoa
I got the juice, like whoa
I got the juice, like whoa
I got the juice
Okay, now, I got some real shit to do
Like go pick up my money from my advance
And maybe, just maybe
Pick up a little something, some Versace
Yeah, I'm a 6'3" black-white guy
With glasses and a goofy smile
And I'm richer than the kid that's pitchin' the movie
That's why I'm Tupac in this movie, biatch
And I'm not even Black
But I know everything about the streets, biatch
'Cause I been there, done that, had to move out West
'Cause my life was in danger, homie, listen
Yo, yo, yo, yo, yo
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice
[Outro]
Yo, yo, yo, yo, yo
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice (Juice, Juice, Juice)
I got the juice`,id:8305765},{name:"Single Soon",artist:"Selena Gomez",llama_response:`(Verse 1)
I've been stuck in this rut, feeling so alone
Tryna find my way out, but I can't seem to move
I've been thinking 'bout walkin' away, leavin' it all behind
'Cause I know I deserve better, and I won't be held down

(Chorus)
I'm ready to break free, gonna shake off the past
I'm gonna dress up, gonna show off my new last
I'm gonna dance the night away, gonna live my life
I'm single and ready to shine, gonna make it all right

(Verse 2)
I'm done with the drama, done with the fights
I'm ready to move on, gonna shine with all my might
I'm gonna put on my best smile, gonna show the world my light
I'm gonna be the one that shines bright, gonna ignite the night

(Chorus)
I'm ready to break free, gonna shake off the past
I'm gonna dress up, gonna show off my new last
I'm gonna dance the night away, gonna live my life
I'm single and ready to shine, gonna make it all right

(Bridge)
I'm gonna take control, gonna make my own choices
Gonna wear my heart on my sleeve, gonna show off my voice
I'm gonna be the one that makes the rules, gonna make my own way
I'm gonna be the one that shines, gonna light up the day

(Chorus)
I'm ready to break free, gonna shake off the past
I'm gonna dress up, gonna show off my new last
I'm gonna dance the night away, gonna live my life
I'm single and ready to shine, gonna make it all right

(Outro)
I'm ready to start, gonna take on the world
I'm gonna be the one that stands out, gonna be the one that's heard
I'm gonna be the one that shines, gonna make it all right
I'm single and ready to shine, gonna light up the night.

This song captures the liberating moment of anticipating singlehood with an upbeat pop melody, reflecting the themes of independence and self-empowerment. The protagonist is contemplating how to end a relationship, but is also excited for the new beginning that comes with being single. The lyrics include imagery of dressing up and embracing the freedom to make personal choices, with a tone that is both playful and assertively optimistic. The catchy chorus emphasizes the imminent return to single life, with a tone that is both liberating and empowering.`,lyre_response:`[Intro]
Single, ready to mingle
Single, ready to mingle
Single, ready to mingle
I'm single, ready to mingle
[Verse 1]
What's wrong with me? I'm so hard to please
You'd think I'd learn by now, I need better dreams
But I feel good in your good moods, I feel right in your bad
Sorry if I'm bad sometimes, I'm just trying to be glad
[Pre-Chorus]
Because I'm scared to death of being hurt
And I've been there, done that, got the T-shirt
But I say, "What's the worst that could happen?"
And do what I always do, I run
[Chorus]
In two days, I'll be single again
I've worn everything I can to try and make you see
That I am meant for better things than you can see
I've worn everything I can
In two days, I'll be single again
[Post-Chorus]
La-la-la-la, single, ready to mingle
La-la-la-la, single, ready to mingle
Single, ready to mingle
(You get a single, ready to mingle)
La-la-la-la, single, ready to mingle
La-la-la-la, single, ready to mingle
Single, ready to mingle
(And a single, ready to mingle)
[Verse 2]
Tonight, I think I'm gonna dress up
Go out and fake jock it up
With all the guys I've ever dumped
See if they wanna be my boyfriend
[Pre-Chorus]
Because I'm scared to death of being hurt
And I've been there, done that, got the T-shirt
But I say, "What's the worst that could happen?"
And do what I always do, I run
[Chorus]
In two days, I'll be single again
I've worn everything I can to try and make you see
That I am meant for better things than you can see
I've worn everything I can
In two days, I'll be single again
[Post-Chorus]
La-la-la-la, single, ready to mingle
La-la-la-la, single, ready to mingle
Single, ready to mingle
(You get a single, ready to mingle)
La-la-la-la, single, ready to mingle
La-la-la-la, single, ready to mingle
Single, ready to mingle
(And a single, ready to mingle)
[Bridge]
I'm so excited, I'm on my way
Gonna make mistakes, but that's the fun
These days, I'm gonna try and play
I'm so excited, I'm on my way
Gonna make mistakes, but that's the fun
These days, I'm gonna try and play
[Chorus]
In two days, I'll be single again
I've worn everything I can to try and make you see
That I am meant for better things than you can see
I've worn everything I can
In two days, I'll be single again
[Post-Chorus]
La-la-la-la, single, ready to mingle
La-la-la-la, single, ready to mingle
Single, ready to mingle
(You get a single, ready to mingle)
La-la-la-la, single, ready to mingle
La-la-la-la, single, ready to mingle
Single, ready to mingle
(And a single, ready to mingle)`,id:9031130},{name:"Slime You Out",artist:"Drake",llama_response:`Verse 1 (Drake):
I'm sippin' on a drink, thinkin' 'bout the one I love
She said she's busy, but I know she's tryna play me like a fool
I'm tryna keep my cool, but it's hard when you're always on my mind
I'm tryna trust you, but you keep on teasin' me, and it's startin' to feel like a crime

Chorus (Female Vocalist):
We're playin' emotional games, and I'm feelin' like a fool
You're tryna keep me on the line, but I'm tryna break the rule
I need some space, but you keep on callin' me
I'm tryna find my way, but you keep on holdin' me

Verse 2 (Drake):
I know you're tryna keep it real, but you're tryna keep it cool
I'm tryna keep it real, but you're tryna keep it smooth
I'm tryna find the truth, but you're tryna keep it hid
I'm tryna keep my pride, but you're tryna keep it rid

Chorus (Female Vocalist):
We're playin' emotional games, and I'm feelin' like a fool
You're tryna keep me on the line, but I'm tryna break the rule
I need some space, but you keep on callin' me
I'm tryna find my way, but you keep on holdin' me

Verse 3 (Drake):
I'm tryna find the balance, but you're tryna keep it strange
I'm tryna keep it real, but you're tryna keep it bland
I'm tryna find the answer, but you're tryna keep it hidden
I'm tryna keep my heart, but you're tryna keep it denied

Chorus (Female Vocalist):
We're playin' emotional games, and I'm feelin' like a fool
You're tryna keep me on the line, but I'm tryna break the rule
I need some space, but you keep on callin' me
I'm tryna find my way, but you keep on holdin' me

Verse 4 (Drake):
I'm tryna keep my cool, but you're tryna keep it hot
I'm tryna find the truth, but you're tryna keep it shot
I'm tryna keep my pride, but you're tryna keep it bought
I'm tryna keep my heart, but you're tryna keep it broke

Chorus (Female Vocalist):
We're playin' emotional games, and I'm feelin' like a fool
You're tryna keep me on the line, but I'm tryna break the rule
I need some space, but you keep on callin' me
I'm tryna find my way, but you keep on holdin' me

Outro (Drake):
I'm tryna keep it real, but you're tryna keep it fake
I'm tryna find the truth, but you're tryna keep it broke
I'm tryna keep my heart, but you're tryna keep it smoked
I'm tryna keep my cool, but you're tryna keep it played.

The song tells the story of a relationship where trust issues and emotional games are prevalent. The male narrator, Drake, expresses his frustration and confusion about the woman he loves, who is always busy and seems to be playing games with him. The female vocalist adds her perspective, highlighting the challenges of being in a relationship where one person is trying to keep the other on a tight leash. The chorus captures the emotional rollercoaster of the relationship, with both parties feeling like fools and struggling to find their way. The song's laid-back but assertive rap flow and conversational tone are reminiscent of Drake's signature style, while the female vocalist's feature adds depth and complexity to the narrative.`,lyre_response:`[Intro: SZA]
I just wanna know if you love me
Is that too much to ask?
I just wanna know if you love me
Is that too much to ask?
If you say that you love me
Then why do you play?
If you say that you love me
Then why do you play?
[Verse 1: SZA]
It's like I'm constantly second guessing
You're always closing doors I never even knew were there before
Like a dark cloud following us, I'm so tired of looking over my shoulder
It got to a point that it felt like I didn't even know you no more
It's like I'm constantly second guessing
(
Constantly second guessing
)
You're always closing doors I never even knew were there before
Like a dark cloud following us, I'm so tired of looking over my shoulder
It got to a point that it felt like I didn't even know you no more
[Pre-Chorus: SZA]
And just like that, we're right back where we started
You say that you love me, but is that just a part of it?
All the games that you play, I wanna get in the middle of it
You say that you love me, but is that just a part of it?
[Chorus: SZA]
I just wanna know if you love me
Is that too much to ask?
I just wanna know if you love me
Is that too much to ask?
If you say that you love me
Then why do you play? (
Why do you play?
)
If you say that you love me
Then why do you play? (
Why do you play?
)
I just wanna know if you love me
Is that too much to ask? (
Is that too much to ask?
)
I just wanna know if you love me (
If you love me
)
Is that too much to ask? [Verse 2: SZA]
I'm done being down, I'm done being down for you
I put you up on game and this is how you repay me
I found a love that's truly true and she know that I'm a freak
I found a love that truly cares and she know that I need a break
I'm done being down, I'm done being down for you
I put you up on game and this is how you repay me
I found a love that's truly true and she know that I'm a freak
I found a love that truly cares and she know that I need a break
[Pre-Chorus: SZA]
And just like that, we're right back where we started
You say that you love me, but is that just a part of it?
All the games that you play, I wanna get in the middle of it
You say that you love me, but is that just a part of it?
[Chorus: SZA]
I just wanna know if you love me
Is that too much to ask?
I just wanna know if you love me
Is that too much to ask?
If you say that you love me
Then why do you play? (
Why do you play?
)
If you say that you love me
Then why do you play? (
Why do you play?
)
I just wanna know if you love me
Is that too much to ask? (
Is that too much to ask?
)
I just wanna know if you love me (
If you love me
)
Is that too much to ask? [Verse 3: SZA]
Is that a look, is that a smile? (I'm so tired)
Just tell me how you feel, don't make me wait (I'm so tired)
All this time, I thought that we were one (I'm so tired)
But all the games that you play, you (You play)
[Pre-Chorus: SZA]
And just like that, we're right back where we started
You say that you love me, but is that just a part of it? (No, no, no, no, no)
All the games that you play, I wanna get in the middle of it
You say that you love me, but is that just a part of it? (No, no, no, no, no)
[Chorus: SZA & 
Drake
]
I just wanna know if you love me (
Is that too much to ask?
)
Is that too much to ask? (
Is that too much to ask?
)
I just wanna know if you love me
Is that too much to ask?
I just wanna know if you love me
Is that too much to ask? (
Is that too much to ask?
)
If you say that you love me
Then why do you play? (
Why do you play?
)
If you say that you love me
Then why do you play? (
Why do you play?
)
I just wanna know if you love me (
If you love me
)
Is that too much to ask?
I just wanna know if you love me (
If you love me
)
Is that too much to ask?`,id:9521954},{name:"Turn Yo Clic Up",artist:"Future",llama_response:`(Verse 1)
I'm the king of the trap, the one and only
Got my crew around me, we all in this together
From the hood to the top, we grinded every day
Now we living lavish, ain't no way to play

Brand new whip, it's a Lambo, it's a Ferrari
Got my name on it, ain't no other way to be
Got my homies with me, we all on the rise
Leaving all the haters in the dust, they can't deny

(Chorus)
Boss in the streets, that's what I am
Got my status, got my wealth, got my fame
But it ain't easy, ain't no overnight thing
Got to keep pushing, got to keep climbing

(Verse 2)
I'm the one they all look up to, the one they all fear
Got my own lane, ain't no one in my ear
Got my own flow, ain't no one got my style
Got my own swag, ain't no one got my vibe

Got my own label, ain't no one on my payroll
Got my own team, ain't no one in my zone
Got my own game, ain't no one on my soil
Got my own flow, ain't no one got my go

(Chorus)
Boss in the streets, that's what I am
Got my status, got my wealth, got my fame
But it ain't easy, ain't no overnight thing
Got to keep pushing, got to keep climbing

(Bridge)
Setbacks and haters, they'll try to bring me down
But I won't fall, I'll keep standing tall and proud
Got my loyal crew, they'll never leave my side
Got my street cred, it's the only thing that's right

(Verse 3)
I'm the one they all respect, the one they all fear
Got my own path, ain't no one in my ear
Got my own voice, ain't no one got my style
Got my own vision, ain't no one got my vibe

Got my own empire, ain't no one in my way
Got my own legacy, ain't no one got my say
Got my own story, ain't no one got my flow
Got my own identity, ain't no one got my go

(Chorus)
Boss in the streets, that's what I am
Got my status, got my wealth, got my fame
But it ain't easy, ain't no overnight thing
Got to keep pushing, got to keep climbing

(Outro)
So listen up, y'all, I hope you understand
Being a boss in the streets, it ain't no easy hand
But I'll keep climbing, I'll keep pushing hard
Got to be a boss, ain't no other way to be in the yard.`,lyre_response:`[Intro]
(
Raymond, you a fool for this one
)
[Chorus]
Being a boss ain't cheap, but the cost on your soul
Heavy is the head that wears the crown
Heavy is the head that wears the crown
Heavy is the head that wears the crown
Being a boss ain't cheap, but the cost on your soul
Heavy is the head that wears the crown
Heavy is the head that wears the crown
Being a boss, being a boss
Being a boss, being a boss
Being a boss, being a boss
Being a boss, being a boss (
Raymond, you a fool for this one
)
[Verse 1]
I can't show no emotions, I'm from the streets
My nigga, you know I got no heart
I'm from the trenches, I'm from the seeds
You know I got no time for your feelings
I keep my bitch, I keep my bitch
She got a ass, and when she sit
You know it's on me, you know it's on me
She get a dick, she get a dick
She get a dick, she get a dick
And when she done, she done
And when she done, she done
I take a lil' off, I take a lil' off
I take a lil' off, I take a lil' off, I'm a boss
[Chorus]
Being a boss ain't cheap, but the cost on your soul
Heavy is the head that wears the crown
Heavy is the head that wears the crown
Heavy is the head that wears the crown
Being a boss ain't cheap, but the cost on your soul
Heavy is the head that wears the crown
Heavy is the head that wears the crown
Being a boss, being a boss
Being a boss, being a boss
Being a boss, being a boss
Being a boss, being a boss (
Raymond, you a fool for this one
) [Verse 2]
I got my set, I got my set
If you not with us, then you against us
You know how this game go, you know the end
You either with us, or you ride solo
My nigga, I swear to God, you is not loyal
I had to cut you off, I had to cut you off
I can't have no pussy ass nigga with my dopest coupe
I got too many other niggas that's willing to cut you off
I'm just saying, I'm just saying [Chorus]
Being a boss ain't cheap, but the cost on your soul
Heavy is the head that wears the crown
Heavy is the head that wears the crown
Heavy is the head that wears the crown
Being a boss ain't cheap, but the cost on your soul
Heavy is the head that wears the crown
Heavy is the head that wears the crown
Being a boss, being a boss
Being a boss, being a boss
Being a boss, being a boss
Being a boss, being a boss (
Raymond, you a fool for this one
)
[Outro]
I'm a fool for this one
Being a boss, being a boss
Being a boss, being a boss
Being a boss, being a boss (
Raymond, you a fool for this one
)`,id:9315592},{name:"Feel It",artist:"Travis Scott ",llama_response:`(Verse 1)
I'm in the club, feel the energy, got my eyes on you
You're lookin' fine, gotta take you home with me, yeah
Got my drink in hand, feelin' like a star
Got my eyes on you, girl, you're the only one I care

(Chorus)
Shawty, I won't stop, I won't stop, I won't stop
Until you feel it, until you feel it, yeah
I won't stop, I won't stop, I won't stop
Until you feel it, until you feel it, yeah

(Verse 2)
You're movin' to the beat, got me feelin' like a king
Got my hands on you, gotta keep it goin'
Got my eyes on you, girl, you're the only one I see
Got my heart on you, girl, you're the only one for me

(Chorus)
Shawty, I won't stop, I won't stop, I won't stop
Until you feel it, until you feel it, yeah
I won't stop, I won't stop, I won't stop
Until you feel it, until you feel it, yeah

(Bridge)
We're livin' life to the fullest, gotta make the most of it
Got my hands on you, gotta keep it movin'
We're in the moment, gotta let it ride
Got my eyes on you, girl, you're takin' me higher

(Chorus)
Shawty, I won't stop, I won't stop, I won't stop
Until you feel it, until you feel it, yeah
I won't stop, I won't stop, I won't stop
Until you feel it, until you feel it, yeah

(Outro)
I'll keep on pushin', keep on pullin' you in
Got my eyes on you, girl, you're the only one I'm in
Got my heart on you, girl, you're the only one I'll need
Shawty, I won't stop, until you feel it, yeah.

This song captures a laid-back, hypnotic atmosphere with a touch of hedonism, featuring themes of nightlife, intimate encounters, and the luxurious lifestyle. The repetitive chorus emphasizes persistence in pursuit of pleasure, much like the "Shawty, I won't stop until you feel it" motif, which is a signature element of Travis Scott's style. The blend of Travis Scott's signature auto-tuned vocals and PARTYNEXTDOOR's R&B-infused delivery creates a track that would resonate with their collaborative sound.`,lyre_response:`[Intro: PARTYNEXTDOOR]
Oh, yeah
Oh, yeah
Oh, yeah
Oh, yeah
Shawty, I won't stop
Shawty, I won't stop
Shawty, I won't stop
Shawty, I won't stop
[Chorus: PARTYNEXTDOOR]
Shawty, I won't stop until you feel it
Won't stop until you feel it, yeah
Won't stop until you feel it
Won't stop until you feel it
Won't stop, yeah, I won't stop, yeah
[Verse 1: Travis Scott]
I'll go out my way to get a lick
I'll go out my way to bring you bacon
Tell my nurse she gotta hit the road
'Cause I'ma do this shit all night, all day
She gon' leave her boyfriend for the night
'Cause I'ma do this shit all night, all day
I'm the lust and love of your life
Got a dick that'll make you feel like you're flyin'
Got a tongue that'll make you feel like you're dyin'
You'll never be the same after we collide
[Pre-Chorus: PARTYNEXTDOOR]
I'm gon' take this night and I'm gonna ride
I'm gon' take this night and I might die
I'm gonna take this night and I'm gonna ride
I'm gon' take this night and I might die
[Chorus: PARTYNEXTDOOR]
Shawty, I won't stop until you feel it
Won't stop until you feel it, yeah
Won't stop until you feel it
Won't stop until you feel it
Won't stop, yeah I won't stop, yeah
[Verse 2: Travis Scott]
Pour the Patron, I'll take it from here
Pour the Patron, I'll take it from here
I'll put you up on game, I'll take you everywhere
Won't stop, 'cause I'm the man of the year
I'm all in this bitch, feel like I'm in a mirror
Like I'm staring at myself, is you my mirror?
Mirror, mirror, who's the fairest one of all?
All, all, who's the fairest one of all?
[Pre-Chorus: PARTYNEXTDOOR]
I'm gon' take this night and I'm gonna ride
I'm gon' take this night and I might die
I'm gonna take this night and I'm gonna ride
I'm gon' take this night and I might die
[Chorus: PARTYNEXTDOOR]
Shawty, I won't stop until you feel it
Won't stop until you feel it, yeah
Won't stop until you feel it
Won't stop until you feel it
Won't stop, yeah I won't stop, yeah
[Bridge: PARTYNEXTDOOR]
I'm gonna take this night and I'm gonna ride
I'm gon' take this night and I might die
I'm gonna take this night and I'm gonna ride
I'm gon' take this night and I might die
[Chorus: PARTYNEXTDOOR & 
Travis Scott
]
Shawty, I won't stop until you feel it
Won't stop until you feel it, yeah (
Uh
)
Won't stop until you feel it (
Feel it
)
Won't stop until you feel it (
Feel it
)
Won't stop until you feel it
Won't stop, yeah I won't stop, yeah`,id:4805544},{name:"Diamonds",artist:"Sia",llama_response:`Verse 1:
I've been through the fire and the rain
But I'm still standing, I'm still here
I've got scars that tell my story
But I'm not broken, I'm not sorry
I've been through the storm, but I'm not shaken
I've emerged stronger, my spirit unbroken

Chorus:
I'm a diamond in the rough, shining bright
I've weathered every storm, I'm still standing tall
I've got the heart of a warrior, I won't give up the fight
I'll shine my light, I'll rise above the night
I'm a diamond in the rough, I'm radiant and strong
I'll keep on shining, all life long

Verse 2:
I've seen the darkest of days
But I've never lost my way
I've found the light in every moment
And I've risen above the fray
I've got the strength of a lioness
And the grace of a hummingbird's wings
I'll soar on the wind, I'll dance in the rain
I'm unstoppable, I'm untamed

Chorus:
I'm a diamond in the rough, shining bright
I've weathered every storm, I'm still standing tall
I've got the heart of a warrior, I won't give up the fight
I'll shine my light, I'll rise above the night
I'm a diamond in the rough, I'm radiant and strong
I'll keep on shining, all life long

Bridge:
I'll never let the shadows take control
I'll never let my spirit be sold
I'll rise above the noise, I'll stand tall and proud
I'm a diamond in the rough, I'm unbreakable and loud

Chorus:
I'm a diamond in the rough, shining bright
I've weathered every storm, I'm still standing tall
I've got the heart of a warrior, I won't give up the fight
I'll shine my light, I'll rise above the night
I'm a diamond in the rough, I'm radiant and strong
I'll keep on shining, all life long

Outro:
I'm a diamond in the rough, a shining light
I'll keep on shining, through day and night
I'll rise above the darkness, I'll never give up the fight
I'm a diamond in the rough, I'm unbreakable and bright.

Musical Arrangement:

* The song begins with a soft, haunting melody on piano and strings, with Sia's signature soaring vocals.
* The tempo picks up in the chorus, with a driving beat and uplifting harmonies, building to an anthemic climax.
* The verses feature a mix of piano and guitar, with a subtle use of percussion and strings to create a sense of depth and texture.
* The bridge features a more stripped-back arrangement, with just piano and vocals, before building back up to the final chorus.
* The song ends with a reprise of the chorus, with a sense of resolution and triumph.

Overall, the song is meant to evoke the imagery of diamonds and the themes of resilience and radiance, with a soaring and anthemic quality that captures the uplifting and empowering spirit of Sia's hit songs.`,lyre_response:`[Intro]
Oh, oh, oh, oh
Oh, oh, oh, oh
Oh, oh, oh, oh
Diamonds are formed under pressure
So are the things that are worth the most
So, let the rain wash over you
And the sun light the things that you've done
And you'll become a diamond, too
[Verse 1]
So, let it fall, let it crumble
Forming a foundation for what's to come
So, let it break, let it shatter
And let the pieces fall where they may
So, let it burn, let it bleed
And let the fire come to wash away all the pain
[Pre-Chorus]
Because when the going gets tough
That's when you get to prove yourself
So, let it fall, let it crumble
Forming a foundation for what's to come
So, let it break, let it shatter
And let the pieces fall where they may
So, let it burn, let it bleed
And let the fire come to wash away all the pain
[Chorus]
So, you can shine, so you can shine
So, you can shine, so you can shine
So, you can shine, so you can shine
So, you can shine [Verse 2]
So, let it fall, let it crumble
Forming a foundation for what's to come
So, let it break, let it shatter
And let the pieces fall where they may
So, let it burn, let it bleed
And let the fire come to wash away all the pain
[Pre-Chorus]
Because when the going gets tough
That's when you get to prove yourself
So, let it fall, let it crumble
Forming a foundation for what's to come
So, let it break, let it shatter
And let the pieces fall where they may
So, let it burn, let it bleed
And let the fire come to wash away all the pain
[Chorus]
So, you can shine, so you can shine
So, you can shine, so you can shine
So, you can shine, so you can shine
So, you can shine
So, you can shine, so you can shine
So, you can shine, so you can shine
So, you can shine, so you can shine
So, you can shine, so you can shine
So, you can shine [Outro]
So, you can shine, so you can shine
So, you can shine, so you can shine
So, you can shine, so you can shine
So, you can shine`,id:89794},{name:"Tattooed Heart",artist:"Ariana Grande",llama_response:`Verse 1:
I've been thinking 'bout the way you make me feel
Like you're the only one who knows me, really knows me
And I can't help but wonder if you feel the same
If you'd be the one to ink my name on your heart, forevermore

Chorus:
I want to be the one you think of when you see the stars up high
The one you dream of, the one you can't deny
I want to be the name on your tattooed heart
Forever and always, we'll never be apart

Verse 2:
I know it's crazy, but I can't help how I feel
Like I need a symbol, something tangible to reveal
The depth of our love, the connection we share
A mark that'll last forever, beyond compare

Chorus:
I want to be the one you think of when you see the stars up high
The one you dream of, the one you can't deny
I want to be the name on your tattooed heart
Forever and always, we'll never be apart

Bridge:
I don't need diamonds or fancy cars
All I need is you, and a heart that's yours
I'll give you my love, my heart, my everything
Forever and always, my love will sing

Chorus:
I want to be the one you think of when you see the stars up high
The one you dream of, the one you can't deny
I want to be the name on your tattooed heart
Forever and always, we'll never be apart

Outro:
I know it's not traditional, but I don't care
I just want you to know that I'm always there
In your heart, in your soul, in your dreams
Forever and always, my love will gleam.

This song combines the modern pop sound of Ariana Grande with the classic romance of the 1950s, while focusing on the theme of longing for a permanent and visible symbol of love. The lyrics convey a sense of youthful sincerity and desire for commitment without the need for materialistic gestures, emphasizing emotional connection and love. The melody is smooth and soulful, with a pop sound that is characteristic of Grande's music. The use of repetition in the chorus and the bridge creates a catchy and memorable hook, while the intimate and heartfelt lyrics suggest a timeless bond between the speaker and their love.`,lyre_response:`[Intro]
My tattooed heart
Will forever be yours
You're the one I need
Forever and always
[Verse 1]
Will you be my tattooed heart?
Will you be my tattooed heart?
I want to be your temporary high
I want you to surrender to me, me, yeah
I don't need no diamond ring
I don't need no material thing
I need your love, your love, your love
I want your love, your love
[Pre-Chorus]
And I will be your temporary high
I will surrender to you
I don't need no diamond ring
I don't need no material thing
I need your love, your love, your love
I want your love, your love
[Chorus]
I want to be your tattooed heart
I want to be your tattooed heart
I want to be your tattooed heart
I want to be your tattooed heart
[Verse 2]
Will you be my tattooed heart?
Will you be my tattooed heart?
I want to be your temporary high
I want you to surrender to me, me, yeah
I don't need no diamond ring
I don't need no material thing
I need your love, your love, your love
I want your love, your love [Pre-Chorus]
And I will be your temporary high
I will surrender to you
I don't need no diamond ring
I don't need no material thing
I need your love, your love, your love
I want your love, your love
[Chorus]
I want to be your tattooed heart
I want to be your tattooed heart
I want to be your tattooed heart
I want to be your tattooed heart
I want to be your tattooed heart
I want to be your tattooed heart
I want to be your tattooed heart
I want to be your tattooed heart
I want to be your tattooed heart
I want to be your tattooed heart`,id:213372},{name:"The Hillbillies",artist:"Kendrick Lamar",llama_response:`Verse 1 (Kendrick Lamar):
I'm livin' large, ballin' like a pro,
Fresh off the plane, private jet flow,
Fashion brands on me like a badge of honor,
Billions in the bank, but I'm still feelin' like a rogue.

Chorus (Bon Iver):
I'm a celebrity, but I'm not myself,
Living in a world that's not real,
I'm a shadow of the person I used to be,
A reflection of the fame that's been bestowed upon me.

Verse 2 (Kendrick Lamar):
I've got the world at my fingertips,
Red carpets, awards, and diamond-studded rings,
But the more I have, the more I'm left with,
A hollow feeling, like there's nothin' that's real.

Chorus (Bon Iver):
I'm a celebrity, but I'm not myself,
Living in a world that's not real,
I'm a shadow of the person I used to be,
A reflection of the fame that's been bestowed upon me.

Verse 3 (Kendrick Lamar):
I'm the king of the game, but I'm not the king of my life,
I'm a puppet on a string, a pawn in the game of strife,
I've got the world at my feet, but I'm still searchin' for the truth,
Ain't no Instagram filter can hide the emptiness I feel.

Chorus (Bon Iver):
I'm a celebrity, but I'm not myself,
Living in a world that's not real,
I'm a shadow of the person I used to be,
A reflection of the fame that's been bestowed upon me.

Verse 4 (Kendrick Lamar):
I'm the king of the castle, but I'm not the king of my heart,
I'm a ghost in the machine, a stranger in this world from the start,
I've got the world in the palm of my hand, but I'm still reachin' for the sky,
Ain't no status symbol can replace the love that I desire.

Chorus (Bon Iver):
I'm a celebrity, but I'm not myself,
Living in a world that's not real,
I'm a shadow of the person I used to be,
A reflection of the fame that's been bestowed upon me.

Bridge (Kendrick Lamar):
I'm a work of art, a masterpiece in the making,
A reflection of the world that's been shaping me,
I'm a mirror of society, a reflection of the times,
A product of the system, a slave to the rhymes.

Chorus (Bon Iver):
I'm a celebrity, but I'm not myself,
Living in a world that's not real,
I'm a shadow of the person I used to be,
A reflection of the fame that's been bestowed upon me.

Outro (Kendrick Lamar):
I'm the king of the game, but I'm not the king of my life,
A celebrity in the spotlight, but I'm still searchin' for the truth,
I'm a ghost in the machine, a stranger in this world from the start,
But I'll keep on fightin', keep on searchin', keep on reachin' for the sky.

This song blends the confident tone and introspective themes of Kendrick Lamar's lyrics with the experimental and atmospheric elements of Bon Iver's sound. The collaboration creates a layered and complex musical experience that captures the duality of high-profile celebrity life – the lavish lifestyle and the quest for genuine human connection. The lyrics reference specific cultural references, such as fashion brands and celebrities, while also exploring the contrast between public perception and private reality. The song's confident tone gives way to moments of contemplative introspection, highlighting the ironic detachment from relationships that can come with fame.`,lyre_response:`[Intro: Kendrick Lamar]
It's real, I'm in the cut, heart full of pride, I'm tied
To a fashion brand, just not sure which one, yet
I'm in the club, I'm by myself, no one's around
I got my drink, no one's served it, I'm the only one here
[Verse 1: Kendrick Lamar]
I'm a 
real one, not an actor
I don't do shit for attention, I just do it for the fabric
I'm a black Taurus, 45, and I'm loaded
Mention my name, they'll mention my properties
I don't do shit for free, you gotta pay me
You gotta pay me if you want me to endorse ya
You gotta pay me if you want me to appear ya
I don't owe no one nothin', I just do it for the love
I'm in the club, I got a balcony, I got a view
I'm with my woes, we don't know each other, we don't hug
I got plenty dough, but I'm not rich enough
I'm on a quest to find the realest shit
I'm on a flight right now, I'm one of the few
I'm on first class, but I'm not here for the view
I'm here for you [Bridge: Kendrick Lamar & 
Bon Iver
]
I'm in the cut, I'm tied to a fashion brand
I'm in the club by myself, I'm the only one here
I don't owe no one nothin', I just do it for the love
I'm on a quest to find the realest shit
I'm in the cut, I'm tied to a fashion brand
I'm in the club by myself, I'm the only one here
I don't owe no one nothin', I just do it for the love
I'm on a quest to find the realest shit
I'm in the cut, I'm tied to a fashion brand
I'm in the club by myself, I'm the only one here
I don't owe no one nothin', I just do it for the love
I'm on a quest to find the realest shit
[Verse 2: Bon Iver]
I'm a real one, not an actor
I don't do shit for attention, I just do it for the cracker
Jacksons, I'm a Michigander, 250, and I'm loaded
Mention my name, they'll mention my properties
I don't do shit for free, you gotta pay me
You gotta pay me if you want me to endorse ya
You gotta pay me if you want me to appear ya
I don't owe no one nothin', I just do it for the love
I'm on a flight right now, I'm one of the few
I'm on first class, but I'm not here for the view
I'm here for you [Bridge: Kendrick Lamar & 
Bon Iver
]
I'm in the cut, I'm tied to a fashion brand
I'm in the club by myself, I'm the only one here
I don't owe no one nothin', I just do it for the love
I'm on a quest to find the realest shit
I'm in the cut, I'm tied to a fashion brand
I'm in the club by myself, I'm the only one here
I don't owe no one nothin', I just do it for the love
I'm on a quest to find the realest shit
[Outro: Kendrick Lamar]
I'm a real one, not an actor
I don't do shit for attention, I just do it for the cracker
Jackson's, I'm a Michigander, 250, and I'm loaded
Mention my name, they'll mention my properties
I don't do shit for free, you gotta pay me
You gotta pay me if you want me to endorse ya
You gotta pay me if you want me to appear ya
I don't owe no one nothin', I just do it for the love
I'm on a flight right now, I'm one of the few
I'm on first class, but I'm not here for the view
I'm here for you`,id:9178861},{name:"Bongos",artist:"Cardi B",llama_response:`(Verse 1 - Cardi B)
I'm the queen of the club, ain't no one touchin' me
Got my own money, ain't no one fundin' me
Birkin bag on my arm, Louboutins on my feet
I'm the one they all come to see, can't nobody beat

(Chorus - Cardi B & Megan Thee Stallion)
We the baddest bitches in the game, don't you know
We got the flow, we got the style, we got the dough
We ain't no one's bitch, we in control, you see
We the queens of the club, and we're here to be free

(Verse 2 - Megan Thee Stallion)
I'm the king of the throne, ain't no one touchin' me
Got my own swag, ain't no one jackin' me
Rockin' my designer, got my own style
I'm the one they all come to buy, can't nobody smile

(Chorus - Cardi B & Megan Thee Stallion)
We the baddest bitches in the game, don't you know
We got the flow, we got the style, we got the dough
We ain't no one's bitch, we in control, you see
We the queens of the club, and we're here to be free

(Verse 3 - Cardi B)
I'm the one they all come to see, I'm the king of the throne
Got my own money, ain't no one takin' it from me
Got my own style, ain't no one copyin' me
I'm the one they all come to be, can't nobody be me

(Chorus - Cardi B & Megan Thee Stallion)
We the baddest bitches in the game, don't you know
We got the flow, we got the style, we got the dough
We ain't no one's bitch, we in control, you see
We the queens of the club, and we're here to be free

(Bridge - Both)
We the ones they all come to see, we the ones they all come to be
We the baddest bitches in the game, and we're here to set them free
We the queens of the club, and we're here to stay
We the ones they all come to see, every single day

(Chorus - Cardi B & Megan Thee Stallion)
We the baddest bitches in the game, don't you know
We got the flow, we got the style, we got the dough
We ain't no one's bitch, we in control, you see
We the queens of the club, and we're here to be free

(Outro - Both)
So if you come to the club, you know what to do
Got to come to see the baddest bitches in the game, it's true
We the queens of the club, and we're here to stay
So come on, let's party, let's have a good time, every day.`,lyre_response:`[Intro: Cardi B]
Bitch, I'm a dollar bill
Know my value, I was born with it
Soon as I step in, you know I'm gon' pay it
I know my value, I was born with it (Woah, woah)
[Chorus: Megan Thee Stallion & 
Cardi B
]
I'm a hottie, he a hottie
We like to party, we like to turn up
We like to travel, we like to jet set (
Yeah
)
I'm a hottie, he a hottie
We like to party, we like to turn up
We like to travel, we like to jet set (
Woah
)
Hottie
, he a hottie
We like to party, we like to turn up
We like to travel, we like to jet set
Hottie
, he a hottie
 (
Woah
)
We like to party, we like to turn up
We like to travel, we like to jet set (
Yeah, yeah
)
Hottie
, he a hottie
We like to party, we like to turn up
We like to travel, we like to jet set
Hottie
, he a hottie
[Refrain: Cardi B & 
Megan Thee Stallion
]
Should I pick up a check or should I not? (Hey)
I'm a hottie and you're a hottie (Woah)
We like to party and we like to turn up (Cardi)
We like to travel and we like to jet set (Megan)
[Verse 1: Megan Thee Stallion]
I can't help it, I'm a mess
If I can't be with you, I don't want none
I don't want him, he too messy
I'll walk by and I'ma give him detention
Fucking with my head, I can't seem to focus
I know he's bad for me, but I'm addicted
I've been with guys like him before
They always want me to be a secretary
Want me to be their little puppet
Wanna fuck me and then diss me and then send me a letter
Read it on my cell, my heart all in pieces
Tried to call him, but I couldn't reach him
I'm so done with dudes, I want Queen Megan
I want a king, I want a billion
I want a mansion, I want a yacht
I want a jet, I want a Rolls
I want a drop-top, I want a gold mine
I want a big ass, I want a photo shoot
I want a contract, I want a mega deal
I want, I want, I want, I want, I want
[Pre-Chorus: Megan Thee Stallion]
I want, I want, I want, I want, I want
I want, I want, I want, I want
I want, I want, I want, I want, I want (
Woah
)
[Chorus: Megan Thee Stallion & 
Cardi B
]
I'm a hottie, he a hottie
We like to party, we like to turn up
We like to travel, we like to jet set (
Yeah
)
I'm a hottie, he a hottie
We like to party, we like to turn up (
Woah
)
We like to travel, we like to jet set (
Woah
)
Hottie
, he a hottie
We like to party, we like to turn up
We like to travel, we like to jet set (
Yeah
)
Hottie
, he a hottie (
Woah
)
We like to party, we like to turn up (
Cardi
)
We like to travel, we like to jet set (
Woah
)
Hottie
, he a hottie (
Woah
)
We like to party, we like to turn up
We like to travel, we like to jet set (
Yeah
)
Hottie
, he a hottie (
Woah
)
We like to party, we like to turn up
We like to travel, we like to jet set (
Woah
)
Hottie
, he a hottie (
Woah
)
[Refrain: Cardi B & 
Megan Thee Stallion
]
Should I pick up a check or should I not? (Hey)
I'm a hottie and you're a hottie (Woah)
We like to party and we like to turn up (Cardi)
We like to travel and we like to jet set (Megan)
[Verse 2: Cardi B]
Now my new Chanel bag cost six thousand
My new Gucci shoes, they got the rubber band on 'em
You just a regular nigga, no, not Fendi rich
But you could be if you just understood the hustle
Ain't no way you could ever compare to me
I was born with money, you was born with your momma
But she still caught the bus just like all the rest
She still works at the office, she don't do no less
I pull up in the Jag, I see her lil' ass
She gives me a kiss, then she pulls out the VHS
She says, "Tyrone, you be slowing down, you gotta get it"
I'm like, "Ma, I'm a hustler, not a golfer"
Cardi, Cardi, Cardi, do your homework
If you was me, you'd be a billionaire by thirty
Your daddy's money, your mama's pretty
But she raised a smart one, that's me, that's me
Cardi, Cardi, Cardi, do your homework
If you was me, you'd be a billionaire by thirty [Pre-Chorus: Cardi B]
I'm a hottie, he a hottie
We like to party, we like to turn up
I'm a hottie, he a hottie
We like to party, we like to turn up
I'm a hottie, he a hottie (
Woah
)
We like to party, we like to turn up (
Woah
)
I like to travel, we like to jet set (
Woah
)
Hottie
, he a hottie (
Woah
)
We like to party, we like to turn up
We like to travel, we like to jet set (
Yeah
)
Hottie
, he a hottie (
Woah
)
We like to party, we like to turn up
We like to travel, we like to jet set (
Woah
)
Hottie
, he a hottie (
Woah
)
We like to party, we like to turn up (
Cardi
)
We like to travel, we like to jet set (
Woah
)
Hottie
, he a hottie (
Woah
)
We like to party, we like to turn up
We like to travel, we like to jet set (
Yeah
)
Hottie
, he a hottie (
Woah
)
We like to party, we like to turn up
We like to travel, we like to jet set (
Woah
)
Hottie
, he a hottie (
Woah
)
[Refrain: Cardi B & 
Megan Thee Stallion
]
Should I pick up a check or should I not? (Hey)
I'm a hottie and you're a hottie (Woah)
We like to party and we like to turn up (Cardi)
We like to travel and we like to jet set (Megan)
[Outro: Megan Thee Stallion & 
Cardi B
]
I'm a hottie, he a hottie (
Woah
)
We like to party, we like to turn up
We like to travel, we like to jet set
Hottie, he a hottie (
Woah
)
We like to party, we like to turn up
We like to travel, we like to jet set
Hottie, he a hottie (
Woah
)
We like to party, we like to turn up
We like to travel, we like to jet set
Hottie, he a hottie (
Woah
)
We like to party, we like to turn up`,id:9491312},{name:"Private Landing",artist:"Justin Bieber ",llama_response:`(Verse 1)
I'm livin' large, livin' fast, livin' life to the fullest
Got my name in lights, got my face on the wall
Fame and fortune, they come and they go
But I'm stuck in this life, like a fly in a gold mine

(Chorus)
I'm trapped in the high life, but I won't say no
To the thrill of the chase, the rush of the show
I'm living large, but it's not all it seems
The lavish lifestyle, it's just a dream

(Verse 2)
I got champagne on ice, got diamonds on my hand
Got a private jet, got a mansion on the sand
But the more I have, the more I want
The fame, the fortune, it's a never-ending chase

(Chorus)
I'm trapped in the high life, but I won't say no
To the thrill of the chase, the rush of the show
I'm living large, but it's not all it seems
The lavish lifestyle, it's just a dream

(Bridge)
I know I'm lucky, I know I'm blessed
But sometimes I feel like I'm in a mess
The pressures of fame, the pressures of love
It's hard to keep up, it's hard to rise above

(Verse 3)
I'm chasing the dream, I'm living the life
Got my heart on my sleeve, got my love in strife
We're dancing on the floor, we're feeling alive
But the more we have, the more we want to survive

(Chorus)
I'm trapped in the high life, but I won't say no
To the thrill of the chase, the rush of the show
I'm living large, but it's not all it seems
The lavish lifestyle, it's just a dream

(Outro)
So I'll keep on dancing, I'll keep on singing
I'll keep on living life to the fullest
The high life may be complex, but I'll never give up
I'm living large, and I won't stop.`,lyre_response:`[Intro]
Don't do me no good
Don't do it, yeah
Don't do me no good, no
Don't do it, nah
[Verse 1: Justin Bieber]
Don't do me no good, and I still would stay
Where you go, I follow, it's a madhouse, yeah
Don't wanna be a player, but I know how to play
I got a few other girls, they be all up in my face
Girl, let me put you on a jet, yeah
Let me take you to a place
Where you won't ever set a foot ain't no way, yeah
Could be forever, if you want it, yeah
But you gotta run a certain circle, yeah
You ain't normal, but I like that in a girl (In a girl)
You got a certain smell, it's called success (It's called success)
I'm a bad boy, but I'm really a good boy
I'm bored in the room, it's called excess (It's called excess)
[Chorus: Justin Bieber]
And I'm trapped in the high life
With too many choices
And I'm trapped in the high life
And I like it, yeah, I like it, yeah
'Cause I'm trapped in the high life
And I'm trapped in the high life
And I like it, yeah I like it, yeah
'Cause I'm trapped in the high life
[Verse 2: Ludacris]
Uh, what up, baby? 
You know who you are
If you're here, then you know I got a big heart (Woo)
And you can make it easier for me to give it to you, baby
If you just let me put it to you in a different way (Woo)
It's a special night, so I'm thinkin' it's time to get ignited (Woo)
I'm feelin' so good I'ma probably end up in heaven (Woo)
When I leave, make sure you remember me in your dreams (Woo)
And I promise when I'm gone, you'll still be in my thoughts (Woo)
Got a lot of money, power, and fame
Lot of pressure, stress, and pain (Yeah)
Lot of women, but I'm a flirt (Uh)
It's a lot of things, but I just can't quit (Woo)
[Bridge: Justin Bieber & 
Ludacris
]
Don't do me no good, and I still would stay (
Don't do it, yeah
)
Where you go, I follow, it's a madhouse, yeah (
Don't do me no good, no
)
I don't wanna be a player, but I know how to play
I got a few other girls, they be all up in my face
(
But you're the one that's got me trapped, baby, now you know
)
Girl, let me put you on a jet, yeah
Let me take you to a place
Where you won't ever set a foot ain't no way, yeah (
Oh
)
Could be forever, if you want it, yeah (
Oh
)
But you gotta run a certain circle, yeah
You ain't normal, but I like that in a girl (
Oh
)
You got a certain smell, it's called success (
Oh
)
I'm a bad boy, but I'm really a good boy (
Oh
)
I'm bored in the room, it's called excess (
Oh
)
[Chorus: Justin Bieber & 
Ludacris
]
And I'm trapped in the high life (
And I'm trapped, and I'm trapped, and I'm trapped in the high life
)
With too many choices (
Oh
)
And I'm trapped in the high life (
And I'm trapped, and I'm trapped, and I'm trapped in the high life
)
And I like it, yeah I like it, yeah (
Don't do me no good
Don't do it, yeah
)
'Cause I'm trapped in the high life (
And I'm trapped, and I'm trapped, and I'm trapped in the high life
)
And I like it, yeah I like it, yeah (
Don't do me no good
Don't do it, nah
)
'Cause I'm trapped in the high life (
And I'm trapped, and I'm trapped, and I'm trapped in the high life
)
[Verse 3: Sevyn Streeter]
Uh, Girl, I see you, and I gotta say
You got a lot of nerve, leading me on like that
Uh, when you know that I'm aware, that you got a man, it's cold
But I'm still here, so what that tell you, baby?
What that tell you, baby?
It tell you that I'm a fool, and I'll never learn
But what they say is true, love is a burn
But I'll never ever, ever, ever leave (Uh)
So baby, you got the best of me (Uh)
Girl, you got the best of me (Uh)
So baby, won't you please (Uh)
Won't you please just love me? (Uh)
Won't you please just love me? (Uh)
[Chorus: Justin Bieber]
And I'm trapped in the high life
With too many choices
And I'm trapped in the high life
And I like it, yeah I like it, yeah
'Cause I'm trapped in the high life
And I'm trapped in the high life
And I like it, yeah I like it, yeah
'Cause I'm trapped in the high life
[Verse 4: Chris Brown]
I'm trapped in the high life
And I like it, yeah
I'm trapped in the high life
And I like it, yeah
I'm trapped in the high life
With too many choices
And I'm trapped in the high life
And I like it, yeah I like it, yeah
Girl, you got me
I'm stuck on you, girl
You got a nerve, but I like it, yeah
'Cause I'm trapped in the high life
And I'm trapped in the high life
And I like it, yeah I like it, yeah
'Cause I'm trapped in the high life`,id:8846302},{name:"Evil Ways",artist:"Drake",llama_response:`Verse 1:
I was just a youngin' tryna make a name
But life had other plans, it was all a game
I was chasin' fame, tryna get my shine
But it came with prices, I had to redefine
What success mean to me, what I'm willin' to design
Got my eyes on the prize, but I ain't never gonna find
Peace in the fame, if I ain't bein' true to myself
Gotta grow, gotta learn, gotta evolve, gotta heal

Chorus:
I'm growin' up, I'm growin' old
Fame is a game, but I'm tellin' my story
Got my ups and downs, got my highs and lows
But I'm still standin', ain't no stoppin' me now

Verse 2:
I was a young lion, roarin' in the night
But now I'm a wise old dog, tryna make things right
I had to learn the hard way, had to lose it all
But now I'm back, standin' tall, and I won't fall
I been through the fire, I been through the rain
But I'm still here, ain't nothin' gonna change
My rhymes is like a sword, they cut deep and true
Got my loyal fans, they see the real me, boo

Chorus:
I'm growin' up, I'm growin' old
Fame is a game, but I'm tellin' my story
Got my ups and downs, got my highs and lows
But I'm still standin', ain't no stoppin' me now

Verse 3:
I used to be a stranger, tryna find my way
But now I'm a leader, tryna pave the way
I had to overcome, had to break the chains
But now I'm free, ain't nothin' gonna remain
I'm a product of my past, but I ain't the same
Got my eyes on the future, ain't no time to aim
I'm growin' up, I'm growin' old
But my rhymes is forever, they'll never be cold

Chorus:
I'm growin' up, I'm growin' old
Fame is a game, but I'm tellin' my story
Got my ups and downs, got my highs and lows
But I'm still standin', ain't no stoppin' me now

Outro:
I'm a different man, I'm a different artist
But my rhymes is still hot, it's still a work of art
I'm growin' up, I'm growin' old
But my legacy will never grow cold.

This song is a reflection of Drake's signature sound, blending rap with elements of R&B, while incorporating sharp introspection and vivid street narratives. The lyrics intertwine themes of success and struggle, with a reflective tone that shows maturity and the acknowledgement of past "evil ways." The song has a modern hip-hop beat, with a flow that allows for both rapid-fire verses and smoother, melodic sections, capturing Drake's signature sound. The chorus is catchy and memorable, with a repetitive phrase that emphasizes the growth and evolution of the artist over time. The song's narrative is introspective and personal, with a focus on the journey from hardship to prosperity, and the lessons learned along the way.`,lyre_response:`[Intro]
Yeah, it's Drake
You just turned 30, you a grown ass man
You got a son, you a grown ass man
You know you better stop this back and forth
You know you better grow up fast
You know you better stop this back and forth
You know you better grow up 'fore it's too late, yeah
[Verse 1]
Everybody grow up, they just do it at their own pace
Some get lost in the darkness, some find it on the way
I was in and out of trouble, lost and found God
I came in and out of my mama's house
Died and came to life again on the daily
I remember just how far it was to the top
And how many people said I'd never make it
They were right, I wouldn't be here if it wasn't for him
My father, who art in heaven, I'm tryna make it without him
These memories are all that I have left of him
I hope the heavens have a plan for me and my son
I hope the heavens have a plan for me and my son
[Verse 2]
My son, don't believe everything that you hear
And only believe half of what you see
Show him the world and educate him, but don't spoil him
Boy, you gonna go through some stuff, you better be strong
I know you don't know me, boy, but I'm your producer
And I'll be listening to all of your songs
I'll be in the audience every time that you perform
And I'll be the one out of all of these people who know you the most
And I'll be the first to tell you when you're wrong or when you're right
And you can ask me any question, I'll do my best to provide
Any information that a 10-year-old could need
But don't think for a second that I'll be easy on you
Boy, I won't be, 'cause I don't believe in living vicariously
Through my children, so you better be true to yourself
And don't look to me for financial support
You got a lot to learn, but you're off to a good start
Your momma loves you, I love you, but she could never love you like I will
And I don't want you to ever remember me as a deadbeat dad
So I'll be in the gallery when you play at the garden
And I'll be the one who takes your call when you ever feel unsafe
And I'll be the one to make you walk away from the fame
And I'll be the one to make you walk back to your car
And I'll be the one who wipes your tears
So you don't ever have to worry, I'll always be your father [Interlude]
Your life is yours to live, but don't fuck with mine
Don't fuck with mine, don't fuck with mine
Don't fuck with mine
[Verse 3]
Never thought that I'd be the type to say these things
Never thought that I'd be the type to change
Like a former villain, now I'm the hero with the verse
It's funny how life goes around in circles
So I'll say the things that I needed to hear as a youngster
Never get involved in Involuntary manslaughter
Never leave a nigga for dead, that could be you later
Always keep your wits about you, never take a day for granted
Never be afraid to apologize and make amends
It's better to eat your pride than to eat your tears
Love yourself and you'll never have to fear
Love yourself and you'll never have to fear
Love yourself and you'll never have to fear
Love yourself and you'll never have to fear [Interlude: Wayne McGlory]
You just turned 30, you a grown ass man
You got a son, you a grown ass man
You know you better stop this back and forth
You know you better grow up fast
You know you better stop this back and forth
You know you better grow up 'fore it's too late, yeah
[Verse 4]
I've come to realize that the greatest wealth is the wealth of the mind
The greatest riches is the riches that's within
The greatest treasure is the treasure that you can find
The greatest pearls are the pearls that you can dive for
The greatest magic is the magic that you provide
The greatest miracles are the miracles that you survive
The greatest heroes are the heroes that you see at night
The greatest dreams are the dreams that you can make come true
The greatest love is the love that you can give and receive
The greatest gift is the gift that you can give to yourself
The greatest glory is the glory that you can earn for yourself
The greatest honor is the honor that you can give to yourself
The greatest pride is the pride that you can take in yourself
The greatest treasure is the treasure that you can find
The greatest pearls are the pearls that you can dive for
The greatest magic is the magic that you provide
The greatest miracles are the miracles that you survive
The greatest heroes are the heroes that you see at night
The greatest dreams are the dreams that you can make come true
The greatest love is the love that you can give and receive
The greatest gift is the gift that you can give to yourself
The greatest glory is the glory that you can earn for yourself
The greatest honor is the honor that you can give to yourself
The greatest pride is the pride that you can take in yourself [Outro]
Yeah, it's Drake
You just turned 30, you a grown ass man
You got a son, you a grown ass man
You know you better stop this back and forth
You know you better grow up fast
You know you better stop this back and forth
You know you better grow up 'fore it's too late, yeah`,id:9743590},{name:"Shakira: Bzrp Music Sessions, Vol. 53",artist:"Shakira",llama_response:`(Verse 1)
I used to be the one who held on tight
But now I'm the one who's moving on tonight
I outgrew the love that didn't stand the test
Now I'm finding my worth, and I won't be undressed

I'm not the same girl you used to know
I've grown into my own, and I'm in the flow
I'm worth more than the tears you shed for me
I'm worth more than the lies you fed to see

(Chorus)
I'm a queen, I'm a boss, I'm on the rise
I'm independent, and I won't be surprised
I'm worth more than the love you gave me
I'm worth more than the lies you made me see

(Verse 2)
I used to be the one who played by the rules
But now I'm breaking free, and I'm taking my shoes
I'm not the same girl you used to see
I'm a woman, and I'm destined to be

I'm worth more than the secrets you kept inside
I'm worth more than the love you didn't provide
I'm worth more than the lies you fed to me
I'm worth more than the love you didn't be

(Chorus)
I'm a queen, I'm a boss, I'm on the rise
I'm independent, and I won't be surprised
I'm worth more than the love you gave me
I'm worth more than the lies you made me see

(Bridge)
I'm not the girl you thought I'd be
I'm not the girl you wanted me to be
I'm the girl I'm meant to be
I'm the girl I'm meant to see

(Chorus)
I'm a queen, I'm a boss, I'm on the rise
I'm independent, and I won't be surprised
I'm worth more than the love you gave me
I'm worth more than the lies you made me see

(Outro)
I'm moving on, I'm moving up
I'm finding my worth, and I won't stop
I'm a strong, independent woman
And I won't be held back by your lies and your lies.

In this song, I have incorporated themes of empowerment, self-worth, and financial independence, which are all central to Shakira's music. The lyrics are written in a way that conveys a strong, confident persona who has moved on from a disappointing relationship and is now thriving. The metaphors and wordplay used throughout the song are meant to express the contrast between what was lost and what has been gained, and the catchy chorus highlights the resilience and independence of the protagonist. The song has a Latin pop feel with an urban twist, reflecting Shakira's signature sound and rhythmic vocal delivery.`,lyre_response:`[Letra de "Shakira: Bzrp Music Sessions, Vol. 53"]
[Intro: Bizarrap]
(Yeah, yeah)
(Ah-ah)
[Verso 1: Bizarrap & 
Shakira
]
El peso de tu mirada, ya no es lo mismo
Tu cuerpo, no me da miedo ya, como antes
Me parece agua lo que antes me trapaba
Y ahora me basta con una rayita
Yo no me arrepiento del pasado
No eseso lo que está sucediendo
No eseso lo que está sucediendo, no
(Si no querías entender)
(No es algo que pasó solo)
[Refrán: Bizarrap & 
Shakira
]
Un gran amor no muere
(No, no, no, no, no)
Y yo no lloro por el mío
(Si no querías entender)
(No es algo que pasó solo) [Puente: Bizarrap & 
Shakira
]
El dinero no es todo, 
hay más alla
De lo que a ti te guste, 
hay más alla
De lo que a ti te guste, sí
(Si no querías entender)
(No es algo que pasó solo)
[Coro: Shakira]
Y ahora que lo tenemos claro
Ya no te lloraré
Ya no me arrepentiré
Ya no me enfermaré
(Si no querías entender)
(No es algo que pasó solo)
Y ahora que lo tenemos claro
Ya no te lloraré
Ya no me arrepentiré
Ya no me enfermaré (Ah-ah) [Verso 2: Bizarrap & 
Shakira
]
Me vale un ruido, un besito
Me vale un descuido, un abrazo
Es que ya no quiero verte
Ni oírte más, ni siquiera escuchar
Te metiste en mi vida
Y ahora te pasas como un crack addicto
Yo me fui para ponerme bien
Ya no más late, no vuelva más
[Refrán: Bizarrap & 
Shakira
]
Un gran amor no muere
(No, no, no, no, no)
Y yo no lloro por el mío
(Si no querías entender)
(No es algo que pasó solo) [Puente: Bizarrap & 
Shakira
]
El dinero no es todo, 
hay más alla
De lo que a ti te guste, 
hay más alla
De lo que a ti te guste, sí
(Si no querías entender)
(No es algo que pasó solo)
[Coro: Shakira]
Y ahora que lo tenemos claro
Ya no te lloraré
Ya no me arrepentiré
Ya no me enfermaré
(Si no querías entender)
(No es algo que pasó solo)
Y ahora que lo tenemos claro
Ya no te lloraré
Ya no me arrepentiré
Ya no me enfermaré (Ah-ah)
[Post-Coro: Bizarrap & 
Shakira
]
(Si no querías entender)
(No es algo que pasó solo)
(Si no querías entender)
(No es algo que pasó solo)
(Si no querías entender)
(No es algo que pasó solo)
(Si no querías entender)
(No es algo que pasó solo)`,id:8714746},{name:"We Found Love",artist:"Rihanna",llama_response:`Verse 1:
I was lost in the dark, couldn't find my way
Feeling like I'm drowning, in a sea of dismay
But then I saw you, and my heart took flight
You shone so bright, like a beacon in the night

Chorus:
Love in the darkness, it's where I found you
In the depths of my despair, you broke through
You showed me hope, when I thought it was gone
Love in the darkness, it's where I've been

Verse 2:
I was running from the pain, trying to escape
But you caught me, and you wouldn't let me break
You held me close, and you showed me your heart
You said I'm not alone, we'll never be apart

Chorus:
Love in the darkness, it's where I found you
In the depths of my despair, you broke through
You showed me hope, when I thought it was gone
Love in the darkness, it's where I've been

Bridge:
We dance in the rain, under the city lights
Our love shining bright, like a beacon in flight
We found each other, in the midst of the night
And now we're here, together, feeling alright

Chorus:
Love in the darkness, it's where I found you
In the depths of my despair, you broke through
You showed me hope, when I thought it was gone
Love in the darkness, it's where I've been

Instrumental Drop:
The music drops into an intense, pulsing electro house beat, with soaring synths and a driving bassline. The rhythm is infectious and energetic, building up to a powerful drop that captures the emotional intensity of the lyrics.

Outro:
I'm standing here, with you by my side
Our love shining bright, like a beacon in the tide
We found each other, in the darkest night
And now we're here, together, feeling alright

The song ends on a triumphant note, with the repeated chorus emphasizing the theme of finding love in unexpected, hopeless places. The music and lyrics work together to create a powerful and uplifting anthem that captures the transformative power of love in the face of adversity.`,lyre_response:`[Intro]
Drop
Drop
Drop
Drop
[Verse 1]
I was lost in the dark, had given up on love
Thought that all hope was lost, that I'd never ever feel it
But then you found me, in this place so cold
You took my heart and turned it to dust
It was dark, and I was encased in a mold
But then you found me, in this place so cold
[Pre-Chorus]
How could I ever forget this?
This, the night that I found love
In the deep, in the dark, where there's no way out
This, the night that I found love
[Chorus]
Found love in a hopeless place
Found love in a hopeless place
Found love in a hopeless place
Found love in a hopeless place
[Verse 2]
You'll never guess what I found, found, found
Love in a hopeless place, hopeless place
Love in a hopeless place, hopeless place
Found love in a hopeless place
[Pre-Chorus]
How could I ever forget this?
This, the night that I found love
In the deep, in the dark, where there's no way out
This, the night that I found love
[Chorus]
Found love in a hopeless place
Found love in a hopeless place
Found love in a hopeless place
Found love in a hopeless place
[Instrumental Drop] [Chorus]
Found love in a hopeless place
Found love in a hopeless place
Found love in a hopeless place
Found love in a hopeless place`,id:56642},{name:"Castles Crumbling (Taylor’s Version) [From The Vault]",artist:"Taylor Swift",llama_response:`Verse 1:
I was the queen of this empire, oh so tall and so grand
My crown shone bright, my people adored me, hand in hand
But now the walls are crumbling, the castle's in ruins
And I'm left standing here, with nothing but my regrets and my sins

Chorus:
Oh, the fall from grace, it's a hard pill to swallow
My glory days are gone, my bridges are burning
I once held the world in the palm of my hand
But now I'm just a shadow of what I used to be

Verse 2:
I remember the cheers, the accolades, the fame
But now the only sound is the echoes of my shame
My relationships are tattered, my reputation in shreds
And I'm left to face the truth, that I've lost all my leads

Chorus:
Oh, the fall from grace, it's a hard pill to swallow
My glory days are gone, my bridges are burning
I once held the world in the palm of my hand
But now I'm just a shadow of what I used to be

Verse 3:
I see the looks of disdain, the whispers in the air
The judgments of those who once revered me, without a care
I know I've let them down, I've lost their trust
And now I'm left to face the consequences, of my own rust

Chorus:
Oh, the fall from grace, it's a hard pill to swallow
My glory days are gone, my bridges are burning
I once held the world in the palm of my hand
But now I'm just a shadow of what I used to be

Bridge:
I remember the heights, the adoration, the fame
But now I'm just a ghost of my former self, with nothing but my name
I've lost the love, the respect, the power and the grace
And now I'm left to face the truth, in this lonely place

Chorus:
Oh, the fall from grace, it's a hard pill to swallow
My glory days are gone, my bridges are burning
I once held the world in the palm of my hand
But now I'm just a shadow of what I used to be

Outro:
I once held the world in the palm of my hand
But now I'm just a shadow of what I used to be
The fall from grace, it's a hard pill to swallow
My glory days are gone, my bridges are burning.

This song captures the essence of a fallen empire, reflecting on past glory and the pain of lost grandeur. The lyrics convey a narrative of a protagonist who once held immense power and admiration but is now facing their downfall, with their achievements and relationships in ruins. The chorus emphasizes the crumbling of their metaphorical castle and the burning of bridges, highlighting the protagonist's isolation and regret.

The song incorporates the emotional depth and storytelling akin to Taylor Swift's music, with a collaboration verse similar to Hayley Williams's style, to highlight the contrast between past and present. The use of imagery and symbolism, such as the "castle" and "bridges," adds depth to the narrative, while the repetition of the chorus creates a sense of musical unity and emphasizes the protagonist's downfall.

Overall, the song resonates with themes of regret, isolation, and the harsh judgment from those who once revered the protagonist, creating a powerful and emotional narrative that captures the essence of a fallen empire.`,lyre_response:`[Intro]
Once the tallest tower
In the whole dang town
Had the highest score
In all of Yorkshire
And I'm pretty sure
Every single person
In that whole entire town
Would stop and turn
Their head when
They'd see me pass
Now I'm just a rubble
Of what I used to be
And this castle
It's nothing but
Ruins now
[Verse 1: Taylor Swift]
I used to be the girl with the most beautiful hair
With the prettiest dresses and the boy of my dreams
Everyone loved me
I was living my dreams
I used to be the girl with the most beautiful hair
And the prettiest dresses and the boy of my dreams
Everyone loved me
I was living my dreams
Until one day
It all came crashing down
[Verse 2: Hayley Williams]
Once I had a master
Now I'm nothing but a mess
And you can take my crown
It won't make a dent
In who I am or what I was
And you can take my crown
It won't make a dent
In who I am or what I was (
Was
)
[Chorus: Hayley Williams]
My castle's on the ground
And it's burning down
Bridges burn, behind us
Now we have nothing but
The ashes of our past lives
And my castle's on the ground
And it's burning down
Bridges burn, behind us
Now we have nothing but
The ashes of our past lives [Verse 3: Both, 
Taylor Swift
, 
Hayley Williams
]
I used to be the girl with the most beautiful hair
With the prettiest dresses and the boy of my dreams
Everyone loved me
I was living my dreams
Until one day
It all came crashing down 
(
Crashing down, oh, oh
)
And now I'm living in a burned-down town
Where everyone I know
Is someone I don't know
And I'm left to wander
Alone and confused
And that's how you'll find me
In my burned-down town
(
Burned-down town, burned-down town
) [Chorus: Hayley Williams]
My castle's on the ground
And it's burning down
Bridges burn, behind us
Now we have nothing but
The ashes of our past lives
And my castle's on the ground
And it's burning down
Bridges burn, behind us
Now we have nothing but
The ashes of our past lives`,id:4499925},{name:"Sucia (Talibán Original)",artist:"Lil Pump",llama_response:`(Verse 1)
I'm in the streets, ain't no one touchin' me
Got my money makin' money, that's just how it be
Flaunting my wealth, ain't no one gonna stop me
Got my diamonds shinin', got my whip poppin'

(Chorus)
Uh, I'm livin' life raw, ain't no one gonna tell me how
Got my own way, ain't no one gonna know
I'm the king of the streets, ain't no one gonna take my throne
I'm the one they all know, ain't no one gonna leave me alone

(Verse 2)
I don't give a damn 'bout no haters, they just get ignored
Got my own lifestyle, ain't no one gonna explode
I'm livin' life to the fullest, ain't no one gonna slow me down
Got my own vibe, ain't no one gonna drown me out

(Chorus)
Uh, I'm livin' life raw, ain't no one gonna tell me how
Got my own way, ain't no one gonna know
I'm the king of the streets, ain't no one gonna take my throne
I'm the one they all know, ain't no one gonna leave me alone

(Bridge)
Prr, I'm feelin' like a star, ain't no one gonna dim my shine
Got my own flow, ain't no one gonna make me decline
I'm on top of the world, ain't no one gonna bring me down
Jajaja, I'm the king of the town

(Chorus)
Uh, I'm livin' life raw, ain't no one gonna tell me how
Got my own way, ain't no one gonna know
I'm the king of the streets, ain't no one gonna take my throne
I'm the one they all know, ain't no one gonna leave me alone

(Outro)
So if you see me comin', better get out the way
'Cause I'm the king of the streets, and I'm here to stay
Got my own style, ain't no one gonna take my crown
Uh, I'm the one they all know, and I'm here to drown.

This song is written in the style of Lil Pump, with a focus on energetic trap beats and braggadocious lyrics that center around themes of street lifestyle, wealth, and a carefree attitude towards life. The lyrics incorporate repetitive, catchy hooks and ad-libs characteristic of Lil Pump's work, such as "uh," "prr," and "jajaja," to maintain his signature sound. The song also includes playful and provocative language, emphasizing a preference for "dirty" or raw behavior. Overall, the song encapsulates the irreverent humor and energetic sound that has made Lil Pump a standout in the hip-hop scene.`,lyre_response:`[Intro]
(
Lil Pump
)
Oh, yeah
Oh, yeah
Oh, yeah
Oh, yeah
Oh, yeah
Oh, yeah
(
Premiere Classe
)
[Bridge]
Yeah, lil' bitch, I'm sittin' on 40
Could fuck my girlfriend's sister, if I wanted to (If I wanted to)
Don't talk dirty to me, talk dirty to my monster (Talk dirty)
Swallow, whore, I don't want your condom (Prr)
[Chorus]
She wanna go raw, that's why I fuck her so clean (Clean, why?)
I don't want your condom, I just wanna have fun (Have fun, have fun)
Yeah, bitch, I'm tryna fuck, you got the D, we can have fun (Fuck, D, hey)
I don't want your condom, I just wanna have fun
[Post-Chorus]
Bet you wanna fuck me, bet you wanna fuck me raw (Raw, bet you do, hey)
I'ma make you suck my dick, you know that's just how I was made (Suck, dick, hey)
I'ma make you love me, babe, now you know that I was born to be your baby (Love me, baby, hey)
[Verse]
Ayy, lil' bitch, I walk in star class (Hey)
Ask me, do I look like I play games? (No way)
Went to McDonald's, the Arches (Hey)
Got me, OGs, the old heads (Ayy)
Yeah, I got a big tool (Ooh, yeah)
And I know how to use it, school it (Yeah, yeah)
Nigga's mad because I'm move it (Huh? Why?)
I got drip, can't be soaked in (No way)
Nigga pull up in a Maxima (Hey)
Want to fuck my girl's sister (Huh?)
I don't want your condom, I just wanna have fun (Have fun, hey)
Bet you wanna fuck me, bet you wanna fuck me raw (Raw, bet you do, hey)
I'ma make you suck my dick, you know that's just how I was made (Suck, dick, hey)
I'ma make you love me, babe, now you know that I was born to be your baby (Love me, baby, hey)
[Chorus]
She wanna go raw, that's why I fuck her so clean (Clean, why?)
I don't want your condom, I just wanna have fun (Have fun, have fun)
Yeah, bitch, I'm tryna fuck, you got the D, we can have fun (Fuck, D, hey)
I don't want your condom, I just wanna have fun
[Post-Chorus]
Bet you wanna fuck me, bet you wanna fuck me raw (Raw, bet you do, hey)
I'ma make you suck my dick, you know that's just how I was made (Suck, dick, hey)
I'ma make you love me, babe, now you know that I was born to be your baby (Love me, baby, hey)
[Outro]
I'ma make you love me, babe, now you know that I was born to be your baby (Love me, baby)
I'ma make you love me, babe, now you know that I was born to be your baby (Love me, baby)
I'ma make you love me, babe, now you know that I was born to be your baby (Love me, baby)
I'ma make you love me, babe, now you know that I was born to be your baby (Love me, baby)`,id:5328101},{name:"​​favorite kind of high",artist:"Kelly Clarkson",llama_response:`Verse 1:
I try to fight it, I try to resist
But you're like a drug, and I'm addicted
The way you make me feel, it's like a fire
Burning inside of me, it's a dangerous desire

Chorus:
You're my favorite kind of high
The one that makes me feel alive
I'm helplessly drawn to your eyes
Like a moth to a flame, I can't deny

Verse 2:
I know I should push you away
But I can't help myself, I'm drawn in every day
You're the one I want, the one I need
The one that makes my heart sing, it's all I need

Chorus:
You're my favorite kind of high
The one that makes me feel alive
I'm helplessly drawn to your eyes
Like a moth to a flame, I can't deny

Bridge:
I know I'll fall, I know I'll give in
But I can't help myself, I'm already in
You're the one that makes my heart race
The one that makes me lose my place

Chorus:
You're my favorite kind of high
The one that makes me feel alive
I'm helplessly drawn to your eyes
Like a moth to a flame, I can't deny

Outro:
You're my favorite kind of high
The one that makes me feel alive
I'm helplessly drawn to your eyes
Like a moth to a flame, I can't deny

This song is written in the style of Kelly Clarkson, with a blend of bold pop-rock elements and an anthem-like chorus. The lyrics convey the message of being helplessly drawn to someone who feels like a powerful addiction, struggling between resistance and surrender in the face of a passionate love. The vivid imagery and dynamic melodies are characteristic of Clarkson's empowering musical style, capturing the electrifying thrill of an irresistible attraction.`,lyre_response:`[Intro]
Don't need no other
When I've got you, you're all I need
You're all I, I need, need
[Verse 1]
Don't try to understand it
'Cause I really don't think you can
This is science, not love
This is crazy, just let it happen
Let it happen
[Pre-Chorus]
And I feel weaker, the more I resist
Feel myself giving in, finally
Feel myself surrender
[Chorus]
You're like my favorite kind of high
I'm like a junkie for your love
You're all I need, you're all I need
And I could try to fight it
But I'd rather surrender
You're like my favorite kind of high
I'm like a junkie for your love
You're all I need, you're all I need [Verse 2]
Don't try to understand it
'Cause I really don't think you can
This is science, not love
Just let it happen
[Pre-Chorus]
And I feel weaker, the more I resist
Feel myself giving in, finally
Feel myself surrender
[Chorus]
You're like my favorite kind of high
I'm like a junkie for your love
You're all I need, you're all I need
And I could try to fight it
But I'd rather surrender
You're like my favorite kind of high
I'm like a junkie for your love
You're all I need, you're all I need
All I need, you're all I need
You're all I need
You're all I need
You're all I need
You're all I need
[Bridge]
No other
When I've got you, you're all I need
You're all I, I need, need
No other
When I've got you, you're all I need
You're all I, I need, need
[Chorus]
You're like my favorite kind of high
I'm like a junkie for your love
You're all I need, you're all I need
And I could try to fight it
But I'd rather surrender
You're like my favorite kind of high
I'm like a junkie for your love
You're all I need, you're all I need`,id:9017322},{name:"On My Love",artist:"David Guetta",llama_response:`(Verse 1)
I'm falling deep into your eyes, like a shipwreck in the tide
I'm lost in the depths of your love, where I'll gladly reside
Every moment with you is a dream, a love that's hard to define
But I know in this dance, we'll find the rhythm of our hearts entwined

(Chorus)
I'll stand by you, through every storm, through every wave
Together we'll ride, the highs and lows, and never be afraid
Of the love we share, and the fire that we ignite
In this dance of life, I'll be by your side, with all my might

(Verse 2)
You're the melody that fills my heart, the rhythm that sets my soul on fire
I'm ready to face any challenge, to keep this love on higher
We'll weather every storm, and rise above the pain
Together we'll dance, until our love remains

(Chorus)
I'll stand by you, through every storm, through every wave
Together we'll ride, the highs and lows, and never be afraid
Of the love we share, and the fire that we ignite
In this dance of life, I'll be by your side, with all my might

(Bridge)
We'll make our own way, we'll break the mold
We'll write our own story, and watch it unfold
With every step we take, we'll find our way
Together we'll dance, through every moment of every day

(Chorus)
I'll stand by you, through every storm, through every wave
Together we'll ride, the highs and lows, and never be afraid
Of the love we share, and the fire that we ignite
In this dance of life, I'll be by your side, with all my might

(Drop)
We're in this together, we're one and the same
Our love is the beat, that keeps the rhythm alive
We'll keep on dancing, through the good and the bad
In this dance of life, we'll never be sad

(Outro)
In this dance of life, we'll find our way
With every step we take, we'll find our day
With every beat we make, we'll find our way
In this dance of life, we'll dance forevermore.

This song captures the essence of an intense emotional commitment, with lyrics that express a deep connection and readiness to face any challenge for the sake of love. The repetitive yet catchy hooks and build-ups lead to an electrifying chorus, reflecting both vulnerability and determination within its melody and rhythm. The song is written in the style of David Guetta, with a dynamic drop characteristic of his dance-electronic genre, and is sure to get listeners on their feet and dancing.`,lyre_response:`[Intro]
Are you willing to fight for us?
Are you willing to fly for us?
Are you willing to break for us?
Yeah
[Verse 1]
Are you willing to lose for us?
Are you willing to cry for us?
Are you willing to lie for us?
Yeah
Are you willing to die for us?
Oh, if that's what it takes, yeah
Are you willing to die for us? Yeah
[Pre-Chorus]
Just don't ask me to go without a fight
I swear that I'll give you all I got, yeah
[Chorus]
I'm willing to fall for you
I'm willing to burn for you
I'm willing to bleed for you
I'm willing to die for you
Oh, just don't ask me to say goodbye
I swear that I'll give you all I got
[Verse 2]
Are you willing to heal my past?
Are you willing to take my pain?
Are you willing to last?
Yeah
Are you willing to bleed for us?
Oh, if that's what it takes, yeah
Are you willing to bleed for us? Yeah [Pre-Chorus]
Just don't ask me to go without a fight
I swear that I'll give you all I got, yeah
[Chorus]
I'm willing to fall for you
I'm willing to burn for you
I'm willing to bleed for you
I'm willing to die for you
Oh, just don't ask me to say goodbye
I swear that I'll give you all I got
[Drop]
[Bridge]
Are you willing?
Are you willing?
Are you willing?
Are you willing?
[Pre-Chorus]
Just don't ask me to go without a fight
I swear that I'll give you all I got, yeah
[Chorus]
I'm willing to fall for you
I'm willing to burn for you
I'm willing to bleed for you
I'm willing to die for you
Oh, just don't ask me to say goodbye
I swear that I'll give you all I got
[Chorus]
I'm willing to fall for you
I'm willing to burn for you
I'm willing to bleed for you
I'm willing to die for you
Oh, just don't ask me to say goodbye
I swear that I'll give you all I got`,id:9481808},{name:"7969 Santa",artist:"Drake",llama_response:`Verse 1:
I thought I had you figured out, but you keep on changing
Like a chameleon, always adapting, never staying the same
You used to be so sweet, now you're cold and distant
I can't help but wonder, did I drive you insane?

Chorus:
Disappointment, it's all I feel
Like you're always breaking my heart and stealing
My trust, my love, my everything
I can't keep on living like this, it's time to move on

Verse 2:
You used to be so reliable, now you're unpredictable
I can't keep up with your mood swings, it's like a rollercoaster
You dye your hair, get new tattoos, it's like you're hiding
But from what, from me? I don't know, I'm still trying

Chorus:
Disappointment, it's all I feel
Like you're always breaking my heart and stealing
My trust, my love, my everything
I can't keep on living like this, it's time to move on

Bridge:
I catch myself thinking 'bout the good times
When life was simple, when love was on my mind
But now it's all just a distant memory
As I try to move on, but you're still on my mind

Chorus:
Disappointment, it's all I feel
Like you're always breaking my heart and stealing
My trust, my love, my everything
I can't keep on living like this, it's time to move on

Outro:
I'm tired of feeling this way, tired of being hurt
I need to find a way to let go, to move forward
But it's hard when the person I care about
Is the one who's causing all this doubt.

This song is written in the style of Drake, with a conversational tone and a sharp, rhythmic delivery. The lyrics reflect introspection and a sense of personal conflict, with specific examples of changes in appearance or behavior that the narrator doesn't approve of. The catchy refrain emphasizes the disappointments and the desire to move past them. The song also incorporates an element of self-reflection, where the protagonist ponders over the age-related excuses for behavior and the desire to move past the preoccupation with the person in question.`,lyre_response:`[Refrain]
She used to be so mad at me
Used to be so mad, yeah, yeah
And now she's mad at me
But that's not the only thing that's different
Now she's got a new hobby
New hobby, yeah, yeah, yeah
And she's putting all her time into it
What is this, 40 for her?
Shit, I'm just kidding, that's not true
I'm sure she's still beauty
Even at 50, she's still beauty
I just don't want her to get suspicious
I'm sure she'll understand later
[Verse 1]
She used to be so mad at me
Used to be so mad, yeah, yeah
And now she's mad at me
But that's not the only thing that's different
She used to be so down to earth
Down to earth, yeah, yeah
And now she's out of this world
Or at least that's what it feels like, yeah
She used to be so full of life
Full of life, yeah, yeah
And now she's full of shit
Talkin' 'bout she's 50 but she doesn't act like it
[Refrain]
She used to be so mad at me
Used to be so mad, yeah, yeah
And now she's mad at me
But that's not the only thing that's different
Now she's got a new hobby
New hobby, yeah, yeah, yeah
And she's putting all her time into it
What is this, 40 for her?
Shit, I'm just kidding, that's not true
I'm sure she's still beauty
Even at 50, she's still beauty
I just don't want her to get suspicious
I'm sure she'll understand later
[Verse 2]
I used to be so in love with her
In love, yeah, yeah
But that was before she, before she changed
Used to be so proud of her
Proud, yeah, yeah
And now I'm just ashamed of her
Never used to leave her
Used to be so down to ride with her
Now I'm just too tired to stay with her
[Refrain]
She used to be so mad at me
Used to be so mad, yeah, yeah
And now she's mad at me
But that's not the only thing that's different
Now she's got a new hobby
New hobby, yeah, yeah, yeah
And she's putting all her time into it
What is this, 40 for her?
Shit, I'm just kidding, that's not true
I'm sure she's still beauty
Even at 50, she's still beauty
I just don't want her to get suspicious
I'm sure she'll understand later [Bridge]
She used to be so mad at me
Used to be so mad, yeah, yeah
And now she's mad at me
But that's not the only thing that's different
[Refrain]
She used to be so mad at me
Used to be so mad, yeah, yeah
And now she's mad at me
But that's not the only thing that's different
Now she's got a new hobby
New hobby, yeah, yeah, yeah
And she's putting all her time into it
What is this, 40 for her?
Shit, I'm just kidding, that's not true
I'm sure she's still beauty
Even at 50, she's still beauty
I just don't want her to get suspicious
I'm sure she'll understand later`,id:9592360},{name:"How Does It Feel",artist:"Chris Brown",llama_response:`(Verse 1 - Male Perspective)
I thought I found my forever in your eyes
Gave you my heart, my soul, my everything inside
But now I'm left wondering why I gave so much
Cause you don't see the value of the love that I've been clutching

You take, take, take, but never give back
I'm giving more, but you're not even on the attack
I thought you loved me, but now I'm in disbelief
Cause the more I give, the less you seem to receive

(Chorus)
I'm giving more than you, but it's not enough
I'm trying to hold on, but you're pushing me away
I thought love was supposed to be a two-way street
But now I'm left with nothing but tears to appease

(Verse 2 - Female Perspective)
I never meant to hurt you, I never meant to play
But sometimes love just doesn't work out the way
I gave you my heart, but you tore it apart
Now I'm left with a broken heart, and a love that's torn apart

I tried to give you everything, but you didn't see
The love that I had for you, the love that I needed
But now I'm walking away, cause I can't stay
Cause the more I gave, the more you took away

(Chorus)
I'm giving more than you, but it's not enough
I'm trying to hold on, but you're pushing me away
I thought love was supposed to be a two-way street
But now I'm left with nothing but tears to appease

(Bridge)
I wish I could turn back time, and make you see
The love that I had for you, the love that was meant to be
But now it's too late, cause you've gone away
And all I'm left with is this emptiness, this emptiness that won't go away

(Chorus)
I'm giving more than you, but it's not enough
I'm trying to hold on, but you're pushing me away
I thought love was supposed to be a two-way street
But now I'm left with nothing but tears to appease

(Outro)
Now I'm left with just a memory
Of the love that we had, and the love that could have been
But now it's gone, and I'm moving on
Cause the more I gave, the more I realized, it was never meant to be.

This song combines the smooth vocal harmonies and catchy beats of contemporary R&B with the emotional complexity of unreciprocated investment in love. The dynamic interplay between the male and female perspectives creates a nuanced exploration of the emotions involved in giving more in a relationship than the partner appreciates. The chorus emphasizes the theme of unreciprocated investment in love, while maintaining Chris Brown's signature blend of heartfelt lyrics and danceable rhythms.`,lyre_response:`[Intro: Chris Brown, 
Jordin Sparks
, 
Both
]
Lost, lost, yeah
And I just can't believe
That you're not here by my side
Lost, lost, yeah
And I can't help but wonder
Why you did the things you did
It still makes me mad (
Oh, yeah
)
Lost, lost, yeah
And I can't help but wonder
Why you did the things you did (
Why?
)
It still makes me sad, yeah (
Yeah
)
[Verse 1: Jordin Sparks, 
Chris Brown
]
Maybe I'm just too open, maybe I'm just too honest
You get a glimpse of me and then you're done, oh
You can't have everything, you can't have me
You can't have my heart, you can't have my love
I gave it all to you, don't understand
How could you let me down, down?
[Pre-Chorus: Jordin Sparks]
I tried to see things from your point of view
And in my heart, I believed in you
But things just aren't the same
It's like you're a different person now
[Chorus: Both, 
Chris Brown
]
You tell me that you love me, but you don't
You say that you could never let me down (
Oh, down
)
But you're the one who broke my heart (
Yeah
)
And now I'm left to pick up the pieces (
Yeah
)
You tell me that you love me, but you don't (
Oh, yeah
)
You say that you could never let me down
But you're the one who broke my heart (
Broke my heart
)
And now I'm left to pick up the pieces
[Verse 2: Chris Brown, 
Jordin Sparks
]
I know that you're somewhere new, with someone new
Living the life we used to do, down to the T
I know that you're happy and that's what hurts most
To know that you're lovin' someone else and not me, yeah
I tried to forget you, move on with my life
But you're the only one I ever really gave my heart to (
Oh, yeah
)
Gave my heart to (
Oh, yeah
)
And now you're gone, and I'm left to wonder why (
Why?
)
[Pre-Chorus: Jordin Sparks, 
Jordin Sparks & Chris Brown
]
I tried to see things from your point of view
And in my heart, I believed in you
But things just aren't the same
It's like you're a different person now
You tell me that you love me, but you don't (
You don't
)
You say that you could never let me down
But you're the one who broke my heart (
You broke my heart
)
And now I'm left to pick up the pieces
[Chorus: Both, 
Chris Brown
, 
Jordin Sparks
]
You tell me that you love me, but you don't
You say that you could never let me down
But you're the one who broke my heart (
Down
)
And now I'm left to pick up the pieces
You tell me that you love me, but you don't (
Oh, yeah
)
You say that you could never let me down
But you're the one who broke my heart (
Broke my heart
)
And now I'm left to pick up the pieces
[Bridge: Jordin Sparks, 
Chris Brown
]
I tried to see things from your point of view
But in my heart, I can't fool
You're not coming back, no matter what I do
Not coming back
Now I know that I'll be okay (I'll be okay)
Though you were the one that I loved the most
I'll be alright, I'll be alright
(I'll be alright, I'll be alright)
[Chorus: Both, 
Jordin Sparks
, 
Chris Brown
]
You tell me that you love me, but you don't (
You don't love me
)
You say that you could never let me down
But you're the one who broke my heart (
Down
)
And now I'm left to pick up the pieces
You tell me that you love me, but you don't (
Oh, yeah
)
You say that you could never let me down
But you're the one who broke my heart (
Broke my heart
)
And now I'm left to pick up the pieces (
I'm left to pick up the pieces
)`,id:8827240},{name:"A Cup of Coffee",artist:"Katy Perry",llama_response:`Verse 1:
I wake up every morning, drowning in my tears
Memories of you still lingering, like a haunting refrain
I try to shake it off, but it's hard to let go
Of the love that we had, and the pain that it shows

Chorus:
I drink my coffee, black as my heart
Trying to escape the hurt, but it never leaves my start
I'm searching for a high, to take me away
From the pain of losing you, and the memories that stay

Verse 2:
I thought we had it all, love that would last
But now I'm left with nothing, but the past
I thought we'd grow old, together in love
But now I'm alone, and the pain it comes from above

Chorus:
I drink my coffee, black as my heart
Trying to escape the hurt, but it never leaves my start
I'm searching for a high, to take me away
From the pain of losing you, and the memories that stay

Bridge:
I know I should move on, but I can't let go
The memories of you, they still make my heart glow
I know I should be strong, but I'm still holding on
To the love that we had, and the love that's gone

Chorus:
I drink my coffee, black as my heart
Trying to escape the hurt, but it never leaves my start
I'm searching for a high, to take me away
From the pain of losing you, and the memories that stay

Instrumental Break:
(Electric guitar solo, building in intensity)

Chorus:
I drink my coffee, black as my heart
Trying to escape the hurt, but it never leaves my start
I'm searching for a high, to take me away
From the pain of losing you, and the memories that stay

Outro:
I'll always remember you, and the love we had
But I know I must keep moving, and let go of the past
I'll drink my coffee, and try to face the day
With the hope of healing, and a brighter way.

This song is written in the style of Katy Perry, with a catchy and upbeat melody, but also explores the darker themes of a tumultuous relationship ending. The lyrics convey a mixture of nostalgia and bitterness, with a focus on the emotional turmoil of losing someone you love. The chorus contrasts the mundane act of drinking coffee with the dramatic idea of an overdose, symbolizing a desire to escape the pain. The song has a pop-rock edge, with a powerful instrumental break to emphasize the intensity of the emotions involved.`,lyre_response:`[Intro]
Coffee
You likes his coffee
I likes my coffee
We likes our coffee
Coffee
[Verse 1]
Once upon a time, we were ridin'
On a rollercoaster of love
Now we're crazier than the passengers
Tryna jump out of the moving car
Waving to the people on the ground
Like our future was in their hands
Well, the future's in your hands
[Pre-Chorus]
You hold my future in your hands
If you let me go, I'll be just fine
I'll drift away, I'll slip away
But if you stay, I'll overdose
On the memories of you
[Chorus]
I think I'll drink my coffee
Black, just like my heart
I think I'll drink my coffee
'Til I have an overdose
On the memories of you [Verse 2]
I don't wanna waste a single moment
In case the outcome is "no"
So I'll get angry before you even
Say the words, "You're too close"
"I can't do this," I'll say 'em first
I don't wanna waste a single moment
In case the outcome is "no" [Pre-Chorus]
You hold my future in your hands
If you let me go, I'll be just fine
I'll drift away, I'll slip away
But if you stay, I'll overdose
On the memories of you
[Chorus]
I think I'll drink my coffee
Black, just like my heart
I think I'll drink my coffee
'Til I have an overdose
On the memories of you
[Instrumental Break]
[Bridge]
Wanna drink my coffee
'Til I have an overdose
On the memories of you
Yeah, I'll drink my coffee
Black, just like my heart
I think I'll drink my coffee
'Til I have an overdose
On the memories of you [Chorus]
I think I'll drink my coffee
Black, just like my heart
I think I'll drink my coffee
'Til I have an overdose
On the memories of you
[Outro]
Overdose
On the memories of you`,id:195965},{name:"Why Don’t You Love Me",artist:"Dua Lipa",llama_response:`Verse 1:
I see the way you look at me, but do you really see?
The tears I cry myself to sleep, the scars that I can't conceal
You say you love me, but is it true?
Or is it just a lie, a game we're both playing, baby?

(Physical movement: Hands on hips, head thrown back, a mix of confidence and vulnerability)

Chorus:
Why don't you love me?
Why don't you love me?
I give and give and give, but it's never enough
Why don't you love me?

Verse 2:
I try to keep my cool, but the pain's too much to bear
You say you're there for me, but you're always elsewhere
I'm losing faith in you, in us, in everything
Why don't you love me?

(Physical movement: Arms crossed, eyes downcast, a sense of resignation)

Chorus:
Why don't you love me?
Why don't you love me?
I give and give and give, but it's never enough
Why don't you love me?

Bridge:
I thought we had a bond that would last
But now I'm left to pick up the pieces of my broken past
I deserve better, I deserve more
Why don't you love me?

(Physical movement: Hands on heart, a mix of sadness and determination)

Chorus:
Why don't you love me?
Why don't you love me?
I give and give and give, but it's never enough
Why don't you love me?

Outro:
I'll rise above this, I'll shine so bright
I won't let you bring me down, I won't let you take my light
I deserve love, I deserve care
Why don't you love me?

(Physical movement: Arms open wide, a sense of empowerment and self-love)

This song captures the emotional turmoil of a tumultuous relationship, with dynamic verses that convey a mix of vulnerability and assertiveness. The chorus repeats the central question of "why don't you love me?" for emotional impact, while the bridge expresses a desire for more and better in a relationship. The physical movements throughout the song embody the empowerment and sleek pop sound characteristic of Dua Lipa, while conveying themes of heartbreak, questioning a lover's commitment, and asserting one's worth.`,lyre_response:`[Intro]
Don't you, don't you
Don't you, don't you
Don't you, don't you love me?
Don't you, don't you
Don't you, don't you
Don't you, don't you love me?
[Verse 1]
Walk all over me, I'm wide open (Wide open)
Don't think I won't ever tell, I'm just watching (I'm just watching)
You must think I'm stupid, you're so damn clever (So damn clever)
I should never question, I'm just a fool (Just a fool)
[Pre-Chorus]
Little drops of poison, you're making me sick
I can't work out what you want, one minute you're in
But one thing I know for sure
I know that I can't trust you, but I'm still hanging on
[Chorus]
Why don't you love me?
Why do you do me this way?
Why don't you love me?
Why do you break me down
And build me up?
Why don't you love me?
Why do you make me question myself so much?
Why don't you love me? [Verse 2]
Go to war with me, I'll stand by your side (I'll stand by your side)
Tell me you need me, say you can't live without me (You can't live without me)
You must think I'm irreplaceable, you're so damn right (So damn right)
I'm the only thing holding you, keeping you alive [Pre-Chorus]
Little drops of poison, you're making me sick
I can't work out what you want, one minute you're in
But one thing I know for sure
I know that I can't trust you, but I'm still hanging on
[Chorus]
Why don't you love me?
Why do you do me this way?
Why don't you love me?
Why do you break me down
And build me up?
Why don't you love me?
Why do you make me question myself so much?
Why don't you love me?
Don't you, don't you
Don't you, don't you
Don't you, don't you love me?
Don't you, don't you
Don't you, don't you
Don't you, don't you love me?
Why don't you love me?
Why do you do me this way?
Why don't you love me?
Why do you break me down
And build me up?
Why don't you love me?
Why do you make me question myself so much?
Why don't you love me?
Don't you, don't you
Don't you, don't you
Don't you, don't you love me?
Don't you, don't you
Don't you, don't you
Don't you, don't you love me?
[Refrain]
Why do you love me so little?
You loved me so badly
Why do you love me at all?
If you don't love me, why do you hurt me so much?
[Chorus]
Why don't you love me?
Why do you do me this way?
Why don't you love me?
Why do you break me down
And build me up?
Why don't you love me?
Why do you make me question myself so much?
Why don't you love me?
Don't you, don't you
Don't you, don't you
Don't you, don't you love me?
Don't you, don't you
Don't you, don't you
Don't you, don't you love me?`,id:6217414},{name:"Yves Slatt Laurent",artist:"Drake",llama_response:`Verse 1:
I was running through the 6 with my woes,
Tryna find some peace, but they still know my flow.
Met up with a dude from the past, he claimed to be familiar,
But I ain't never seen him, he must've got lost in the shuffle.

Chorus:
I'm living life like a boss, got my own lane,
But when I see you, it's like a ghost from my past,
You claim to know me, but I don't know you at all,
We used to be friends, but now you're just a stranger in the hall.

Verse 2:
I'm sipping on a drink, feeling like a king,
Got my eyes on the prize, and my crown on my head.
Made it out the hood, made it to the top,
But when I see you, I'm hit with a wave of nostalgia.

Chorus:
I'm living life like a boss, got my own lane,
But when I see you, it's like a ghost from my past,
You claim to know me, but I don't know you at all,
We used to be friends, but now you're just a stranger in the hall.

Verse 3:
I got my own crew, my own brand, my own flow,
I don't need no one else, I'm living life on my own.
I see you trying to keep up, but you're falling behind,
I'm on the top of the world, and you're just a distant memory in my mind.

Chorus:
I'm living life like a boss, got my own lane,
But when I see you, it's like a ghost from my past,
You claim to know me, but I don't know you at all,
We used to be friends, but now you're just a stranger in the hall.

Bridge:
I'm not the same person I used to be,
Growth and success, that's just part of the spree.
I've got my own identity, my own voice, my own style,
I don't need no one else to make me feel alive.

Chorus:
I'm living life like a boss, got my own lane,
But when I see you, it's like a ghost from my past,
You claim to know me, but I don't know you at all,
We used to be friends, but now you're just a stranger in the hall.

Outro:
I'm moving on up, I'm moving on out,
I don't need no one else, I'm living life without a doubt.
I'm the king of my own world, I'm on top of the game,
And when I see you, it's just a distant memory, a name.

This song blends elements of Drake's signature sound, including smooth R&B melodies mixed with confident hip-hop beats, with a strong sense of self and origins. The lyrics convey a cool detachment, the complexities of fame, and navigating relationships with a hint of nostalgia and street-savvy attitude. The song's narrative captures the theme of encountering someone from the past who claims familiarity, but is met with indifference and a sense of disconnection, reflecting on personal growth and success while emphasizing a strong sense of self and origins.`,lyre_response:`[Intro]
Yeah, Ren, M.O.F, and the boy J.R.
And a special guest appearance by Farrakhan
[Verse 1]
He said, "I heard you went pretty far
Since we last saw each other, man, you are a star"
I said, "It's only because they know our history
The D would be nothing without you and me"
He looked at me, he smiled, he said, "You're welcome here
Hometown hero, you always made time for the streets"
I didn't say nothing, he looked at me for a reason
Maybe it was pride or maybe it was fear
That if I said something, it would come to be known
That I wasn't the same kid he once called friend
So he touched my face, it was a moment so cold
I could tell he wasn't there anymore
I said, "I know you got somewhere to be, this what you wanted, right?
Just touched base, reconnecting, you understand the vibe"
He said, "Yeah, this is where I was supposed to be
At 10:30, I was supposed to be here
And look like I never left, look like nothing changed
Look like I'm still your friend, look like I'm still your lil' homie
But when I showed up, it turned out that you wasn't here alone
Your girl was with you and she was fine as hell
I could tell she was out of your league, you understand what I mean
I said, "Sorry, I don't get involved, that's my business and my peace
And she's not here with me, she's with you, homie, that's so messed up"
And with that, I turned to leave, he grabbed my arm
He said, "Wait, don't go, I didn't say thank you for the chain
And the winters and the summers that you shared with me
That's a debt that could never be repaid, you understand me"
And I said, "I'll always be there for you, 416-441-0706
That's my number and it's unavailable, that's my only number
That's so you never call that you can't hang on
Or you don't show up when you're supposed to
And besides, what are the chances that someone would call that
Knowing I'm always on the road and never there to answer?"`,id:9496510},{name:"Sauce (Version 2)",artist:"Lil Uzi Vert ",llama_response:`(Verse 1)
I'm sippin' on a drank, got my sauce on fly
Got my designer tags, got my haters sayin' bye
Got a watch that cost a mill', got my braggadocio on
Got my swag game on point, ain't no one touchin' my throne

I'm rollin' in my whip, got my jewels on display
Got my high-end cars, ain't no one touchin' my pay
Got my own style, ain't no one copyn' my flow
Got my swag on point, ain't no one knowin' how to go

(Chorus)
Sauce, sauce, got my sauce on fly
Got my swag on point, ain't no one touchin' my high
Sauce, sauce, got my swag on point
Got my confidence on point, ain't no one stoppin' my mount

(Verse 2)
I'm the king of the game, ain't no one touchin' my throne
Got my wealth on display, got my haters alone
Got my designer clothes, got my jewels on my neck
Got my swag on point, ain't no one checkin' my deck

I'm drippin' in my sauce, got my braggadocio on
Got my high-end cars, ain't no one touchin' my zone
Got my own style, ain't no one copyn' my flow
Got my swag on point, ain't no one knowin' how to go

(Chorus)
Sauce, sauce, got my sauce on fly
Got my swag on point, ain't no one touchin' my high
Sauce, sauce, got my swag on point
Got my confidence on point, ain't no one stoppin' my mount

(Bridge)
I don't got time for haters, they just a distraction
Got my own lane, ain't no one gonna stop my progression
I'm on the top of the game, ain't no one touchin' my throne
Got my swag on point, ain't no one gonna take my zone

(Verse 3)
I'm the king of the trap, ain't no one touchin' my crown
Got my wealth on display, got my haters bowin' down
Got my designer clothes, got my jewels on my neck
Got my swag on point, ain't no one checkin' my deck

I'm drippin' in my sauce, got my braggadocio on
Got my high-end cars, ain't no one touchin' my zone
Got my own style, ain't no one copyn' my flow
Got my swag on point, ain't no one knowin' how to go

(Chorus)
Sauce, sauce, got my sauce on fly
Got my swag on point, ain't no one touchin' my high
Sauce, sauce, got my swag on point
Got my confidence on point, ain't no one stoppin' my mount

(Outro)
So if you hatin', just keep on hatin'
I'm on the top, ain't no one touchin' my position
Got my swag on point, ain't no one stoppin' my flow
I'm the king of the game, and I'm here to show.`,lyre_response:`[Intro]
(
Woah, lil' bitch, I got sauce, ayy
)
(
Phantom when I roll up, ayy
)
(
Got some racks, ayy
)
[Chorus: Lil Uzi Vert & 
Syd
]
I got sauce, yeah (
Woah, lil' bitch, I got sauce, ayy
)
Got my Phantom like a mall cop (
Ayy
)
Walk around like nothing at all (
Ayy
)
No, I'm not gon' give you my heart (
Ooh, ayy
)
'Cause I'm a lil' bitch with a lot of flaws (
Ooh, ayy-ayy-ayy
)
In my past, that's what happened with them (
Ooh, ayy
)
Yeah, let me break it down for you (
Ooh, ayy-ayy-ayy
)
You know I got sauce
 (
Ayy
)
I got sauce, bitch (
Ayy
)
[Verse 1: Lil Uzi Vert]
(
Woah, lil' bitch, I got sauce, ayy
)
Got a garage full of dirty, dirty laundry (Dirty laundry, oh)
Wanna ball, got that swamp stuff, like the muck (Like the muck, oh)
Pull up on your bitch, I'm that mug shot, boy (Mug shot, boy)
Got a curvy, got that swerve, it's like the first (It's like the first, oh, woah)
Got an opp that's sweeter than your first (Your first, oh, woah)
Walk around with a smile, don't be a dour (Don't be a dour, oh)
Wanna ball, I got that swagger, like the bag (Like the bag, oh)
In the build, with the shit that'll have them talkin' (Like the bag, oh)
Woah, I got sauce (Ayy), lil' bitch (Ayy)
I got sauce, slatt
 (Woah)
(
Woah, lil' bitch, I got sauce, ayy
)
Got a bag full of green, like the avocado (Like the avocado, oh)
Motorcycle like the Honda VF700 (Like the VF700, oh)
Pull up on your bitch, I'm that thunderstorm, boy (I'm that thunderstorm, boy)
Got a curvy, got that swerve, it's like the first (It's like the first, oh, woah)
Got an opp that's sweeter than your first (Your first, oh, woah)
Walk around with a smile, don't be a dour (Don't be a dour, oh)
Wanna ball, I got that swagger, like the bag (Like the bag, oh)
In the build, with the shit that'll have them talkin' (Like the bag, oh)
Woah, I got sauce (Ayy), lil' bitch (Ayy)
I got sauce, slatt
 (Woah)
I got sauce, bitch (Woah, lil' bitch, I got sauce, ayy)
Got my Phantom like a mall cop (Walk around like nothing at all, ayy)
Walk around like nothing at all (Ayy)
No, I'm not gon' give you my heart (Cause I'm a lil' bitch with a lot of flaws, ooh, ayy-ayy-ayy)
'Cause I'm a lil' bitch with a lot of flaws (Ooh, ayy-ayy-ayy)
In my past, that's what happened with them (Ooh, ayy)
Yeah, let me break it down for you (Ooh, ayy-ayy-ayy)
You know I got sauce
 (Ayy)
I got sauce, bitch (Ayy)
I got sauce (Ayy)
, slatt
I got sauce, bitch (Woah, lil' bitch, I got sauce, ayy)
I got sauce, bitch (Ayy)
[Chorus: Lil Uzi Vert & 
Syd
]
I got sauce, yeah (
Woah, lil' bitch, I got sauce, ayy
)
Got my Phantom like a mall cop (
Ayy
)
Walk around like nothing at all (
Ayy
)
No, I'm not gon' give you my heart (
Ooh, ayy
)
'Cause I'm a lil' bitch with a lot of flaws (
Ooh, ayy-ayy-ayy
)
In my past, that's what happened with them (
Ooh, ayy
)
Yeah, let me break it down for you (
Ooh, ayy-ayy-ayy
)
You know I got sauce
 (
Ayy
)
I got sauce, bitch (
Ayy
)
[Verse 2: Syd]
I got sauce, yeah
Walk around like nothing at all, ayy
No, I'm not gon' give you my heart, ayy
'Cause I'm a lil' bitch with a lot of flaws, ooh, ayy-ayy-ayy
In my past, that's what happened with them, ooh, ayy
Yeah, let me break it down for you, ooh, ayy-ayy-ayy
You know I got sauce, ayy
I got sauce, bitch, ayy
[Outro]
Woah, lil' bitch, I got sauce, ayy
Ayy, Phantom when I roll up, ayy
Got some racks, ayy
Ooh, ayy-ayy-ayy
In my past, that's what happened with them, ooh, ayy
Yeah, let me break it down for you, ooh, ayy-ayy-ayy
You know I got sauce, ayy
I got sauce, bitch`,id:6368552},{name:"I’m Not Here To Make Friends",artist:"Sam Smith",llama_response:`Verse 1:
I've been searching for a connection, something real
Not just a friend, but a lover, someone to reveal
My true self, my deepest desires, my every need
Someone who will see me, and make me feel free

Chorus:
I want a love that's genuine, a bond that's strong and true
Not just a casual friendship, but something that's meant to be
I'm tired of the superficial, the shallow and the fake
I want a love that will stay, and never break

Verse 2:
I've been hurt before, I've been left in the dark
But I won't let my past define my heart
I'm ready for a love that's gonna heal me, set me free
A love that will make me feel like I'm meant to be

Chorus:
I want a love that's genuine, a bond that's strong and true
Not just a casual friendship, but something that's meant to be
I'm tired of the superficial, the shallow and the fake
I want a love that will stay, and never break

Bridge:
I know I'm worthy, I know I deserve
A love that will make me feel alive, and never deprive
Of the connection, the intimacy, the fire that burns
I want a love that will leave me feeling like I'm number one

Chorus:
I want a love that's genuine, a bond that's strong and true
Not just a casual friendship, but something that's meant to be
I'm tired of the superficial, the shallow and the fake
I want a love that will stay, and never break

Post-Chorus:
I want a love that will stay, stay with me all night
A love that will never leave, never say goodbye
I want a love that will stay, and make everything right
I want a love that will stay, and shine so bright

Outro:
I want a love that will stay, and never fade
A love that will make me feel alive, and never be afraid
Of being myself, of being true
I want a love that will stay, and always be new.

This song captures the essence of seeking genuine connection and self-empowerment, with a touch of sass and a vulnerable yet confident delivery. The lyrics echo themes of longing for a lover rather than just friends, and the music complements the introspective yet bold tone that Sam Smith is known for, with powerful choruses and a catchy repetitive post-chorus that emphasizes the desire for a deeper relationship.`,lyre_response:`[Intro]
Oh, woah
Oh, oh, woah
[Verse 1]
I've been looking for a lover, not just friends
I don't wanna hang around if there's no end
To be honest, I'm a bit tired of all these casual
Love, love, love, love, love, love, lovers
[Pre-Chorus]
I'm waiting for a face like you, like you
Baby, so baby, come be my
I'm waiting for a face like you, like you
Baby, so baby, come be my
(Be my)
[Chorus]
Be my, be my, be my, be my
Be my, be my, be my, be my
Be my, be my, be my, be my
Be my, be my, be my, be my
[Verse 2]
I've been looking for a lover, not just friends
Don't wanna hang around if there's no end
To be honest, I'm a bit tired of all these casual
Love, love, love, love, love, love, lovers
[Pre-Chorus]
I'm waiting for a face like you, like you
Baby, so baby, come be my
I'm waiting for a face like you, like you
Baby, so baby, come be my
(Be my)
[Chorus]
Be my, be my, be my, be my
Be my, be my, be my, be my
Be my, be my, be my, be my
Be my, be my, be my
[Post-Chorus]
So just be my
So just be my
So just be my
So just be my
[Bridge]
I'm not ashamed of my desire
I wanna be consumed by your fire
I'm not ashamed of my tears
I'll cry until you're here
[Chorus]
Be my, be my, be my, be my
Be my, be my, be my, be my
Be my, be my, be my, be my
Be my, be my, be my
[Outro]
Be my, be my, be my, be my
Be my, be my, be my, be my
Be my, be my, be my, be my
Be my, be my, be my`,id:8490754},{name:"Snow On The Beach (feat. More Lana Del Rey)",artist:"Taylor Swift",llama_response:`Verse 1:
I never thought I'd find myself at the edge of the sea
With a heart that's been shattered, and a soul that's free
But then you came along, like a ghost in the night
And swept me off my feet, with a love so bright

Chorus:
Oh, the irony of love, like snow at the beach
An unlikely romance, that's hard to reach
But I can't help but feel, like a dream in the night
With you by my side, everything's alright

Verse 2:
We dance beneath the stars, with the moon as our guide
Our love shining bright, like a fire in the tide
We chase the shadows away, with a love that's so true
And in this moment, I know, I'll always see you

Chorus:
Oh, the irony of love, like snow at the beach
An unlikely romance, that's hard to reach
But I can't help but feel, like a dream in the night
With you by my side, everything's alright

Bridge:
We're like two ships, adrift in a sea of time
Our love the only anchor, that keeps us aligned
And though the waves may rage, and the winds may blow
Our love will keep us safe, like a shelter in the snow

Chorus:
Oh, the irony of love, like snow at the beach
An unlikely romance, that's hard to reach
But I can't help but feel, like a dream in the night
With you by my side, everything's alright

Outro:
So let's hold on to love, like a fragile thing
And cherish every moment, before the morning brings
The light of day, and the end of this dream
But for now, I'm yours, and you're mine, and that's all that matters, it seems.

The song combines Taylor Swift's narrative songwriting style with a touch of Lana Del Rey's moody, cinematic feel, creating an ethereal and dreamy quality. The imagery is vivid and metaphorical, with lines like "snow at the beach" and "two ships adrift in a sea of time" adding a sense of wonder and mystery to the love story. The chorus captures the beautiful yet strange nature of an unlikely romance, with a focus on emotionally rich and descriptive language. The music has a flowing, airy vibe, with harmonies reminiscent of Taylor Swift's collaboration with Lana Del Rey.`,lyre_response:`[Intro: Taylor Swift]
There was snow at the beach
And you were my perfect gift
The kind you give at Christmas
Time you never get back
[Verse 1: Taylor Swift]
You said, "Let's get out of this town
Drive out of the city, away from the crowds"
So we headed out to the coastal road
And I picked the short way, not the long way
'Cause I never saw this coming
Never saw you were the type
To be falling for me, yeah
[Pre-Chorus: Lana Del Rey]
If it was a movie, I would laugh
At the absurdity of it all
But this is real life, so I guess
I have to keep you
[Chorus: Lana Del Rey & 
Taylor Swift
]
And you'll be my prince
And I'll be your princess
And you'll take me away
To a place where the air is pure
And we can run by the sea
And you'll be my prince
And I'll be your princess
And you'll take me away
To a place where the air is pure
And we can run by the sea
[Verse 2: Lana Del Rey]
I was walking in the park in the dark
With you holding my hand, it's a start
And in your arms is where I belong
So I'll shade my eyes and look at the stars
And think that this is all so sudden
And maybe it's crazy, what we're doing
But you make me feel like I'm dreaming [Pre-Chorus: Lana Del Rey]
So I'll take you to the beach in the snow
And we'll hold each other 'til we're glowing
And you'll be my prince
And I'll be your princess
And we'll live in a world that isn't broken
[Chorus: Lana Del Rey & 
Taylor Swift
]
And you'll be my prince
And I'll be your princess
And you'll take me away
To a place where the air is pure
And we can run by the sea
And you'll be my prince
And I'll be your princess
And you'll take me away
To a place where the air is pure
And we can run by the sea
[Outro: Lana Del Rey & 
Taylor Swift
]
I was walking in the park in the dark
With you holding my hand, it's a start
And in your arms is where I belong
So I'll shade my eyes and look at the stars
And think that this is all so sudden
And maybe it's crazy, what we're doing
But you make me feel like I'm dreaming`,id:9157481},{name:"All Alone",artist:"Lil Uzi Vert ",llama_response:`(Verse 1)
I'm sippin' on a drank, got my wrists on a grind
Got my pockets full of stacks, ain't no time to unwind
I'm livin' my best life, ain't no time to chill
Got my eyes on the prize, and my game is on thrill

(Chorus)
I'm Uzi Vert, I'm on top of the world
Got my cake, got my pie, got my girl
I'm livin' like a star, ain't no time to unfurl
I'm the king of the game, ain't no time to be a fool

(Verse 2)
I got a Benz, it's black and it's sleek
Got a bad bitch, she's lookin' like a dream
I'm ridin' through the city, got my music on repeat
Got my Glock by my side, ain't no time to decease

(Chorus)
I'm Uzi Vert, I'm on top of the world
Got my cake, got my pie, got my girl
I'm livin' like a star, ain't no time to unfurl
I'm the king of the game, ain't no time to be a fool

(Verse 3)
I got a mansion, it's big and it's grand
Got a private jet, it's flyin' through the land
I'm travelin' through the world, got my squad by my side
Got my champagne on ice, ain't no time to hide

(Chorus)
I'm Uzi Vert, I'm on top of the world
Got my cake, got my pie, got my girl
I'm livin' like a star, ain't no time to unfurl
I'm the king of the game, ain't no time to be a fool

(Bridge)
I'm the king of the game, ain't no time to lose
Got my money on my mind, ain't no time to choose
I'm livin' like a boss, ain't no time to cruise
I'm the one and only, ain't no time to abuse

(Chorus)
I'm Uzi Vert, I'm on top of the world
Got my cake, got my pie, got my girl
I'm livin' like a star, ain't no time to unfurl
I'm the king of the game, ain't no time to be a fool

(Outro)
I'm Uzi Vert, I'm on top of the game
Got my money on my mind, ain't no time to proclaim
I'm livin' like a star, ain't no time to tame
I'm the king of the game, ain't no time to reclaim.

This song is written in the style of Lil Uzi Vert, with a focus on modern trap elements, playful wordplay, and a catchy melody that would resonate with his energetic and melodic flow. The lyrics are braggadocious and nonchalant, touching on themes of wealth, self-assuredness, and a carefree lifestyle. The repetitive hooks emphasize financial success and attractiveness, while the verses showcase a confident and boastful tone. The bridge adds a touch of playfulness and nonchalance, while the outro solidifies the song's message of Uzi Vert's dominance in the game.`,lyre_response:`[Intro]
(
Woah, Cash Only
)
You know, I only use cash now, ayy
And I only roll with bosses now, ayy
Yeah, my bitch is a boss, she ain't no basic bitch, ayy (
She's a boss
)
I can tell her ass is a go getter, ayy (
She's a boss
)
I swear to God, my life is a movie, ayy
I just go gassed up, I got gas for days, ayy
I can see her in the rough, she still look like diamonds, ayy (
You're a boss
)
Woah, she's a ten, I only fuck with nines, ayy (
You're a boss
)
Woah, I said she's a ten, I only fuck with nines, ayy
[Chorus]
I'm young, I'm rich, I'm famous, I'm yours
I'm young, I'm rich, I'm famous, I'm yours
I'm young, I'm rich, I'm famous, I'm yours
I'm young, I'm rich, I'm famous, I'm yours
I'm young, I'm rich, I'm famous, I'm yours
I'm young, I'm rich, I'm famous, I'm yours
I'm young, I'm rich, I'm famous, I'm yours (
Cash Only
)
[Verse 1]
I just made a million dollars, ayy (
You're a boss
)
Counting them bands on me, ayy (
You're a boss
)
Counting them bands on me, ayy (
You're a boss
)
All these niggas hatin' on me, ayy (
You're a boss
)
Rollin' up the cheese, ayy (
You're a boss
)
Rollin' up the cheese, ayy (
You're a boss
)
I fuck that bitch, now she a ho, ayy (
You're a boss
)
I fuck that bitch, now she a ho, ayy (
You're a boss
)
I fuck that bitch, now she a ho, ayy (
You're a boss
)
I fuck that bitch, now she a ho, ayy (
You're a boss
)
[Chorus]
I'm young, I'm rich, I'm famous, I'm yours
I'm young, I'm rich, I'm famous, I'm yours
I'm young, I'm rich, I'm famous, I'm yours
I'm young, I'm rich, I'm famous, I'm yours
I'm young, I'm rich, I'm famous, I'm yours
I'm young, I'm rich, I'm famous, I'm yours
I'm young, I'm rich, I'm famous, I'm yours
I'm young, I'm rich, I'm famous, I'm yours
I'm young, I'm rich, I'm famous, I'm yours
I'm young, I'm rich, I'm famous, I'm yours
I'm young, I'm rich, I'm famous, I'm yours
I'm young, I'm rich, I'm famous, I'm yours (
Cash Only
)
[Verse 2]
I'm tryna fuck a bitch from head to toe
Give that lil' pussy, that lil' dick, a home, yeah
I just spent fourteen hundred at the mall, yeah
You know, I only use cash now, ayy
And I only roll with bosses now, ayy
Yeah, my bitch is a boss, she ain't no basic bitch, ayy (
She's a boss
)
I can tell her ass is a go getter, ayy (
She's a boss
)
I swear to God, my life is a movie, ayy
I just go gassed up, I got gas for days, ayy
I can see her in the rough, she still look like diamonds, ayy (
You're a boss
)
Woah, she's a ten, I only fuck with nines, ayy (
You're a boss
)
Woah, I said she's a ten, I only fuck with nines, ayy
[Chorus]
I'm young, I'm rich, I'm famous, I'm yours
I'm young, I'm rich, I'm famous, I'm yours
I'm young, I'm rich, I'm famous, I'm yours
I'm young, I'm rich, I'm famous, I'm yours
I'm young, I'm rich, I'm famous, I'm yours
I'm young, I'm rich, I'm famous, I'm yours
I'm young, I'm rich, I'm famous, I'm yours (
Cash Only
)`,id:9278189},{name:"Ring Ring",artist:"Travis Scott ",llama_response:`Verse 1:
I'm on a mission, ain't no slowin' me down
Got my eyes on the prize, and I'm ready to drown
In the night, where the vibes are always high
I'm chasin' the thrill, and I won't say goodbye

Pre-Chorus:
I'm livin' life on the edge, ain't no time for sleep
Got my ad-libs on repeat, and my rhymes on repeat
I'm on a roll, ain't no stoppin' me now
Got my sights on the top, and I'm ready to bow

Chorus:
I'm wild and free, like a wolf on the run
I'm livin' for the moment, and I won't be done
I'm on a nocturnal escape, where the lights never dim
I'm chasin' the high, and I won't give up the grind

Verse 2:
I'm drippin' in finesse, got my style on fleek
Got my wealth and my luxury, and my status on repeat
I'm on a mission to prove, that I'm the real deal
Got my eyes on the prize, and I won't ever feel

Pre-Chorus:
I'm livin' life on the edge, ain't no time for sleep
Got my ad-libs on repeat, and my rhymes on repeat
I'm on a roll, ain't no stoppin' me now
Got my sights on the top, and I'm ready to bow

Chorus:
I'm wild and free, like a wolf on the run
I'm livin' for the moment, and I won't be done
I'm on a nocturnal escape, where the lights never dim
I'm chasin' the high, and I won't give up the grind

Bridge:
But the thrill of the chase, it comes with a cost
Got my demons on my back, and they won't be lost
I'm on a collision course, with the fire in my soul
I'm on a journey to the top, and I won't be controlled

Chorus:
I'm wild and free, like a wolf on the run
I'm livin' for the moment, and I won't be done
I'm on a nocturnal escape, where the lights never dim
I'm chasin' the high, and I won't give up the grind

Outro:
I'm on a mission, ain't no slowin' me down
Got my eyes on the prize, and I won't be found
Livin' life on the edge, where the thrill never fades
I'm on a nocturnal escape, where the night never fades.

This song is a fusion of Travis Scott's unique blend of hip-hop and psychedelic influences, with a touch of rock 'n' roll swagger. The lyrics express themes of relentless pursuit and wild, nocturnal escapades, paired with the artist's signature auto-tuned vocals and ad-libs. The song has a dynamic structure that shifts from energetic verses to a catchy, melodic chorus, and a bridge that slows down the pace, creating a contrasting atmosphere. The song also incorporates themes of hedonism and the complexity of relationships, with references to wealth, luxury, and the fast life.`,lyre_response:`[Intro]
(
Playboi Carti
)
Ayy, ayy, ayy, ayy
(
Travis Scott
)
Ayy, ayy, ayy, ayy
[Verse 1]
Pour the lean, I'm gettin' rowdy (Yeah, yeah)
I'm 'bout to roll up, call me Logan (Yeah, yeah)
Got my Audemar, call me James Bond (Yeah, yeah)
She gon' fall in love with me in this Rolls Royce, yeah
[Pre-Chorus]
I'm on a ego trip, so I'm tryna wake up in Vegas (Yeah)
Every night, I'm tryna fuck somethin', no baby, I'm not a vegan (Yeah)
I'm the one they talk about, I got a bad rep, that's a blessin' (Yeah)
I'm the one they copy, but they can't replicate this
[Chorus]
I'm too known, too known, too known, I'm too known, too known (
I'm too known, too known
)
I'm too known, too known, too known, I'm too known, too known (
I'm too known, too known
)
Call my bitch known, known, known (
Known, known
)
Call my bitch known, known, known (
Known, known
)
She gon' fuck any nigga known, known, known (
Known, known
)
She gon' fuck any nigga known, known, known (
Known, known
)
[Verse 2]
I'm on a ego trip, tryna wake up in Vegas (Yeah, yeah)
Every night, I'm tryna fuck somethin', no baby, I'm not a vegan (Yeah, yeah)
And I don't give a fuck if she known, she well aware of the rules (Yeah)
'Cause I fuck her with my squad, and we all swarm like wolves (Yeah)
[Pre-Chorus]
I'm on a ego trip, so I'm tryna wake up in Vegas (Yeah)
Every night, I'm tryna fuck somethin', no baby, I'm not a vegan (Yeah)
I'm the one they talk about, I got a bad rep, that's a blessin' (Yeah)
I'm the one they copy, but they can't replicate this
[Chorus]
I'm too known, too known, too known, I'm too known, too known (
I'm too known, too known
)
I'm too known, too known, too known, I'm too known, too known (
I'm too known, too known
)
Call my bitch known, known, known (
Known, known
)
Call my bitch known, known, known (
Known, known
)
She gon' fuck any nigga known, known, known (
Known, known
)
She gon' fuck any nigga known, known, known (
Known, known
)
[Bridge]
She gon' fuck any nigga known, known, known (
Known, known
)
She gon' fuck any nigga known, known, known (
Known, known
)
[Outro]
I'm on a ego trip, so I'm tryna wake up in Vegas (Woah, yeah)
Every night, I'm tryna fuck somethin', no baby, I'm not a vegan (No, woah)
And I don't give a fuck if she known (No, woah), she well aware of the rules (No, woah)
'Cause I fuck her with my squad, and we all swarm like wolves (Woah, yeah)`,id:8209014},{name:"Doomsday",artist:"Eminem",llama_response:`Verse 1:
I was born to make noise, my rhymes like a thunderstorm
From the streets to the spotlight, my rise to fame form
Humble beginnings, grindin' every day
Now I'm makin' waves, breakin' the mold in every way

Chorus:
I'm the new king of the game, don't you forget my name
I'm the one they're talkin' 'bout, the one they can't tame
I'm on a roll, ain't no stoppin' me now
I'm the future of rap, I'm takin' it to the top, yo

Verse 2:
I faced obstacles, but I didn't let 'em bring me down
I kept pushin', kept grindin', now I'm wearin' the crown
I'm a rebel, I'm a renegade, I'm a nonconformist too
I won't be silenced, I won't be stopped, I won't be blue

Chorus:
I'm the new king of the game, don't you forget my name
I'm the one they're talkin' 'bout, the one they can't tame
I'm on a roll, ain't no stoppin' me now
I'm the future of rap, I'm takin' it to the top, yo

Verse 3:
I'm on a mission, I'm on a quest
To make my mark, to leave my legacy
I won't be held down, I won't be contained
I'm a force to be reckoned with, I'm on the rise again

Chorus:
I'm the new king of the game, don't you forget my name
I'm the one they're talkin' 'bout, the one they can't tame
I'm on a roll, ain't no stoppin' me now
I'm the future of rap, I'm takin' it to the top, yo

Verse 4:
I'm a product of the streets, I'm a product of the game
But I won't be defined, I won't be tamed
I'm a cultural icon, I'm a movement too
I'm the voice of the voiceless, I'm the one they're talkin' 'bout

Chorus:
I'm the new king of the game, don't you forget my name
I'm the one they're talkin' 'bout, the one they can't tame
I'm on a roll, ain't no stoppin' me now
I'm the future of rap, I'm takin' it to the top, yo

Outro:
So listen up, y'all, I'm here to stay
I'm the new king of rap, and I'm here to play
I won't be ignored, I won't be left behind
I'm the future of rap, and I'm on the rise, y'all, I'm on the rise.`,lyre_response:`[Intro]
Yeah, it's young, it's confident, it's cocky even (
Hey
)
But can the artist make his mark?
He's trying to stand out in a world that's over-saturated
With wannabes and has-beens and can he make a difference? (
Difference
)
With the fate of his career on his shoulders
He's got a lot to prove before he's considered one of the greats
So let's take a look at the life and times of
Slim Shady
Lewinsky
[Verse 1: Eminem]
I shot a man named Gray, he was a drifter
Caught him in the act of burglarizing my house
Gotten a beat-down worse than Rodney King
I tell you, that was the day before
My mother's birthday, it was December 8
She was nailed to the crotch of a crucifix
By some Christian fundamentalists who hated her for being a lesbian
They set fire to our house while she was inside
I was 10 years old, I didn't see her no more
After that, my dad put us both in an orphanage
'Til he died of an overdose
'Cause he just couldn't cope
And I was labeled a juvenile delinquent
Cutting off my mom's head and putting it in a box
With a note that said, "I hate you, you fucking bitch"
That was the day my dad died (I think)
'Cause I left him hanging from the ceiling by his bathroom tile
With a note that said, "You can't live without me"
That was the day before my 11th birthday (Huh)
So I guess this means I'm a man now
Fuck the system, I'm breaking out the asylum
I'm taking all your daughters, this is an emergency
I'm laying all my sons, this is an epidemic
It's a massacre in this house, there's bodies all over the lawn
The neighbors are complaining, this is a darker version of suburban life
They should call the police, this is a welfare call
'Cause they can hear my mother and father arguing through the wall (Shh)
[Verse 2: Eminem]
It was winter 1991, I was 11 years old
In the basement of my home, I had a vision of me rapping on TV
With no equipment or computers back then
Just a mic and a recorder and a dream, I was determined
To be the greatest of all time, I wouldn't let nothing get in my way
Especially high school, fuck that, I dropped out in 92
I started off as a MC, I never had a chance in the rap game
Until I came up with a fake name, Slim Shady
My parents didn't approve, they said it was a phase
I got kicked out in the winter, it was 20 degrees
No food stamps, no cash, and I'm ashamed
To say that I'm from Detroit, man, this city's to blame
For my demise, 'cause they never had pride in they's eyes
Just drugs and crime, but I couldn't see that with my own eyes
I was too busy dreaming about killin' on the mic
Now I'm a walking disaster, this is the last chapter
I'll be back in a year, this is the final act
[Verse 3: Eminem]
(In my best Paul Rosenberg voice)
Ooh, feel the hatred, feel the anger
Comin' from this young man, it's unreal
He's got a chip on his shoulder
The size of a Cadillac, you can bet your ass he's goin' places
He's one of those mothafuckas that never smiles, always has a scowl on his face
And he's cold, like the winter in Detroit, but the coldest on the mic
So take your fuckin' shit and bounce, you're wasting my time
You're never gonna make it in this business, you're fucked
You got a fuckin' disgrace of a diction, your flow is fucked
You ain't got no style, you're fuckin' wack, go fuck yourself in a couple of places
Paul Rosenberg
[Outro]
Ooh, feel the hatred, feel the anger
Comin' from this young man, it's unreal
(He's one of those mothafuckas that never smiles, always has a scowl on his face)
He's got a chip on his shoulder
The size of a Cadillac, you can bet your ass he's goin' places`,id:9255119},{name:"Up & Down",artist:"Chainsmokers",llama_response:`(Verse 1)
I was lost in the underground, couldn't find my way out
Feeling like a ghost, invisible and without a doubt
But then I saw the light, a beacon in the night
And I knew I had to fight, to break free from the fight

(Chorus)
Now I'm on the clouds, I'm shining bright
I'm seen in a new light, I'm feeling alive tonight
I overcame the struggles, I rose above the pain
I'm not the same person, I'm a new person again

(Verse 2)
I used to feel like I didn't belong, like I was out of place
But now I see that I'm where I'm meant to be, in this space
I found my voice, I found my strength
I'm not afraid to be myself, I'm not afraid to be bold

(Chorus)
Now I'm on the clouds, I'm shining bright
I'm seen in a new light, I'm feeling alive tonight
I overcame the struggles, I rose above the pain
I'm not the same person, I'm a new person again

(Bridge)
I'm not the same person, I'm a new person again
I'm rising up, I'm breaking free
I'm finding my place, I'm finding my voice
I'm shining bright, I'm in my choice

(Chorus)
Now I'm on the clouds, I'm shining bright
I'm seen in a new light, I'm feeling alive tonight
I overcame the struggles, I rose above the pain
I'm not the same person, I'm a new person again

(Drop)
I'm on the clouds, I'm shining bright
I'm feeling alive, I'm feeling right
I overcame the struggles, I rose above the pain
I'm a new person, I'm a new name

This song is an anthem of triumph and resilience, capturing the feeling of overcoming personal struggles and finding success. The lyrics reflect a sense of disorientation and escapism, transitioning into confidence and achievement. The song blends electronic music with pop elements, creating a catchy and uplifting sound that resonates with the feeling of a euphoric release after a period of hardship. The language suggests a journey from the "underground" to the "clouds," symbolizing the transformation that comes with overcoming personal struggles.`,lyre_response:`[Verse 1]
I'm lost in a crowd, but I don't feel invisible
Lights so bright, but I don't see a thing
Didn't know what I wanted, but I know what I have to do
So I'm running for my life in the underground
[Pre-Chorus]
Clouds, clouds, clouds, clouds
I'm coming up to the clouds
[Chorus]
All my friends are looking up, looking up, looking up
At the cloud that I'm on, the cloud that I'm on
All my friends are looking up, looking up, looking up
At the cloud that I'm on, the cloud that I'm on
I'm on the cloud, the cloud, the cloud, the cloud
So high up that I, that I
I'm seen, I'm seen, I'm seen, I'm seen
I'm on the cloud, the cloud, the cloud, the cloud
So high up that I, that I
I'm seen, I'm seen, I'm seen, I'm seen
[Drop]
I'm on the cloud, the cloud, the cloud, the cloud
So high up that I, that I
I'm seen, I'm seen, I'm seen, I'm seen [Verse 2]
I'm so out of place, but I feel so alive
Someone call a doctor, 'cause I'm in the sky
Didn't know what I wanted, but I know what I have to do
So I'm running for my life in the underground [Pre-Chorus]
Clouds, clouds, clouds, clouds
I'm coming up to the clouds
[Chorus]
All my friends are looking up, looking up, looking up
At the cloud that I'm on, the cloud that I'm on
All my friends are looking up, looking up, looking up
At the cloud that I'm on, the cloud that I'm on
I'm on the cloud, the cloud, the cloud, the cloud
So high up that I, that I
I'm seen, I'm seen, I'm seen, I'm seen
I'm on the cloud, the cloud, the cloud, the cloud
So high up that I, that I
I'm seen, I'm seen, I'm seen, I'm seen
[Drop]
I'm on the cloud, the cloud, the cloud, the cloud
So high up that I, that I
I'm seen, I'm seen, I'm seen, I'm seen`,id:8700423},{name:"Swag Disease (400 Degrees)*",artist:"Lil Uzi Vert ",llama_response:`(Verse 1 - Lil Uzi Vert)
I'm the king of the block, ain't no one touchin' me
Got my two Glocks, they're always on me
I'm the one they all fear, ain't no one near
I'm the one they all cheer, I got that swag disease

I'm from the 1600 block, where the streets are cold
But I'm the one they all know, I'm the one they all hold
I got the edge over all my rivals, you know the deal
I'm the one they all want to be, I'm the one they all feel

(Chorus)
I got that swag disease, it's in my blood
I'm the one they all admire, I'm the one they all should
I'm the king of the block, ain't no one touchin' me
I'm the one they all fear, ain't no one near

(Verse 2 - Playboi Carti)
I'm the one they all look at, I'm the one they all know
Got my flashy jewelry, it's showin' how I flow
I'm the one they all admire, I'm the one they all desire
I'm the one they all want to be, I'm the one they all aspire

I got the spotlight on me, I got the crowd in awe
I'm the one they all attract, I'm the one they all draw
I got the swag disease too, it's in my DNA
I'm the one they all remember, I'm the one they all knew

(Chorus)
I got that swag disease, it's in my blood
I'm the one they all admire, I'm the one they all should
I'm the one they all fear, ain't no one near
I'm the king of the block, ain't no one touchin' me

(Bridge)
I'm the one they all talk about, I'm the one they all know
I'm the one they all want to be, I'm the one they all show
I got the swag disease bad, it's in my soul
I'm the one they all love, I'm the one they all hold

(Chorus)
I got that swag disease, it's in my blood
I'm the one they all admire, I'm the one they all should
I'm the one they all fear, ain't no one near
I'm the king of the block, ain't no one touchin' me

(Outro)
So listen up, y'all, I hope you understand
I'm the one they all want, I'm the one they all demand
I got that swag disease, it's in my DNA
I'm the one they all know, I'm the one they all love.

The beat produced by DP Beats is trap-heavy, with a gritty and energetic vibe that perfectly complements the lyrics. The repetitive and catchy chorus is sure to stick in listeners' heads, while the guest verse from Playboi Carti adds a unique flavor to the track, showcasing his own style and swagger. Overall, this song is a certified banger that embodies the essence of street credibility and swagger, while also showcasing the chemistry and collaboration between Lil Uzi Vert and Playboi Carti.`,lyre_response:`[Intro: Lil Uzi Vert]
Oh, oh, oh, oh, oh (Oh, oh, oh)
I'm from the 1600 block (Oh, 
oh, 1600
), yeah
Carry two Glocks, I'm so reckless (Oh, 
oh, I'm so reckless, 1600
)
That is just how I am (Woah, 1600)
I got swag disease and it's (Oh, I got swag disease and it's, 1600)
Bitch, I got two Glocks (Woah, I got two Glocks, 1600)
I'm so reckless, I tote that (Yeah, I'm so reckless, 1600)
I got swag disease and it's (I got swag disease and it's, 1600)
Bitch, I got two Glocks (Oh, I got two Glocks, 1600)
I'm so reckless, I tote that (Oh, I'm so reckless, 1600)
I got swag disease and it's (Yeah, I got swag disease and it's, 1600)
Bitch, I got two Glocks (I got two Glocks, 1600)
[Verse 1: Lil Uzi Vert]
I got 
seven hundred in my sock (Woah, seven hundred)
I'm in the trenches with a mop (Woah, with a mop)
I got swag disease and it's (I got swag disease and it's, woah)
Bitch, I got two Glocks (Two Glocks, woah)
I'm so reckless, I tote that (Oh, I'm so reckless, 1600)
I got swag disease and it's (I got swag disease and it's, 1600)
Bitch, I got two Glocks (I got two Glocks, 1600)
[Verse 2: Playboi Carti]
Bitch, I been all in your social (All in your social, 1600)
I been all in your mind (All in your mind, 1600)
I got swag disease and it's (Yeah, I got swag disease and it's, 1600)
Bitch, I got two Glocks (I got two Glocks, 1600)
I'm so reckless, I tote that (I'm so reckless, 1600)
I got swag disease and it's (I got swag disease and it's, 1600)
Bitch, I got two Glocks (I got two Glocks, 1600)
[Chorus: Lil Uzi Vert & 
Playboi Carti
]
I got swag disease and it's (
I got swag disease and it's, 1600
)
Bitch, I got two Glocks (
I got two Glocks, 1600
)
I'm so reckless, I tote that (
Oh, I'm so reckless, 1600
)
I got swag disease and it's (
I got swag disease and it's, 1600
)
Bitch, I got two Glocks (
I got two Glocks, 1600
)
I'm so reckless, I tote that (Oh, I'm so reckless, 1600)
I got swag disease and it's (Yeah, I got swag disease and it's, 1600)
Bitch, I got two Glocks (I got two Glocks, 1600) [Outro: Lil Uzi Vert]
Oh, oh, oh, oh, oh (Oh, oh, oh)
I'm from the 1600 block (Oh, 
oh, I'm from the 1600 block
)
Yeah
Carry two Glocks, I'm so reckless (I'm so reckless, 1600)
That is just how I am (Woah, 1600)
I got swag disease and it's (Oh, I got swag disease and it's, 1600)
Bitch, I got two Glocks (Woah, I got two Glocks, 1600)
I'm so reckless, I tote that (Yeah, I'm so reckless, 1600)
I got swag disease and it's (Yeah, I got swag disease and it's, 1600)
Bitch, I got two Glocks (I got two Glocks, 1600)
I'm so reckless, I tote that (Oh, I'm so reckless, 1600)
I got swag disease and it's (Oh, I got swag disease and it's, 1600)
Bitch, I got two Glocks (I got two Glocks, 1600)`,id:4007193},{name:"VALUES",artist:"Justin Timberlake",llama_response:`(Verse 1)
I'm sick of the facade, the masks we wear
The curated lives we show, the secrets we share
Behind the screens, the truth we hide
A culture of superficiality, a world that's divide

(Chorus)
We're chasing the likes, the followers, the fame
But is it worth the cost of our souls in flames?
We're losing ourselves in the game
Of social media fame, of empty dreams

(Verse 2)
We're trapped in a world of instant gratification
Where meaningful connections are just a click away
But the more we scroll, the more we feel
Disconnected, alone, and lost in a sea of steel

(Chorus)
We're chasing the likes, the followers, the fame
But is it worth the cost of our souls in flames?
We're losing ourselves in the game
Of social media fame, of empty dreams

(Bridge)
I long for the days when authenticity reigned
When values like empathy and kindness were the reign
But now we're consumed by the need to impress
And the truth is, it's all just a mess

(Chorus)
We're chasing the likes, the followers, the fame
But is it worth the cost of our souls in flames?
We're losing ourselves in the game
Of social media fame, of empty dreams

(Verse 3)
I see the world around me, it's a sight to behold
A culture of distraction, a society that's cold
We're chasing the highs, the lows, the thrill of the game
But at what cost, when the pain becomes the same

(Chorus)
We're chasing the likes, the followers, the fame
But is it worth the cost of our souls in flames?
We're losing ourselves in the game
Of social media fame, of empty dreams

(Outro)
I'm calling out to the ones who feel the same
Let's break free from the chains that hold us tame
Let's find the truth, let's find our way
To a world where authenticity is the only way.

Musical Composition:

* The song should have a slow tempo, around 110-120 BPM, to convey a sense of reflectiveness and somberness.
* The instrumentation should blend Justin Timberlake's signature pop-R&B sound with a more introspective and emotional tone. This could include a combination of acoustic and electronic instruments, such as guitars, pianos, and synthesizers.
* The melody should be catchy and memorable, with a focus on the lyrics and their message. The hooks should be strong and repetitive, emphasizing the song's themes of disillusionment and the longing for truth and real connection.
* The rhythm should be consistent and driving, with a focus on the drums and percussion. The beat should be steady and reliable, with a few deviations to create tension and emphasis.
* The song should have a clear structure, with a verse-chorus-verse-chorus-bridge-chorus format. This will help to build anticipation and create a sense of release when the chorus hits.

Overall, the song should convey a sense of disillusionment with the current culture and a longing for truth and real connection. The musical composition should blend Timberlake's signature sound with a more introspective and emotional tone, creating a track that is both catchy and thought-provoking.`,lyre_response:`[Intro]
Don't you think it's kinda crazy?
How we gonna fix this mess we're in?
If social media is a jail
Then I think I might be pinched in
[Verse 1]
Everybody's got the best intentions
Figure they can do some good in the world
Get a little bit of attention
Maybe even change a life
Just take a minute, reflect on the journey
How you get where you're at in life
You might be thinking you're an idol
Just remember that you're living a lie
[Chorus]
If you're going to break the facade
Got to do it before it's too late
Better do it before it's too late
You're another statistics
Broken dreams and all the fakes
Couldn't even wait until the show was over
Now the whole world gets to see you lose it
[Verse 2]
Socially defined, the world has lost its mind
It's like the more things change, the more they remain the same
Just different outlets, different times
Still got the same old problems
But we're too busy chasing likes and shares
Ratings and sales to care
Social media is a cage
We're all just living in a frame, yeah [Chorus]
If you're going to break the facade
Got to do it before it's too late
Better do it before it's too late
You're another statistics
Broken dreams and all the fakes
Couldn't even wait until the show was over
Now the whole world gets to see you lose it
[Bridge]
And if you think that this is real
Then you should probably jot your feelings down
While they still mean something
Before they drown in this town
[Verse 3]
The world is hungry, gotta feed 'em
Gotta give 'em what they need, not just what they want
Get 'em while they're young, mold 'em into something
Make a product out of nothing, yeah
It's a bit twisted, but that's how they grow 'em
Like a motherfuckin' tomato, yeah
Pink or red, it don't matter, just as long as it's not blue
We got orders, gotta fill 'em
Fuck the bills, pay the shrink, drink some fucking gin, yeah
[Chorus]
If you're going to break the facade
Got to do it before it's too late
Better do it before it's too late
You're another statistics
Broken dreams and all the fakes
Couldn't even wait until the show was over
Now the whole world gets to see you lose it [Outro]
Don't you think it's kinda crazy?
How we gonna fix this mess we're in?
If social media is a jail
Then I think I might be pinched in
Don't you think it's kinda crazy?
How we gonna fix this mess we're in?
If social media is a jail
Then I think I might be pinched in`,id:8484262},{name:"Money on My Mind",artist:"Sam Smith",llama_response:`Verse 1:
I see the lights, the fame, the fortune
But it's not worth the cost of my soul
I'd rather be true to myself, my art
Than compromise and play the fame game

Chorus:
I'm doing it for the love, not for the money
I'm following my heart, not the trend
I'm not afraid to stand alone
When everyone else is singing the same song

Verse 2:
I've seen the greed, the jealousy, the lies
The industry that tries to break the soul
But I won't be swayed, I won't be bought
I'll keep my integrity, my art whole

Chorus:
I'm doing it for the love, not for the money
I'm following my heart, not the trend
I'm not afraid to stand alone
When everyone else is singing the same song

Bridge:
I know it's hard, I know it's tough
To stand up for what you believe
But I'll take the risk, I'll take the fall
Because in the end, it's all worth it

Chorus:
I'm doing it for the love, not for the money
I'm following my heart, not the trend
I'm not afraid to stand alone
When everyone else is singing the same song

Outro:
I'll keep on singing, I'll keep on writing
For the love of music, not the fame
I'll be true to myself, I'll be true to my art
And I'll never compromise, I'll never start.

This song is written in the style of Sam Smith, with a focus on soulful and emotive vocals, and a narrative that explores the tension between commercial success and artistic integrity. The lyrics are personal and confessional, and maintain a balance between vulnerability and strength. The central theme of the song is the importance of creating music for passion and love, rather than for financial gain. The chorus repeats this theme, emphasizing the importance of staying true to oneself and one's art, even when it goes against the mainstream. The song also touches on the challenges of standing up for one's beliefs and values in the face of industry pressure, but ultimately conveys a message of determination and resolve.`,lyre_response:`[Intro]
Oh, no
Well, kind of
Uh, yeah
[Verse 1]
You've been callin' me, sayin' that you want a refund
You're cancelin' your tickets to my upcoming tour
You're like, "I don't wanna hear your mediocre sound
Unless that sound is coming from a Dodge Durango"
And I'm like, "Well, sadly, I don't own a Dodge Durango
So if you really wanna hear my music, you should probably just stream it
I guess that my success just went to my head, I've been livin' so long
Livin' so long
[Pre-Chorus]
And they said I did it for the money
They said I did it for the power
They said I did it for the money
But really, I did it for the love
[Chorus]
I did it for the love, I did it for the love
I did it for the love, I didn't do it for the money
I did it for the love, I did it for the love
I didn't do it for the money
[Verse 2]
You've been callin' me, sayin' that you're really quite upset
You don't think that my music is good enough for your son or your daughter
You're like, "You should be ashamed of yourself, you're doin' this for the cash"
And I'm like, "Well, actually, I don't think that I've ever been more ashamed
Of doin' anything in my whole life than bein' ashamed
Would mean I'm not true to what I wanna give"
[Pre-Chorus]
And they said I did it for the money
They said I did it for the power
They said I did it for the money
But really, I did it for the love
[Chorus]
I did it for the love, I did it for the love
I did it for the love, I didn't do it for the money
I did it for the love, I did it for the love
I didn't do it for the money [Bridge]
Some people wanna buy my songs and put 'em on their radio stations
Wanna use my voice to sell their perfume or their favorite brands
But really, I just wanna sing my own songs in my own way
And I hope that you'll stick with me and support me each and every day
[Chorus]
I did it for the love, I did it for the love
I did it for the love, I didn't do it for the money
I did it for the love, I did it for the love
I didn't do it for the money
I did it for the love, I did it for the love
I did it for the love, I didn't do it for the money
I did it for the love, I did it for the love
I didn't do it for the money
[Outro]
Oh, no
Well, kind of
Yeah`,id:284741},{name:"Karma (Remix)",artist:"Taylor Swift",llama_response:`(Verse 1)
Karma's got a plan, it's always on the prowl
Watching and waiting, never gonna let you go
She's got a list, a long one, of all the wrongs you've done
And now it's time to pay, you're gonna have some fun

(Chorus)
Oh, karma's a funny thing, it's always on the rise
Gonna make you pay, gonna give you surprise
She's got a way of making things right
And when she does, you'll know she's in the fight

(Verse 2)
You thought you got away, but karma's got your number
Gonna give you what you gave, gonna make it double
You betrayed my trust, you broke my heart
But now it's time to pay, you're gonna start

(Chorus)
Oh, karma's a funny thing, it's always on the rise
Gonna make you pay, gonna give you surprise
She's got a way of making things right
And when she does, you'll know she's in the fight

(Bridge)
Karma's got a sense of humor, she's got a playful grin
Gonna make you suffer, gonna make you spin
You thought you were the boss, you thought you were the one
But now you're gonna learn, you're gonna have fun

(Chorus)
Oh, karma's a funny thing, it's always on the rise
Gonna make you pay, gonna give you surprise
She's got a way of making things right
And when she does, you'll know she's in the fight

(Outro)
So watch out for karma, she's always on the move
She's gonna make you pay, she's gonna make you prove
That what you did was wrong, that what you did was right
And when she's done, you'll see the light.

This song incorporates the theme of karma as an ever-present force, intertwining a sense of poetic justice with a catchy, pop-infused melody. The lyrics personify karma as a powerful entity with a hint of playful vindictiveness, reflecting on past betrayals and the satisfaction of seeing karma act. The song has a balance of sharp wit and melodic hooks, capturing the narrative storytelling that Taylor Swift is known for, while also incorporating a rhythmic flow reminiscent of Ice Spice's style for certain verses. The chorus has a catchy, repetitive phrase that emphasizes the idea of karma as a funny thing that's always on the rise, and the bridge has a playful, vindictive tone that adds a sense of humor to the song. Overall, the song is a fun, catchy exploration of the theme of karma, with a mix of sharp lyrics and melodic hooks that make it a compelling listen.`,lyre_response:`[Intro]
Karma, karma, karma, karma
(Ice Spice)
Karma, karma, karma, karma
(Ice Spice)
Karma, karma, karma, karma
Karma, karma, karma, karma (Ice Spice)
[Verse 1]
I heard she's got a brand new lease on life
After she left you, she done got religion
And she's out here droppin' science like Bill Nye
She'll be alright, you on the other hand
You just a fuckin' hand in her back, right?
Sneakin' in her bed, get out of her head
She doesn't wanna think, she doesn't wanna speak
Just stay the fuck out of her way
[Pre-Chorus]
But that's fine, you'll get what you deserve
I hope it's cold enough in hell for you to burn
[Chorus]
And as for you
Well, I'm sure it's no surprise
That the tables have turned
Now it's your turn to get what you deserve
And I hope it's cold enough in hell for you to burn
[Verse 2]
Don't you get it now, you're the one at hand
The reason why, she won't pick up your calls
You keep pushin' and pushin' and pushin' the issue
But she's got a new man, and he's got a new balls
You keep hittin' the phone, but it ain't gon' get you nowhere
She's happy, you're not, it's a real bummer
You were so lucky, gotta get over her
You're one in a million, you'll never be hers
[Pre-Chorus]
But that's fine, you'll get what you deserve
I hope it's cold enough in hell for you to burn
[Chorus]
And as for you
Well, I'm sure it's no surprise
That the tables have turned
Now it's your turn to get what you deserve
And I hope it's cold enough in hell for you to burn
[Bridge]
As for me, I got my revenge
I hope it's hot enough in hell for you to burn
[Chorus]
And as for you
Well, I'm sure it's no surprise
That the tables have turned
Now it's your turn to get what you deserve
And I hope it's cold enough in hell for you to burn
[Outro]
Karma, karma, karma, karma
Karma, karma, karma, karma
Karma, karma, karma, karma
Karma, karma, karma, karma`,id:9157172},{name:"I’m Not Human",artist:"Lil Uzi Vert ",llama_response:`Verse 1:
I'm floating through the streets, feeling so alone
Like an alien in this world, just trying to find my home
I try to fit in, but it's hard when you're different
I'm not a human, I'm something else, it's a different matter

I keep my secrets hidden, locked away in my mind
I'm scared to let them out, for fear of being left behind
But sometimes I wish I could just let it all unwind
And find a place where I can be myself, without any kind

Chorus:
I'm not a human, I'm something else, it's a different world
I'm just trying to find my place, in this life that's so unfurled
I'm not a human, I'm something else, it's a different tale
I'm just trying to escape, to a place where I can sail

Verse 2:
I see the world around me, but it's not my home
I'm just passing through, trying to find my way back to my dome
I'm searching for a sanctuary, where I can be myself and roam
Free from the chains of society, where I can just be anome

I know I'm not like others, I'm different in every way
But sometimes it feels like a curse, rather than a ray of day
I try to fit in, but it's hard when you're not of this world
I'm not a human, I'm something else, it's a different whirl

Chorus:
I'm not a human, I'm something else, it's a different world
I'm just trying to find my place, in this life that's so unfurled
I'm not a human, I'm something else, it's a different tale
I'm just trying to escape, to a place where I can sail

Bridge:
I know I'm not alone, there are others like me
We're the outcasts and the oddities, the ones who don't fit in with glee
We're the ones who see the world differently, with eyes that are bright
We're the ones who know what it's like, to be an alien in this fight

Chorus:
I'm not a human, I'm something else, it's a different world
I'm just trying to find my place, in this life that's so unfurled
I'm not a human, I'm something else, it's a different tale
I'm just trying to escape, to a place where I can sail

Outro:
So I'll keep on searching, for my personal sanctuary
Where I can be myself, without any kind of hurray
I'm not a human, I'm something else, it's a different world
But I'll find my place, where I can be unfurled.`,lyre_response:`[Intro: Lil Uzi Vert]
I'm not a human, I'm not a human (Woah, woah)
I'm just a human, I'm just a human (Woah, woah)
I'm not a human, I'm not a human
I'm just a human, I'm just a human (Woah, woah)
[Verse 1: Lil Uzi Vert]
Woah, I'm in a world that's not so distant (Not so distant)
A perfect imitation of a human (Human)
But inside I feel like an alien (Alien)
A being that is far from human (Human)
I try to talk but the words won't come (Can't come)
I try to walk but my legs won't move (Won't move)
I'm stuck in my mind and I can't get out (Can't get out)
I'm scared to live but I'm scared to die (Scared to die)
Oh, why? (Why)
Because I'm not a human (Huh? What? Huh?)
[Chorus: XXXTENTACION & 
Lil Uzi Vert
]
I'm not a human
I'm just a human (
Woah, woah
)
I'm just a human (
Woah, woah
)
[Verse 2: XXXTENTACION]
I'm not a human, I'm just a temporary (Temporary)
I know I'm meant for greater things (Greater things)
You don't know my life, you don't know my history (My history)
I was born to die an assassin (An assassin)
I feel no pain, I don't get tired (I don't get tired)
I got a long gun and I'm ready (And I'm ready)
I'm coming to your town, I'ma kill ya (I'ma kill ya)
I know your darkest secrets (Your darkest secrets)
I know you're scared of the unknown (The unknown)
I am your nightmare, I am your worst nightmare
(Woah, woah, 
yeah
) [Chorus: XXXTENTACION & 
Lil Uzi Vert
]
I'm not a human
I'm just a human (Woah, woah)
I'm just a human (Woah, woah)
[Outro: XXXTENTACION]
I'm not a human, I'm just a temporary (Temporary)
I know I'm meant for greater things (Greater things)
You don't know my life, you don't know my history (My history)
I was born to die an assassin (An assassin)
I feel no pain, I don't get tired (I don't get tired)
I got a long gun and I'm ready (And I'm ready)
I'm coming to your town, I'ma kill ya (I'ma kill ya)
I know your darkest secrets (Your darkest secrets)
I know you're scared of the unknown (The unknown)
I am your nightmare, I am your worst nightmare
I'm not a human, I'm just a human`,id:8753696},{name:"I Think I’m Ready",artist:"Katy Perry",llama_response:`(Verse 1)
I've been through the fire and the rain
Survived the heartaches, the pain and the strain
But I never thought I'd find myself open wide
To the possibility of love, without a disguise

I've been strong, independent and free
Never needed anyone, never needed to be
But now I find myself in a new light
Ready to embrace the vulnerability of the night

(Chorus)
I'm ready for love, I'm ready to fly
I'm ready to soar, I'm ready to try
I'm ready to let go, I'm ready to be
Taken by surprise, by the beauty of love's decree

(Verse 2)
I never thought I'd receive flowers without a reason
Or engage in long conversations, with a heart that's a-beatin'
But now I find myself, in a new, unexpected way
Opening up to the possibility of a love that's here to stay

I've been burned before, I've been left in the cold
But this time, I'm different, I'm ready to unfold
The layers of my heart, to reveal the real me
And embrace the love, that's been waiting to set me free

(Chorus)
I'm ready for love, I'm ready to fly
I'm ready to soar, I'm ready to try
I'm ready to let go, I'm ready to be
Taken by surprise, by the beauty of love's decree

(Bridge)
I'm not the same person, that I used to be
I've grown and learned, and found my destiny
And now I'm ready, to love with all my might
And let this new love, take flight

(Chorus)
I'm ready for love, I'm ready to fly
I'm ready to soar, I'm ready to try
I'm ready to let go, I'm ready to be
Taken by surprise, by the beauty of love's decree

(Outro)
I'm ready to embrace, the ups and the downs
The laughter and the tears, the joy and the frowns
I'm ready to love, with every beat of my heart
And find the love, that will set us apart

This song captures the theme of readiness for genuine love, and the transformative journey from skepticism to acceptance of affection. The lyrics convey a sense of self-awareness and vulnerability, as the narrator embraces the possibility of love despite past heartaches. The imagery of receiving flowers without occasion and engaging in long conversations illustrates the nurturing aspects of this newfound relationship. The song has an anthemic chorus, with a mix of self-reflective verses, creating a powerful and uplifting message of readiness for love.`,lyre_response:`[Intro]
My hands are shaking, I need to calm down
You're making me blush, I'm losing my touch now
But I'm always up for a challenge
[Verse 1]
I've got no need for love songs
I've got no need for romance
I've got no need to be made, mmm
I've got no need for your sweet talk
I've got no need for your lies
And I've got no need to be saved, mmm
[Pre-Chorus]
So send me your love, send me your love
Send me your love without an occasion
Send me your love, send me your love
Send me your love, send me your love
[Chorus]
'Cause I've been so lonely, I've been afraid to fall
I've been so lonely, I've been afraid to fall
But you are the one I need, mmm
'Cause I've been so lonely, I've been afraid to fall
I've been so lonely, I've been afraid to fall
But you are the one I need
[Verse 2]
I don't need any flowers, I'll take that as a gesture
And I don't need a date night, I'll take that as a promise
But what I do need is for you to hold me, mmm
I don't need any lies, I'll take the truth instead
Just hold me close and whisper, mmm [Pre-Chorus]
So send me your love, send me your love
Send me your love without an occasion
Send me your love, send me your love
Send me your love, send me your love
[Chorus]
'Cause I've been so lonely, I've been afraid to fall
I've been so lonely, I've been afraid to fall
But you are the one I need, mmm
'Cause I've been so lonely, I've been afraid to fall
I've been so lonely, I've been afraid to fall
But you are the one I need
[Bridge]
Send me your love, send me your love
Send me your love without an occasion
Send me your love, send me your love
Send me your love, send me your love
Send me your love, send me your love
Send me your love without an occasion
Send me your love, send me your love
Send me your love, send me your love
Send me your love, send me your love
Send me your love, send me your love
[Pre-Chorus]
So send me your love, send me your love
Send me your love without an occasion
Send me your love, send me your love
Send me your love, send me your love
[Chorus]
'Cause I've been so lonely, I've been afraid to fall
I've been so lonely, I've been afraid to fall
But you are the one I need, mmm
'Cause I've been so lonely, I've been afraid to fall
I've been so lonely, I've been afraid to fall
But you are the one I need
[Outro]
So send me your love, send me your love
Send me your love without an occasion
Send me your love, send me your love
Send me your love, send me your love
Send me your love, send me your love
Send me your love without an occasion
Send me your love, send me your love
Send me your love, send me your love
Send me your love, send me your love
Send me your love, send me your love`,id:195964},{name:"Houdini",artist:"Dua Lipa",llama_response:`(Verse 1)
I see you from across the room, a flash of magic in the night
Your eyes lock on mine, and I can't help but feel the spark
But like a Houdini act, you disappear without a fight
Leaving me wondering if you're worth the risk, if you're worth the fight

(Chorus)
Coming and going, like a magic trick
You're here and then you're gone, it's like a trick of the mind
I can't help but feel the allure of mystery
But I need proof of worthiness, before I give my heart to thee

(Verse 2)
I ask for signs and proof, but you just smile and shake your head
Saying that love is a game, and I'm just playing at its edge
But I'm not afraid to take the leap, to risk it all on you
I need to know that you're the real deal, before I give my heart to you

(Chorus)
Coming and going, like a magic trick
You're here and then you're gone, it's like a trick of the mind
I can't help but feel the allure of mystery
But I need proof of worthiness, before I give my heart to thee

(Bridge)
I'm not looking for a fling, or a temporary thrill
I need something real, something that will make me whole
I'll play this game of love, but I won't be fooled
I need to know that you're the one, before I give my heart to you

(Chorus)
Coming and going, like a magic trick
You're here and then you're gone, it's like a trick of the mind
I can't help but feel the allure of mystery
But I need proof of worthiness, before I give my heart to thee

(Outro)
So show me what you're made of, prove your worth to me
I'll be the judge of your love, and I'll decide if it's worth the energy
I'm not afraid to be bold, to take the lead in this game
But I need you to prove yourself, before I give my heart to you, before I give my heart away.

The song should have a catchy and upbeat melody, with a confident and empowered tone. The lyrics should flirt with the idea of love and challenge, asking for proof of worthiness. The beat should be pop-centric with a hint of electric rhythm, making it a modern and danceable track that captures the themes of empowerment and elusive love found in the lyrics provided.`,lyre_response:`[Intro]
Don't need no words, don't need no words
Don't need to say, don't need to say
Come and go like Houdini
Come and go like Houdini
[Verse 1]
Sometimes the magic works
Sometimes it don't, but I
Can't get enough, so I wonder if you
Could be the one to make me believe
Can you prove it? Can you prove it?
Am I dreaming? Am I dreaming?
[Pre-Chorus]
I won't stay with you, so give me a reason to
Give me a reason to, give me a reason to
Give me a reason to, give me a reason to
Come and go like Houdini
Come and go like Houdini
[Chorus]
You know I come and go like Houdini
Don't need no words, don't need no words
Come and go like Houdini
Come and go like Houdini
You know I come and go like Houdini
Don't need no words, don't need no words
Come and go like Houdini
Come and go like Houdini
[Verse 2]
I know you got a challenge
On, so show me what you're made of
Prove it to me, prove it to me
Can you handle it? Can you handle it?
Can you handle the love and the danger?
 (Danger)
[Pre-Chorus]
I won't stay with you, so give me a reason to
Give me a reason to, give me a reason to
Give me a reason to, give me a reason to
Come and go like Houdini
Come and go like Houdini [Chorus]
You know I come and go like Houdini
Don't need no words, don't need no words
Come and go like Houdini
Come and go like Houdini
You know I come and go like Houdini
Don't need no words, don't need no words
Come and go like Houdini
Come and go like Houdini
[Bridge]
I won't stay with you, so give me a reason to
Give me a reason to, give me a reason to
Give me a reason to, give me a reason to
Come and go like Houdini
Come and go like Houdini
I won't stay with you, so give me a reason to
Give me a reason to, give me a reason to
Give me a reason to, give me a reason to
Come and go like Houdini
Come and go like Houdini
[Chorus]
You know I come and go like Houdini
Don't need no words, don't need no words
Come and go like Houdini
Come and go like Houdini
You know I come and go like Houdini
Don't need no words, don't need no words
Come and go like Houdini
Come and go like Houdini`,id:9712938},{name:"Drama Queen",artist:"Taylor Swift",llama_response:`(Verse 1)
I was once a heartbreaker's plaything,
Chasing after you like a love song.
But now I'm standing tall and strong,
And I'm moving on, where you can't go.

(Chorus)
I'm over it, I'm over you,
I'm done with the drama, I'm through.
I'm finding my worth, I'm finding my way,
And I'm moving on to a brighter day.

(Verse 2)
You were a queen of drama and pain,
But I'm not gonna let you bring me down again.
I've got a new love, he's got a heart of gold,
And he's gonna make me feel like I'm worth more than a thousand lies.

(Chorus)
I'm over it, I'm over you,
I'm done with the drama, I'm through.
I'm finding my worth, I'm finding my way,
And I'm moving on to a brighter day.

(Bridge)
Sometimes I think back on the way we were,
And I realize how much I had to give.
But you took it all and you tore it apart,
And now I'm standing here, stronger than my heart.

(Chorus)
I'm over it, I'm over you,
I'm done with the drama, I'm through.
I'm finding my worth, I'm finding my way,
And I'm moving on to a brighter day.

(Outro)
I'm not gonna let you bring me down,
I'm gonna rise up and shine.
I'm gonna find my happy end,
And I'm gonna love again, with a love that's true.

This song captures the essence of a confident individual reflecting on a past relationship with a hint of sarcasm and empowerment. The lyrics tell a narrative story of moving on from a heartbreaker who has moved on to someone new, who is described as a "drama queen." The song has a catchy chorus that emphasizes the protagonist's over-it attitude and a bridge that showcases a bittersweet realization of self-worth. The tone is a blend of pop with country elements, featuring Taylor Swift's signature blend of sharp wit and emotional honesty.`,lyre_response:`[Intro]
He's fuckin' with me
(
This one's for all the drama queens
)
And I'm not even famous
(
I just met somebody new
)
[Verse 1]
There's nothing I can do
You've got a brand new crush
And he's got a brand new girl
And I just lost all my sparkle
Over a guys' club
And she's got all the attention
That I once gave you
[Pre-Chorus]
And I'm so over it
Why can't you see?
That I'm better off without ya
[Chorus]
That you're out with some new chick
Kissin' up on my style
And I'm over it, I'm over it
Yeah, that's right, I'm over it
You're on another girl's radar
But you're not even on my radar
And I'm over it, I'm over it
Yeah, that's right, I'm over it [Verse 2]
She's so much better than me
That's why I'm jealous
Wish I could be her
But I know I'm better off
With out ya
[Pre-Chorus]
And I'm so over it
Don't understand
How you can act like that
And then turn around
And make me think
That you were different
But I'm better off without ya [Chorus]
That you're out with some new chick
Kissin' up on my style
And I'm over it, I'm over it
Yeah, that's right, I'm over it
You're on another girl's radar
But you're not even on my radar
And I'm over it, I'm over it
Yeah, that's right, I'm over it
[Bridge]
I just thought you should know
You once lived in my dreams
But now you just occupy my time
Without holding me down
And I just thought you should know
That I've moved on
To a new place
And I like it here
And you're just a memory
Now I know
That I deserve better
And you're so bad for me
And I just thought you should know
[Chorus]
That you're out with some new chick
Kissin' up on my style
And I'm over it, I'm over it
Yeah, that's right, I'm over it
You're on another girl's radar
But you're not even on my radar
And I'm over it, I'm over it
Yeah, that's right, I'm over it`,id:3947016},{name:"Till Further Notice (OG)",artist:"21 Savage",llama_response:`Verse 1:
I was in love, thought it was real, but now I'm feelin' like a fool
She said she loved me, but she was just playin' me, oh
I gave her my heart, but she tore it apart
Now I'm left with these scars, and a broken heart

Chorus:
Relationship fallin' apart, can't find my way back to her heart
Got my demons, they're tearin' me apart
Tryna find the pieces, but they're scattered from the start
Can't seem to heal, feelin' like I'm losin' myself in this dark

Verse 2:
I thought I was the one, but I guess I was wrong
She said she needed space, but now I'm just singin' this song
I gave her my all, but she threw it away
Now I'm left with nothin', just a breakup to stay

Chorus:
Relationship fallin' apart, can't find my way back to her heart
Got my demons, they're tearin' me apart
Tryna find the pieces, but they're scattered from the start
Can't seem to heal, feelin' like I'm losin' myself in this dark

Bridge:
I'm lost in my thoughts, can't seem to find my way
Tryna make sense of it all, but it's just a blur
I'm tryin' to move on, but it's hard when I still feel
The weight of our love, and the mistakes that I made, oh

Chorus:
Relationship fallin' apart, can't find my way back to her heart
Got my demons, they're tearin' me apart
Tryna find the pieces, but they're scattered from the start
Can't seem to heal, feelin' like I'm losin' myself in this dark

Outro:
I'll always remember, the way she made me feel
But I can't keep livin' in the past, gotta let it heal
Got my own flaws, and my own personal battles to fight
But I'll keep on movin', 'cause I know I'll be alright.

This song blends the raw and honest lyricism of 21 Savage with a moody and atmospheric production similar to a collaboration with artists like James Blake and Travis Scott. The lyrics explore themes of relationship fallout and introspective reflection on personal flaws, touching on emotions following a breakup. The song maintains 21 Savage's characteristic style while incorporating a blend of rap and melodic elements, creating a unique and emotive sound.`,lyre_response:`[Intro: James Blake]
I am afraid of loving, afraid of losing
Afraid of my own weaknesses
And when it comes to you
I am not afraid to say
[Verse 1: James Blake]
Your touch, it made me feel alive
But I know that it will soon subside
It’s just a feeling, it will soon go away
But while it lasts, I will take no money for the ride
[Chorus: James Blake]
And when it ends, I’ll be hurt again
But when it ends, I’ll be wiser
When it ends
When it ends
When it ends, I’ll be hurt again
But when it ends, I’ll be wiser
[Verse 2: James Blake]
Why do we fall? So we can learn to get up again
But when it comes to love, the risk is worth the pain
And if you need to go, I will let you go
But while you’re here, I won’t let you go, no
[Chorus: James Blake]
And when it ends, I’ll be hurt again
But when it ends, I’ll be wiser
When it ends
When it ends
And when it ends, I’ll be hurt again
But when it ends, I’ll be wiser
[Verse 3: Travis Scott]
So you ran off with my best friend
It's like we always end, right?
In the same position, same shit
You know, I'm not a patient man
You know that, right?
From the jump, I told you how I was
But you wanna test fate, you're playin' a role
That's not you, right?
You don't wanna lose it all on some bullshit
Talkin' 'bout, "You're just not fulfillin' my needs"
Baby, you're not makin' any sense
It's too late, you already made your decision
It's too late, you already left me high and dry
Better call me when it's no heat between us
Better call me when you're all alone, woo
Better call me, but you won't, yeah, yeah
[Chorus: James Blake]
And when it ends, I'll be hurt again
But when it ends, I'll be wiser
When it ends
When it ends
And when it ends, I'll be hurt again
But when it ends, I'll be wiser
[Outro: James Blake]
I am afraid of loving, afraid of losing
Afraid of my own weaknesses
And when it comes to you
I am not afraid to say`,id:9104119},{name:"Eyes Closed",artist:"Ed Sheeran",llama_response:`Verse 1:
I've been dancing with my eyes closed, trying to escape the pain
Of a love that's lost, of a heart that's broken in vain
The beat of the music is the only thing that stays
As I sway to the rhythm, memories of you drift away

Chorus:
Oh, the years go by, and I'm still alone
Dancing with my eyes closed, trying to find my way back home
But the memories of you, they never fade
Like a ghost in my heart, they're always there, oh

Verse 2:
I've been searching for a way to heal my soul
But the ache of your absence, it never gets old
I close my eyes and I'm back in your arms
But when I open them, you're gone, and I'm left with these charms

Chorus:
Oh, the years go by, and I'm still alone
Dancing with my eyes closed, trying to find my way back home
But the memories of you, they never fade
Like a ghost in my heart, they're always there, oh

Bridge:
I know I'll find my way, I'll find my way to you
But until then, I'll keep on dancing, with my eyes closed, too
I'll hold on to the memories, and the love we shared
And I'll keep on moving, through the years, with my heart unbroken and bare

Chorus:
Oh, the years go by, and I'm still alone
Dancing with my eyes closed, trying to find my way back home
But the memories of you, they never fade
Like a ghost in my heart, they're always there, oh

Outro:
I'll keep on dancing, with my eyes closed tight
Trying to escape the pain, and the longing of the night
But the memories of you, they'll always stay
And I'll keep on moving, until I find my way back to you, someday.

This song is written in the style of Ed Sheeran, with a focus on emotional imagery and a contemplative, introspective tone. The lyrics convey a sense of longing and coping with the loss of a loved one, set against the backdrop of a year spent in isolation. The chorus emphasizes the slow passage of time and the persistence of memories of the person who's gone, with a musical composition that builds from contemplative verses to a more powerful and moving chorus. The use of metaphor, with the dancing alone with eyes closed, adds a sense of yearning and escape to the song, while the vivid emotional imagery and repetition of the chorus create a sense of nostalgia and longing.`,lyre_response:`[Verse 1]
I'm in the kitchen, it's one o'clock in the morning
I'm not usually up this late, but I was drinking
And thinking 'bout you, and I got to say, I'm feeling
A little bit lonely, wishing you were here with me
It's been a year today, since we last saw each other
One whole year, I can't believe it's been that long
Feels like just yesterday, we were together
Soaking up the sun in the early morn
Well, I'm still sober, that's one good thing, I suppose
I'm not as messed up as I was before I met you
But, now you're gone and I'm alone, so I may as well
Dance with somebody, so I close my eyes and
Dance with somebody, so I close my eyes and
Dance with somebody, so I close my eyes and
Dance with somebody, so I close my eyes and
[Chorus]
Time keeps slowing down, I'm losing you more quickly
Than I'm losing my mind, please come back, otherwise
I'll be dancing with somebody, so I close my eyes and
I'll be dancing with somebody, so I close my eyes and
I'll be dancing with somebody, so I close my eyes and
I'll be dancing with somebody, so I close my eyes and
[Verse 2]
In the room, it's spinning, I need to get some rest
I'm hoping that soon, I'll be able to forget you
Sleep isn't coming, I'm staring at the ceiling, it's
Been two years now, since we last saw each other
Two whole years, I can't believe it's been that long
Feels like just yesterday, we were together
Fighting against the world, trying to make it better
Well, I'm still alone, that's one thing that remains
And you're gone and I'm alone, so I may as well
Dance with somebody, so I close my eyes and
Dance with somebody, so I close my eyes and
Dance with somebody, so I close my eyes and
Dance with somebody, so I close my eyes and
[Chorus]
Time keeps slowing down, I'm losing you more quickly
Than I'm losing my mind, please come back, otherwise
I'll be dancing with somebody, so I close my eyes and
I'll be dancing with somebody, so I close my eyes and
I'll be dancing with somebody, so I close my eyes and
I'll be dancing with somebody, so I close my eyes and`,id:8473040},{name:"IDGAF",artist:"Drake",llama_response:`(Verse 1)
I'm livin' my best life, ain't no one gonna tell me how
I'm runnin' this game, got my own flow, you know
I'm from the 6, but now I'm takin' over the world
Got my own label, got my own girl, she's a superstar
I don't care what they say, I'm the king of this game
Got my own style, got my own fame, ain't no one gonna claim

I'm rockin' diamond bracelets, got my own private jet
Got my own mansion, got my own private jet
I'm the man of the hour, got my own empire
Got my own throne, got my own fire
I'm the king of the game, ain't no one gonna stop me
Got my own flow, got my own groove, you know

(Chorus)
I'm livin' my best life, ain't no one gonna bring me down
I'm on top of the world, ain't no one gonna wear the crown
I'm unstoppable, ain't no one gonna stop me now
I'm the king of the game, ain't no one gonna bring me down

(Verse 2)
I got my own crew, they all wear my crown
We're takin' over the game, we're takin' it to the throne
I got my own rhymes, they all flow like a stream
I'm the king of the game, ain't no one gonna beat me
I'm the one they all know, I'm the one they all fear
I'm the king of the game, ain't no one gonna bring me down to tears

I got my own style, got my own vibe
I'm the king of the game, ain't no one gonna take my life
I'm the one they all want to be, I'm the one they all want to see
I'm the king of the game, ain't no one gonna take my crown from me

(Bridge)
I'm the king of the game, ain't no one gonna stop me now
I'm on top of the world, ain't no one gonna bring me down
I'm unstoppable, ain't no one gonna stop me now
I'm the king of the game, ain't no one gonna bring me down

(Chorus)
I'm livin' my best life, ain't no one gonna bring me down
I'm on top of the world, ain't no one gonna wear the crown
I'm unstoppable, ain't no one gonna stop me now
I'm the king of the game, ain't no one gonna bring me down

(Outro)
So if you're feelin' me, let's raise our glasses high
We're the kings of the game, we're takin' over the sky
We're unstoppable, we're unbreakable, we're unforgettable
We're the kings of the game, ain't no one gonna bring us down to our knees.`,lyre_response:`[Intro]
Yeah, yeah, yeah
Yeah, yeah, yeah, yeah, yeah
Yeah, yeah, yeah
Yeah, yeah, yeah, yeah, yeah
Yeah, yeah, yeah
Yeah, yeah, yeah, yeah, yeah
Yeah, yeah, yeah
Yeah, yeah, yeah, yeah, yeah
(
Yeah, yeah, yeah
)
[Verse 1]
Brand new bottles, all white girls
And all the dudes are black in this club
And everybody got guns, and I'm like, why?
But I got one too, so I'm not gon' get into that
This pistol got diamonds on it, like Rihanna
You know I'm the one who holds Toronto down
I'm in the club and I see someone I know
But I'm not gon' talk to him, I hate that fucking nigga
And I don't care what no one gotta say
I'm livin' my life, in the end, it's not gonna go my way
[Pre-Chorus]
But one thing's for sure, bitch, I'm gonna pay
Everything in cash, yeah, I'm breakin' all the rules
Yeah, I'm breakin' all the rules
I'm livin' my life, I'm breakin' all the rules
[Chorus]
Cause I don't wanna, I don't wanna, I don't wanna hurt no more
And I don't wanna, I don't wanna, I don't wanna cry no more
I don't wanna, I don't wanna, I don't wanna hurt no more
And I don't wanna, I don't wanna, I don't wanna cry no more
I'm livin' my life, I'm breakin' all the rules
[Verse 2]
I got a problem with people that can't do themselves
Like, how you gonna front on me then go home to a nigga
That you love and he die, and now you stuck here with me
And all you can do is focus on what I'm wearin', like, "Who did that?"
Bitch, I can't even begin to count the number of times
That I've had to do the double-take 'cause you look like someone I used to date
And I just pretend that I never heard your voice or seen your face
But it's difficult 'cause we seem to run in the same circles
And everybody seems to know that we don't get along
But that's the reason why I'm so good at this song
[Pre-Chorus]
But one thing's for sure, bitch, I'm gonna pay
Everything in cash, yeah, I'm breakin' all the rules
Yeah, I'm breakin' all the rules
I'm livin' my life, I'm breakin' all the rules
[Chorus]
Cause I don't wanna, I don't wanna, I don't wanna hurt no more
And I don't wanna, I don't wanna, I don't wanna cry no more
I don't wanna, I don't wanna, I don't wanna hurt no more
And I don't wanna, I don't wanna, I don't wanna cry no more
I'm livin' my life, I'm breakin' all the rules
[Verse 3]
Yeah, I got two pairs of twins, that's eight kids total
And they all on Instagram, they all follow me
And they all got my back when people be hating
'Cause they know that I'm the one that's gonna provide for them
Yeah, I'm a daddy at heart, even though I'm young
I know that the role that I'm in, it's not easy for everybody
But I promise you this, if you stick with me, we gon' make it
And we gon' live a life that they can only dream of, like
[Pre-Chorus]
But one thing's for sure, bitch, I'm gonna pay
Everything in cash, yeah, I'm breakin' all the rules
Yeah, I'm breakin' all the rules
I'm livin' my life, I'm breakin' all the rules
[Chorus]
Cause I don't wanna, I don't wanna, I don't wanna hurt no more
And I don't wanna, I don't wanna, I don't wanna cry no more
I don't wanna, I don't wanna, I don't wanna hurt no more
And I don't wanna, I don't wanna, I don't wanna cry no more
I'm livin' my life, I'm breakin' all the rules
I don't wanna, I don't wanna, I don't wanna hurt no more
And I don't wanna, I don't wanna, I don't wanna cry no more
I'm livin' my life, I'm breakin' all the rules
I'm livin' my life, I'm breakin' all the rules
[Outro]
Yeah, yeah, yeah
Yeah, yeah, yeah, yeah, yeah
Yeah, yeah, yeah
Yeah, yeah, yeah, yeah, yeah
Yeah, yeah, yeah
Yeah, yeah, yeah, yeah, yeah
(
Yeah, yeah, yeah
)`,id:7451924},{name:"Poet and Parade",artist:"Travis Scott ",llama_response:`Verse 1 (Poet):
I'm the king of the game, ain't no one touchin' me
Got my own lane, ain't no one in my seat
Fast cars, fast life, ain't no time to chill
Got my own style, ain't no one killin' my thrill
I'm the one they all come to see, ain't no one in my league
Got my own flow, ain't no one stealin' my sheen
I'm the one they all know, ain't no one in my zone
Got my own swag, ain't no one takin' my throne

Chorus:
I'm livin' my best life, ain't no one gonna bring me down
I'm on top of the world, ain't no one gonna wear this crown
I'm the king of the game, ain't no one gonna take my place
I'm the one they all know, ain't no one gonna break my face

Verse 2 (Parade):
I'm the one they all love, ain't no one gonna stop me now
Got my own crew, ain't no one gonna bring me down
Fast cars, fast life, we're takin' over town
Got my own sound, ain't no one gonna wear this crown
We're the ones they all know, ain't no one gonna take our place
Got my own style, ain't no one gonna break this pace
We're the kings of the game, ain't no one gonna take our throne

Chorus:
We're livin' our best lives, ain't no one gonna bring us down
We're on top of the world, ain't no one gonna wear this crown
We're the kings of the game, ain't no one gonna take our place
We're the ones they all know, ain't no one gonna break our face

Bridge:
We're unstoppable, ain't no one gonna bring us down
We're the kings of the game, ain't no one gonna wear this crown
We're the ones they all know, ain't no one gonna take our place
We're the kings of the game, ain't no one gonna take our throne

Outro:
We're the ones they all know, ain't no one gonna bring us down
We're the kings of the game, ain't no one gonna wear this crown
We're the ones they all know, ain't no one gonna take our place
We're the kings of the game, ain't no one gonna take our throne.

This song is written in the style of Travis Scott, incorporating his signature auto-tuned vocals, atmospheric beats, and ad-libs. The lyrics reflect a heady mix of hedonism and confidence, with a blend of melodic hooks and hard-hitting verses that boast about wealth, street credibility, and sexual conquests. The song has two distinct parts, "Poet" and "Parade," each with its own vibe and mood. The first part, "Poet," has an introspective vibe, while the second part, "Parade," switches to an energetic and celebratory mood, as if leading a parade of luxury and excess. The song's chorus is catchy and memorable, with a repetitive hook that emphasizes the idea of being on top of the world and invincible against legal troubles. Overall, this song would be a great addition to Travis Scott's discography and would undoubtedly appeal to his fans.`,lyre_response:`[Intro: Swae Lee]
Unreal, what is this?
I thought I was just dreaming, woo
I thought I was just dreaming
[Verse 1: Travis Scott]
I am not a poet, but I fuck like one
Unprotected, no condom, my darling, I done fucked the encyclopedia
I done fucked her mother, sister and nieces, they all wanna have a threesome
I am invincible, no handcuffs, but my pants still have the holes for them
I done fucked your bitch, I done fucked your bitch's friends
I done fucked your bitch's mama, I done fucked your bitch's dog
I am invincible, they can't sue me, they can't sue me
I am invincible, I done fucked your bitch, I done fucked your bitch's sister
I done fucked your bitch's cousins, I done fucked your bitch's kids, oh yeah
[Pre-Chorus: Travis Scott]
I done fucked your bitch while you was at work, yeah
I done fucked your bitch while you was at work, yeah
I done fucked your bitch while you was at work, yeah
I'm an ad-lib, motherfucker, work, yeah
[Chorus: Swae Lee]
I done fucked your bitch while you was at work, yeah
I done fucked your bitch while you was at work, yeah
I done fucked your bitch while you was at work, yeah
I'm an ad-lib, motherfucker, work
[Verse 2: Travis Scott]
I done fucked your bitch while you was at work, yeah
I done fucked your bitch while you was at work, yeah
I done fucked your bitch while you was at work, yeah
I done fucked your bitch while you was at work, yeah
I done fucked your bitch while you was at work, yeah
I done fucked your bitch while you was at work, yeah
I done fucked your bitch while you was at work, yeah
[Pre-Chorus: Travis Scott]
I done fucked your bitch while you was at work, yeah
I done fucked your bitch while you was at work, yeah
I done fucked your bitch while you was at work, yeah
I'm an ad-lib, motherfucker, work, yeah
[Chorus: Swae Lee & 
Travis Scott
]
I done fucked your bitch while you was at work, yeah
I done fucked your bitch while you was at work, yeah
I done fucked your bitch while you was at work, yeah
I'm an ad-lib, motherfucker, work
I done fucked your bitch while you was at work, yeah
I done fucked your bitch while you was at work, yeah
I done fucked your bitch while you was at work, yeah
I done fucked your bitch while you was at work, yeah
I done fucked your bitch while you was at work, yeah
I done fucked your bitch while you was at work, yeah
I'm an ad-lib, motherfucker, work [Bridge: Swae Lee & 
Travis Scott
]
Uh, I done fucked your bitch while you was at work, yeah
I done fucked your bitch while you was at work, yeah
Uh, I done fucked your bitch while you was at work, yeah
I'm an ad-lib, motherfucker, work, yeah
Uh, I done fucked your bitch while you was at work, yeah
I done fucked your bitch while you was at work, yeah
Uh, I done fucked your bitch while you was at work, yeah
I done fucked your bitch while you was at work, yeah
I done fucked your bitch while you was at work, yeah
I'm an ad-lib, motherfucker, work
[Chorus: Swae Lee]
I done fucked your bitch while you was at work, yeah
I done fucked your bitch while you was at work, yeah
I done fucked your bitch while you was at work, yeah
I'm an ad-lib, motherfucker, work
[Outro: Swae Lee]
I'm an ad-lib, motherfucker, work`,id:9117279},{name:"Cool for the Summer",artist:"Demi Lovato",llama_response:`Verse 1:
I've got a secret, it's oh so sweet
A summer fling that can't be beat
We sneak around, just you and me
A taste for the cherry, that's all we need

Chorus:
Cool for the summer, we're living our best lives
No strings attached, just fun and vibes
We'll make memories, and we'll take the ride
Cool for the summer, we'll be alright

Verse 2:
We'll dance under the stars, and we'll play in the sun
Our love is temporary, but it's just begun
We'll laugh and we'll love, and we'll have our way
Cool for the summer, every single day

Chorus:
Cool for the summer, we're living our best lives
No strings attached, just fun and vibes
We'll make memories, and we'll take the ride
Cool for the summer, we'll be alright

Bridge:
We'll take our time, and we'll make it last
We'll cherish every moment, and we'll never look back
This summer fling, it's the real deal
Cool for the summer, it's the way we feel

Chorus:
Cool for the summer, we're living our best lives
No strings attached, just fun and vibes
We'll make memories, and we'll take the ride
Cool for the summer, we'll be alright

Outro:
We'll be cool for the summer, and we'll never say goodbye
We'll keep on loving, until the end of time
A summer fling, that's the best of it
Cool for the summer, we'll always be it.

The song is written in the style of Demi Lovato, with a confident and bold attitude towards a casual relationship. The lyrics explore themes of desire, secrecy, and the thrill of something temporary, with a catchy and anthemic chorus about being "cool for the summer." The song has a strong hook with repeatable refrains, and the melody is pop-driven with a playful tone conveyed through suggestive metaphors like "a taste for the cherry." The vocals are powerful and showcase both range and emotion, embodying the energy and style reminiscent of Demi Lovato's pop anthems.`,lyre_response:`[Intro]
Cool for the summer
Cool for the summer
[Verse 1]
I'm only interested in getting you off
I'll make it worth your while so, so, so
We can keep this just between us, yeah
'Cause I don't want to ruin your reputation
And I'm sure as heck not looking for a relationship
[Pre-Chorus]
It's gonna be so simple
Just lovers in secret
It's gonna be so simple
Being your type, huh
[Chorus]
I'm cool for the summer
I'm cool for the summer
I'm cool for the summer
I'm cool for the summer
I'm cool for the summer
[Post-Chorus]
Yeah, yeah, yeah
Yeah, yeah, yeah
[Verse 2]
You got that body for the summer
We can livin' it up 'cause, 'cause, 'cause
I don't wanna hear you talkin' down
Yourself, reposition your priorities
Say you wanna have some fun this summer
Before you fall in love this winter [Pre-Chorus]
It's gonna be so simple
Just lovers in secret
It's gonna be so simple
Being your type
[Chorus]
I'm cool for the summer
I'm cool for the summer
I'm cool for the summer
I'm cool for the summer
I'm cool for the summer
[Post-Chorus]
Yeah, yeah, yeah
Yeah, yeah, yeah
[Refrain]
He's tryna make me his, but I'm (I'm)
Just tryna make you my (you my)
Baby, we can play a game of (summer)
"I'm cool for the"
Summer, summer, yeah
[Verse 3]
I don't wanna fall in love this winter
I just wanna make it through the summer
With a little fun and a little love
And you can be the one I do it with, huh
'Cause I'm cool for the summer
I'm cool for the summer
I'm cool for the summer
I'm cool for the summer
I'm cool for the summer
[Chorus]
I'm cool for the summer
I'm cool for the summer
I'm cool for the summer
I'm cool for the summer
I'm cool for the summer
[Post-Chorus]
Yeah, yeah, yeah
Yeah, yeah, yeah
Yeah, yeah, yeah
Yeah, yeah, yeah
[Outro]
I'm cool for the summer
I'm cool for the summer
I'm cool for the summer
I'm cool for the summer
I'm cool for the summer`,id:2158461},{name:"Hits Different",artist:"Taylor Swift",llama_response:`Verse 1:
I'm dancing through the night, trying to shake off the blues
But every flashing light, every beat of the drum
Pulls me back to you, like a ghost in my shoes
I'm lost in the haze, of memories so true

Chorus:
It hits different this time, like a punch in the heart
'Cause I genuinely loved you, from the very start
Trying to move on, but it's hard to let go
Of the one that I loved, and the life that we know

Verse 2:
My friends are trying to cheer me up, with their laughter and their lies
But I can't shake this feeling, like a shadow in my eyes
I'm trying to find my way, through the dark of the night
But the ghosts of our past, keep me up in the fight

Chorus:
It hits different this time, like a punch in the heart
'Cause I genuinely loved you, from the very start
Trying to move on, but it's hard to let go
Of the one that I loved, and the life that we know

Bridge:
I know I'll find my way, through the pain and the strife
But for now, I'm stuck in this place, where I can't find my life
I'll keep on dancing, through the tears and the rain
And maybe someday, I'll find love again

Chorus:
It hits different this time, like a punch in the heart
'Cause I genuinely loved you, from the very start
Trying to move on, but it's hard to let go
Of the one that I loved, and the life that we know

Outro:
I'm fading away, in the neon lights of the night
But I'll always remember, the love that we had in sight
It hits different this time, like a punch in the heart
But I'll keep on dancing, through the dark and the start.

Musical Arrangement:

* The song should have a slow-building, introspective vibe, with a steady drumbeat and atmospheric synths in the background.
* The chorus should have a catchy, anthemic quality, with a soaring melody and a driving beat.
* The verses should have a more subdued, introspective feel, with a focus on storytelling and lyrical depth.
* The bridge should have a more emotional, reflective quality, with a simpler melody and a focus on the emotional impact of the lyrics.
* The song should have a mix of country and pop sensibilities, with a focus on storytelling and emotional authenticity.

Lyrical Themes:

* Heartbreak and personal growth
* The struggle to move on from a past relationship
* The impact of memories on the healing process
* The support of friends and loved ones during difficult times
* The search for meaning and purpose in the aftermath of a breakup.

Melodic Ideas:

* The chorus should have a soaring, anthemic quality, with a catchy melody that sticks in the listener's head.
* The verses should have a more subdued, introspective feel, with a focus on storytelling and lyrical depth.
* The bridge should have a more emotional, reflective quality, with a simpler melody and a focus on the emotional impact of the lyrics.
* The song should have a mix of country and pop sensibilities, with a focus on storytelling and emotional authenticity.

Overall, this song should capture the emotional turmoil of trying to move on from a past relationship, with a focus on the struggle to let go of memories and the support of friends and loved ones during difficult times. The song should have a catchy, anthemic quality, with a focus on storytelling and emotional authenticity, and a mix of country and pop sensibilities.`,lyre_response:`[Intro]
(
It hits differently this time
)
[Verse 1]
I'm in a state of panic, trying to get by
On my own, but I'm not really sure I can
I'm drinking my weight in red wine
Just to get you out of my head
(
It hits differently this time
)
[Pre-Chorus]
I'm in a state of mind
When I'm not really sure what's real
I chased you out of my heart
Now you're gone and I'm left with this feeling
[Chorus]
It hits differently this time
Because you were the one
I genuinely lovеd
Yeah, it hits differently this time
[Verse 2]
I'm in a state of peace, I'm doing just fine
I got a lot of great things going on in my life
I've got some amazing friends who are always there for me
I don't need you to feel alive (It hits differently this time)
[Pre-Chorus]
But tonight, I'm in a state of mind
Where I'm not really sure what's real
I see you in my drinks and I feel you on my skin
You're everywhere I go, inside my head
[Chorus]
It hits differently this time
Because you were the one
I genuinely loved
Yeah, it hits differently this time
[Bridge]
It's been six months since we broke up
And I'm still not over it
Thoughts of you keep haunting me
Like I can't shake it
(
It hits differently this time
)
[Chorus]
It hits differently this time
Because you were the one
I genuinely loved
Yeah, it hits differently this time
It hits differently this time
Because you were the one
I genuinely loved
Yeah, it hits differently this time`,id:8461583},{name:"1 Thing About Me",artist:"Travis Scott ",llama_response:`(Verse 1)
I'm the king of my own kingdom, ain't no one gonna tell me what to do
I'm unstoppable, my flow's like a river, it's true
I don't need no one's approval, I'm the one in control
My confidence is unshakable, I'm on top of the roll

(Chorus)
I'm a self-made man, ain't no one gonna bring me down
I'm unbreakable, my spirit's unbound
I won't be swayed by the haters, I'll keep on climbing high
My loyalty is to myself, I won't be denied

(Verse 2)
Critics try to bring me down, but I won't fall from grace
My success is my own, I won't let anyone take my place
I'm a warrior, a fighter, I won't be held back by the past
My future's bright, my heart is aglow, I won't be last

(Chorus)
I'm a self-made man, ain't no one gonna bring me down
I'm unbreakable, my spirit's unbound
I won't be swayed by the haters, I'll keep on climbing high
My loyalty is to myself, I won't be denied

(Bridge)
I'm a lion in the wild, I won't be caged or tamed
My spirit's untamed, my heart's on fire, I won't be named
I'll keep on fighting, I won't be held down
My success is my own, I won't let anyone wear the crown

(Verse 3)
I'm a force to be reckoned with, I won't be ignored
My voice will be heard, my message will be blurred
I'll keep on rising, I won't be brought down
My confidence is unshakable, I'm wearing my crown

(Chorus)
I'm a self-made man, ain't no one gonna bring me down
I'm unbreakable, my spirit's unbound
I won't be swayed by the haters, I'll keep on climbing high
My loyalty is to myself, I won't be denied

(Outro)
I'm the master of my fate, I won't be controlled
My destiny is mine, I won't be told
I'll keep on pushing, I won't be held back
My success is my own, I won't be attacked.

This song embodies the themes of self-reliance, loyalty to oneself, and maintaining success and composure amidst chaos, while also incorporating a gritty and atmospheric trap beat with autotuned vocals that reflect a blend of hedonism and introspection. The lyrics are written in the style of Travis Scott, with a focus on the unwavering confidence and self-reliance of the individual, and the dismissal of critics. The song's message is one of resilience and determination, with the protagonist refusing to be swayed or controlled by others, and instead, forging their own path to success.`,lyre_response:`[Intro: Meek Mill]
I'm with my nigga, Travis Scott
I'm with my nigga, T-Minus
You know, the kid that’s producing the beat
We just vibe, I'm on the beat
Hit the top, yeah, this shit sound good, don't it?
Let's hit the top, yeah, this shit sound good, don't it?
[Verse 1: Travis Scott]
Hey, if I got rich off of lean, what more could you ask for?
You bitches on a shit list, you see who the real ones is
If the feds hit the mansion, nigga, know I'm gonna be strapped
You can't count me out, no, not even if I'm smoking out the back
I don't need you hoes, I need the cookie, you is just a pack
I be in my bag, I don't need these bitches, all they do is attack
When it's all said and done, nigga, know that I'm still gonna be strapped
[Refrain: Travis Scott]
Why would I give you loyalty when you ain't give me any?
Why would I trust you? You ain't never trusted me
Why would I give you loyalty when you ain't give me any?
Why would I trust you? You ain't never trusted me
[Chorus: Travis Scott]
I can't be controlled, I can't be controlled
I can't be controlled, I can't be controlled
I can't be controlled, I can't be controlled
I can't be controlled, I can't be controlled
I can't be controlled, I can't be controlled
I can't be controlled, I can't be controlled
I can't be controlled, I can't be controlled
I can't be controlled, I can't be controlled
I can't be controlled [Verse 2: Travis Scott]
I'm a man of the people, can't let my niggas go hungry
We put the "w" in the words like swag and bossy
Me and my niggas get to the money, we don't take a nappy
We make the "w" in the words when we say savage and hungry
I don't need you hoes, I need the cookie, you is just a pack
I be in my bag, I don't need these bitches, all they do is attack
When it's all said and done, nigga, know that I'm still gonna be strapped
[Refrain: Travis Scott]
Why would I give you loyalty when you ain't give me any?
Why would I trust you? You ain't never trusted me
Why would I give you loyalty when you ain't give me any?
Why would I trust you? You ain't never trusted me
[Chorus: Travis Scott]
I can't be controlled, I can't be controlled
I can't be controlled, I can't be controlled
I can't be controlled, I can't be controlled
I can't be controlled, I can't be controlled
I can't be controlled, I can't be controlled
I can't be controlled, I can't be controlled
I can't be controlled, I can't be controlled
I can't be controlled, I can't be controlled
I can't be controlled [Outro: Meek Mill & 
Travis Scott
]
It's a new rule, it's a new rule
It's a new rule, it's a new rule
It's a new rule, it's a new rule
That you can't be controlled, that you can't be controlled
You can't be controlled, you can't be controlled
It's a new rule, it's a new rule
It's a new rule, it's a new rule
It's a new rule, it's a new rule
That you can't be controlled, that you can't be controlled
You can't be controlled, you can't be controlled
It's a new rule, it's a new rule
It's a new rule, it's a new rule
It's a new rule, it's a new rule
That you can't be controlled, that you can't be controlled
You can't be controlled, you can't be controlled`,id:2016798},{name:"Am I Dreaming",artist:"Pitbull",llama_response:`(Verse 1)
I've been through the fire, felt the flames so high
But I won't let it break me, no, I won't say die
I've been knocked down, but I'm still on my feet
Got my eyes on the prize, can't be beat

I've seen the darkest nights, but I won't give in
Gonna rise above, gonna make my dreams spin
I'm a survivor, ain't no one gonna bring me down
I'm a warrior, I'm wearing my crown

(Chorus)
Are you feeling me? Are you feeling the pain?
Are you ready to rise? Are you ready to sustain?
We ain't gonna stop, we ain't gonna give in
We're gonna keep pushing, we're gonna win

(Verse 2)
I grew up in the streets, but I learned to fight
I ain't never been broken, I ain't never been beat
I got my roots in the ground, my community by my side
We're gonna make it through, we're gonna reach the other side

I've seen the best of times, I've seen the worst
But I'm still standing, I'm still on the quest
I won't give up, I won't give in
I'm gonna keep pushing, I'm gonna win

(Bridge)
So if you're feeling lost, if you're feeling alone
Just know you're not the only one who's feeling that way
We're all in this together, we're all in the same boat
But we ain't gonna sink, we ain't gonna float

(Chorus)
Are you feeling me? Are you feeling the pain?
Are you ready to rise? Are you ready to sustain?
We ain't gonna stop, we ain't gonna give in
We're gonna keep pushing, we're gonna win

(Outro)
So when you're feeling down, when you're feeling blue
Just remember these words, just remember what I've been through
Keep pushing forward, keep pushing through
We're gonna make it, we're gonna make it through.

This song in the style of Pitbull captures a spirit of resilience and determination against life's challenges, with an energetic urban beat and lyrics that convey a message of perseverance and community support. The narrative of personal growth and overcoming adversity is interwoven throughout the song, with a shout-out to one's roots and community, all while maintaining a vibe perfect for a club setting. The catchy chorus emphasizes the message of not giving up despite feeling overwhelmed and beaten, with a question of whether there are others facing similar struggles.`,lyre_response:`[Intro]
Mr. Worldwide – I'm back again
Mr. Worldwide – I'm back again
I'm back again, yeah, yeah
[Verse 1]
Mr. Worldwide – I'm back again
Mr. Worldwide – I'm back again
I'm back again, yeah
It's been a while since I did it my way
But now I'm back in the game, yeah
I'm feelin' like Michael, Jordan in '97
That's why I'm back again, yeah, yeah
[Chorus]
Is anybody out there?
Is anybody out there?
I'm feelin' so overwhelmed, feelin' so beat
Is anybody out there?
(Is anybody out there?)
[Bridge]
Oh-oh-oh-oh
Oh-oh-oh-oh
Is anybody out there?
[Verse 2]
Mr. Worldwide – I'm back again
Mr. Worldwide – I'm back again
I'm back again, yeah
I was just a young boy from the ghetto
I had some haters, but I stayed true to myself
Look, I'm back again, yeah, yeah
[Chorus]
Is anybody out there?
Is anybody out there?
I'm feelin' so overwhelmed, feelin' so beat
Is anybody out there?
(Is anybody out there?)
[Bridge]
Oh-oh-oh-oh
Oh-oh-oh-oh
Is anybody out there?
[Verse 3]
Mr. Worldwide – I'm back again
Mr. Worldwide – I'm back again
I'm back again, yeah
I'm talkin' to you, my Cuban culture
I'm talkin' to you, my Puerto Rican brothers
I'm talkin' to you, my Mexican brothers and sisters
I'm talkin' to you, my Honduran, my Guatemalan, my Mexican, my Dominican
I'm back again, yeah
[Chorus]
Is anybody out there?
Is anybody out there?
I'm feelin' so overwhelmed, feelin' so beat
Is anybody out there?
(Is anybody out there?)
[Outro]
Oh-oh-oh-oh
Oh-oh-oh-oh
Is anybody out there?
Is anybody out there?
Oh-oh-oh-oh
Oh-oh-oh-oh
Is anybody out there?
(Is anybody out there?)`,id:9151365},{name:"Chemical",artist:"Post Malone",llama_response:`(Verse 1)
I'm smokin' in the car, feelin' like a star
You by my side, we're chasin' that high
But it's a vicious cycle, we're stuck in this war
Fightin' at the bar, but we can't stop the score

Chemicals in my veins, they keep me on the line
Can't escape the pull, it's like a crime
Every time we kiss, it's like a loaded gun
I know I'll be back, but I can't stop runnin'

(Chorus)
We're caught in a love that's addictive and cold
A high that's killin' us, but we can't let go
We're drownin' in a sea of emotions so bold
But we're stuck in this cycle, can't seem to break the hold

(Verse 2)
I see the signs, but I can't stop the pain
You're my drug of choice, my heart's in flames
I know I'll lose myself, but I can't help but play
The game of love, where we're both the winners and the fray

Fumes fill the air, we're both on fire
But we can't stop the desire, it's like a burning desire
We're trapped in this hell, but we can't retire
From this love that's killin' us, but we can't ignore

(Chorus)
We're caught in a love that's addictive and cold
A high that's killin' us, but we can't let go
We're drownin' in a sea of emotions so bold
But we're stuck in this cycle, can't seem to break the hold

(Bridge)
I know I'll lose myself, but I can't help but stay
In this love that's killin' us, but it's the only way
We're caught in a web of desire and pain
But we can't stop the love, it's like a burning flame

(Verse 3)
We're fightin' at the bar, but we can't stop the fight
We're caught in a love that's addictive and dark of night
We're drownin' in a sea of emotions so bright
But we're stuck in this cycle, can't seem to break the light

Chemicals in our veins, they keep us on the run
Can't escape the love, it's like a loaded gun
Every time we kiss, it's like a loaded gun
I know I'll be back, but I can't stop runnin'

(Chorus)
We're caught in a love that's addictive and cold
A high that's killin' us, but we can't let go
We're drownin' in a sea of emotions so bold
But we're stuck in this cycle, can't seem to break the hold

(Outro)
We're stuck in this love, but we can't stop the pain
A high that's killin' us, but we can't help but play
The game of love, where we're both the winners and the fray
But we're stuck in this cycle, can't seem to break the hold.

In this song, I have tried to capture the cyclical nature of emotional dependency, with a mix of resignation and defiance, using vivid imagery to set the scene. The lyrics convey the inescapable pull of the connection, and the way it can consume us, even though we know it's wrong. The melodies are melancholic, with a touch of hip-hop beats, reflecting Post Malone's signature blend of genres.`,lyre_response:`[Intro]
Ooh, ooh, ooh, ooh
Ooh, ooh, ooh, ooh
[Verse 1]
You're at the bar with me, fuckin' somethin' to feel good, right?
Havin' a party 'cause you're my girl, I know that I can be a dick, right?
We startin' to fight, at the bar, right next to the viking
Smokin' in the car, 
I'm fuckin' your brain right
, right?
[Pre-Chorus]
I'm sorry I'm hangin' out with my ex
Late night textin', don't know why I'm stressin' out
You're the one that I love, I put you through so much
I know you don't like it, but I'm not enough
[Chorus]
Chemicals, yeah, they control me
I'm a slave to the chemicals
Chemicals, yeah, they control me
I'm a slave to the chemicals
[Verse 2]
You're so crazy, baby, when you're faded, you're amazing
When we're together, I feel like I'm the only one, you're lovin'
You get jealous, baby, when somebody's around, you're hatin'
You get drunk, I get drunk, and we fuckin' love makin' up
[Pre-Chorus]
I'm sorry I'm hangin' out with my ex
Late night textin', don't know why I'm stressin' out
You're the one that I love, I put you through so much
I know you don't like it, but I'm not enough
[Chorus]
Chemicals, yeah, they control me
I'm a slave to the chemicals
Chemicals, yeah, they control me
I'm a slave to the chemicals
[Bridge]
I'm a slave to the chemicals (
You're the one that I love
)
I'm a slave to the chemicals (
You're the one that I love
)
[Chorus]
Chemicals, yeah, they control me
I'm a slave to the chemicals
Chemicals, yeah, they control me
I'm a slave to the chemicals`,id:9006590},{name:"Need",artist:"Taylor Swift",llama_response:`Verse 1:
I remember the first time I saw your face,
A thousand prickles on my neck, a racing heart in place.
I knew in that moment, I'd never be the same,
You ignited a fire that couldn't be tamed.

Chorus:
Oh, the way you make me feel, it's like a drug,
I can't resist the pull, it's a dangerous love.
I want to be with you, more than anything,
But the fear of losing you, it keeps me up at night.

Verse 2:
Your touch, it sets my soul on fire,
I'm consumed by the flames, I can't retire.
Every moment with you, it feels like a crime,
I'm addicted to the high, I can't decline.

Chorus:
Oh, the way you make me feel, it's like a drug,
I can't resist the pull, it's a dangerous love.
I want to be with you, more than anything,
But the fear of losing you, it keeps me up at night.

Bridge:
I know we're walking a fine line,
But I can't help myself, I'm blinded by your shine.
I need you more than I need to breathe,
And I know I'll never be complete, without your love.

Chorus:
Oh, the way you make me feel, it's like a drug,
I can't resist the pull, it's a dangerous love.
I want to be with you, more than anything,
But the fear of losing you, it keeps me up at night.

Outro:
I'm caught in a web of desire,
Afraid to let go, but I can't survive.
The way you make me feel, it's like a dream,
A dangerous love that I can't seem to break.

Musical Arrangement:

* Soft, intimate verses with acoustic guitar and piano, gradually building to a powerful, emotional chorus with a fuller sound, including electric guitar, drums, and strings.
* A mix of minor and major chords to convey the complexity of emotions, with a focus on the chorus's soaring, anthemic quality.
* A driving rhythm to match the confessional tone and sense of urgency.
* Vocal harmonies and ad-libs to add depth and texture to the song.

Lyrical Themes:

* Emotional attachment and the distinction between want, desire, passion, and need.
* The intensity of a romantic relationship, using vivid imagery and physical sensations to convey the experience.
* Fear and danger as obstacles that heighten the sense of need for the other person.
* The addictive nature of the relationship and the difficulty of letting go.
* The sense of hopelessness, breathlessness, and a slow-burning desire that comes with being in love.`,lyre_response:`[Intro]
Cigarette smoke on your breath
The smell of whiskey on your wrist
You trace it back to where it all went wrong
But I didn't know, I was just a kid
[Verse 1]
I was walking home alone
You caught up to me in the dark
I felt your hands on my body
And I couldn't fight it, it was too late
You're holdin' me close, I can feel your heart beatin'
I'm lost in your eyes, like an island in the sea
[Pre-Chorus]
I don't want to need you like I breathe
I don't want to feel this way
But I don't know how to love if I can't love you
And I'd rather burn than let you go
[Chorus]
I'm hopeless,
 
I'm speechless
I'm selfless
I'm endless
I'm breathless
And irreversible like a car
Eaveling off a cliff
I'm wild and uncontrollable
Like a tidal wave
I'm your largest, I'm your smallest
Desire
 [Verse 2]
You put your hands on me
Like you've got a right
To touch me, like you're entitled
Say it with your hands, what your mouth can't say
I love the way you know just what to do
To make me feel like I'm the only one
Who exists in this entire world
[Pre-Chorus]
I don't want to need you like I breathe
I don't want to feel this way
But I don't know how to love if I can't love you
And I'd rather burn than let you go
[Chorus]
I'm hopeless,
 
I'm speechless
I'm selfless
I'm endless
I'm breathless
And irreversible like a car
Eaveling off a cliff
I'm wild and uncontrollable
Like a tidal wave
I'm your largest, I'm your smallest
Desire [Bridge]
All I want is the touch
Of your skin on my skin
All I need is your love
To feel it within
If this is a dream, I don't wanna wake up
If you don't really love me, I'm gonna go crazy
[Chorus]
I'm hopeless,
 
I'm speechless
I'm selfless
I'm endless
I'm breathless
And irreversible like a car
Eaveling off a cliff
I'm wild and uncontrollable
Like a tidal wave
I'm your largest, I'm your smallest
Desire`,id:5651836},{name:"Don’t Front",artist:"Eminem",llama_response:`(Verse 1)
Yo, listen up, I got a story to tell
'Bout a kid from Detroit, who was struggling to sell
His rhymes and his passion, but the industry was cold
Tried to break in, but they didn't want him to hold

But he didn't give up, no way, he kept on grinding
Learned from the greats, like Marley and Rakim finding
His style and his voice, a unique sound in the fray
Now he's a respected name, in the rap game today

(Chorus)
I'm the real deal, ain't no denying
My flow's so sick, it'll make you wanna buy
My rhymes are fire, they'll leave you in awe
I'm the king of the game, and I'm here to show

(Verse 2)
I paid my dues, I fought through the struggles
Haters and doubters, but I never doubted my juggles
Kept my head up, kept on pushing
Now I'm on top, and my legacy is gushing

From the underground to the mainstream
I've made my mark, and my name is gleaming
I've collaborated with the best of the best
And I've paved the way, for the next to pass the test

(Chorus)
I'm the real deal, ain't no denying
My flow's so sick, it'll make you wanna buy
My rhymes are fire, they'll leave you in awe
I'm the king of the game, and I'm here to show

(Verse 3)
I'm a fighter, I never back down
I'll keep on rapping, until my legacy is crowned
I've been through the fire, and I've come out the other side
Now I'm here to inspire, and make the world feel alive

I'm a product of my past, but I'm not defined
By the struggles I've faced, I'm a survivor, not a victim
I'm a master of words, a magician with rhymes
I'm the voice of the streets, and I'm here to shine

(Chorus)
I'm the real deal, ain't no denying
My flow's so sick, it'll make you wanna buy
My rhymes are fire, they'll leave you in awe
I'm the king of the game, and I'm here to show

(Bridge)
I'm not just a rapper, I'm a movement too
My rhymes are a call to action, for the youth to do
What they want to do, and be who they want to be
I'm a symbol of hope, for the oppressed to be free

(Chorus)
I'm the real deal, ain't no denying
My flow's so sick, it'll make you wanna buy
My rhymes are fire, they'll leave you in awe
I'm the king of the game, and I'm here to show

(Outro)
So listen up, y'all, I hope you understand
This is my story, this is my hand
I'm the real deal, and I'm here to stay
So get ready, 'cause I'm here to slay.`,lyre_response:`[Intro]
Yeah, it's that time again, man
I think I'm bout to lose my mind, man
I've been going through a lot of stuff
And I don't know, man (Haha)
But I'ma get up today
I'ma get up today
I'ma get up today
I'ma get up today
I'ma get up today
I'ma get up today (Who?)
I'ma get up today (I'ma get up today)
I'ma get up today (Who?)
I'ma get up today
I'ma get up today (Who?)
I'ma get up today (I'ma get up today)
I'ma get up today
[Verse 1]
I'ma get up today
I'ma get up like Jake today
I'ma get up like Jake today
I'ma get up today
I'ma get up like Jake today
I'ma get up like Jake today (Who?)
I'ma get up today (I'ma get up today)
I'ma get up today (Who?)
I'ma get up like Jake today
I'ma get up like Jake today (I'ma get up today)
I'ma get up today
I'ma get up like Jake today
I'ma get up like Jake today (Who?)
I'ma get up today (I'ma get up today)
I'ma get up today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today
I'ma get up today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (I'ma get up today)
I'ma get up today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today
I'ma get up today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today
I'ma get up today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up today (I'ma get up today)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today
I'ma get up today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up today (I'ma get up today)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today
I'ma get up today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up today (I'ma get up today)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today
I'ma get up today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up today (I'ma get up today)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up today (I'ma get up today)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today
I'ma get up today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up today (I'ma get up today)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today
I'ma get up today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today
I'ma get up today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today
I'ma get up today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up like Jake today (I'ma get up today)
I'ma get up like Jake today (Who?)
I'ma get up like Jake today (I`,id:252542},{name:"Snow On The Beach",artist:"Taylor Swift",llama_response:`Verse 1 (Taylor):
In a world that's full of strange and wondrous sights,
I never expected to find my heart's delight.
But here you are, shining like a fleeting light,
And I can't help but feel the magic of your sight.

Chorus (Taylor and Lana):
Love on the beach, snow in the air,
A surreal dream that we can't help but share.
An unlikely pair, but our hearts collide,
In this beautiful, strange, and wild ride.

Verse 2 (Lana):
I've seen the world in all its beauty and despair,
But never have I felt the kind of love that's fair.
You're like a work of art, a masterpiece in flight,
And I'm just a humble soul, trying to make it right.

Chorus (Taylor and Lana):
Love on the beach, snow in the air,
A surreal dream that we can't help but share.
An unlikely pair, but our hearts collide,
In this beautiful, strange, and wild ride.

Bridge (Taylor):
We're like two worlds that never meant to meet,
But here we are, in this beautiful defeat.
We're chasing hope, we're chasing love,
In this crazy, beautiful, endless drive.

Chorus (Taylor and Lana):
Love on the beach, snow in the air,
A surreal dream that we can't help but share.
An unlikely pair, but our hearts collide,
In this beautiful, strange, and wild ride.

Post-Chorus (Lana):
Snow on the beach, it's a strange delight,
A beauty that's hard to define, but feels just right.
It's like the stars in the sky, shining bright and free,
A love that's unexpected, but meant to be.

Outro (Taylor and Lana):
In this strange and beautiful world we live in,
Love knows no bounds, it's a magic within.
So let's embrace the strange and the wild,
And let our hearts collide, in this beautiful, surreal ride.

The song blends Taylor Swift's narrative lyricism with Lana Del Rey's ethereal touch, creating a dreamy, indie-folk ballad with pop sensibilities. The imagery of fleeting lights, snow at the beach, and aurora borealis is used throughout the song to convey a sense of wonder and impossibility, while also emphasizing the emotional vulnerability and beauty of an unexpected love. The chorus emphasizes the unique and beautiful nature of an unexpected love, while the post-chorus and bridge intensify the theme of cautious hope in the face of love. The song's atmosphere is atmospheric and emotive, with a blend of Taylor's storytelling and Lana's ethereal touch, making it a captivating and memorable listening experience.`,lyre_response:`[Intro: Taylor Swift]
I saw you and I
Knew that it was futile
Trying to fly, so I gave it up
Took off from the ground
And I felt weightless
As I followed you down
[Verse 1: Taylor Swift]
You know I've been so lost, and you know it
You know I've been so lost, and you know it
You know I've been so lost, and you know it
But when you look at me
Like you know what you're looking for
And you know I can give it to you
In this fleeting life
[Pre-Chorus: Taylor Swift]
Fleeting lights, and you said
Snow at the beach, and you said
Aurora borealis
I've never seen anything like it, oh
[Chorus: Taylor Swift]
You're like white snow and I'm the beach
We're both opposite foes, yet somehow you and I can meet
And it's unnatural, you're so bitter and I'm so sweet
And it's unnatural, you're so white and I'm so clean
And it's unlikely we'll ever meet
Let's hope it snows tonight
[Post-Chorus: Both, (Taylor Swift)
]
Snow on the beach
Snow on the beach
 (
Oh
)
Snow on the beach
Snow on the beach
 (
Today
) [Verse 2: Lana Del Rey]
Candy in color, taking me under
Your love is like a drug, taking me over
Someday, when I'm wiser, I'll understand it
But for now, just hold me like you own me
Forget all your lovers, I could be your forever
You know that I'm a overachiever, so I'll say it
Even if it's wrong, I'll do it my way
[Pre-Chorus: Lana Del Rey]
Fleeting lights, and I said
Snow at the beach, and I said
Aurora borealis
Never seen anything like it, oh
[Chorus: Lana Del Rey & (Taylor Swift)]
You're like white snow and I'm the beach
We're both opposite foes, yet somehow you and I can meet
And it's unnatural, you're so bitter and I'm so sweet
And it's unnatural, you're so white and I'm so clean
And it's unlikely we'll ever meet
Let's hope it snows tonight
[Post-Chorus: Both, (Lana Del Rey)
]
Snow on the beach
Snow on the beach
 (
Oh
)
Snow on the beach
Snow on the beach
 (
Today
)
[Bridge: Lana Del Rey & (Taylor Swift)]
Candy in color, taking me under
Your love is like a drug, taking me over
Forget all your lovers, I could be your forever
You know that I'm a overachiever, so I'll say it
Even if it's wrong, I'll do it my way
Careful with me, I could be the death of you
So let's make the day last, oh
[Chorus: Taylor Swift & Lana Del Rey, (Taylor Swift)]
You're like white snow and I'm the beach
We're both opposite foes, yet somehow you and I can meet
And it's unnatural, you're so bitter and I'm so sweet
And it's unnatural, you're so white and I'm so clean
And it's unlikely we'll ever meet
Let's hope it snows tonight
[Outro: Lana Del Rey, (Taylor Swift)]
Snow on the beach
Snow on the beach
Oh`,id:8445376},{name:"Two Out",artist:"Lil Uzi Vert ",llama_response:`(Verse 1)
I'm livin' my best life, ain't no regrets
Flyin' high, got my feet on the pedals
Got a whole stable of cars, they all lookin' fresh
Bentleys, Benzes, and them fancy exotic things

Got a mansion in the hills, it's straight outta a movie
Lavish lifestyle, ain't no tellin' lies
Got a bad bitch on my arm, she gotta keep up
Got my own jet, ain't no waitin' in line

(Chorus)
I'm livin' my best life, ain't no stoppin' me
I'm on top of the world, feelin' invincible
Got my champagne on ice, got my money on me
I'm the king of the game, ain't no one gonna stop me

(Verse 2)
I'm drippin' in diamonds, got my hair on fleek
Got my own private party, it's always a repeat
Got my ad-libs on point, got my sound effects right
Got my own label, it's takin' off tonight

Got a private jet, it's takin' me far away
Got my own private island, it's where I wanna stay
Got my own private chef, he cookin' up the best
Got my own private bar, got the drinks on the quest

(Chorus)
I'm livin' my best life, ain't no stoppin' me
I'm on top of the world, feelin' invincible
Got my champagne on ice, got my money on me
I'm the king of the game, ain't no one gonna stop me

(Bridge)
I'm on the road to riches, ain't no turnin' back
Got my own private army, they always on the attack
Got my own private bank, it's where I keep my dough
Got my own private life, it's where I wanna be

(Verse 3)
I'm the king of the trap game, ain't no one takin' my throne
Got my own private kingdom, it's where I call my home
Got my own private army, they always on the grind
Got my own private empire, it's where I wanna shine

Got my own private jet, it's takin' me far away
Got my own private island, it's where I wanna stay
Got my own private chef, he cookin' up the best
Got my own private bar, got the drinks on the quest

(Chorus)
I'm livin' my best life, ain't no stoppin' me
I'm on top of the world, feelin' invincible
Got my champagne on ice, got my money on me
I'm the king of the game, ain't no one gonna stop me

(Outro)
I'm the one and only, ain't no one touchin' me
Got my own private life, it's where I wanna be
Got my own private world, it's where I wanna stay
Got my own private kingdom, it's where I'm gonna play.

This song is written in the style of Lil Uzi Vert, with a focus on repetitive and catchy hooks, a high-energy delivery, and a raw and unapologetic vibe. The lyrics capture the essence of hedonistic and carefree living, with themes of luxury cars, material wealth, and a sense of invincibility. The song features ad-libs and sound effects that enhance the track's raw and unapologetic vibe, similar to a collaboration with Playboi Carti.`,lyre_response:`[Intro: Lil Uzi Vert]
(
Who made this beat?
Playboi Carti
)
Oh, yeah
Yeah, yeah
(
P, what you wanna do?
)
Drive a Wraith, no durag
Hit that oil, yeah, my skin dark
Alright
[Chorus: Lil Uzi Vert & 
Playboi Carti
]
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
[Verse 1: Playboi Carto]
Go, go, go, go, go, go, go (Yeah)
Bad bitch, she wanna fuck me (She do)
I got a lot of dick in her (I do)
Got a lot of ass in her (I do)
Brand new whip just for her (It is)
She gettin' money with her (She do)
Cross me, get revived (You won't)
I got heat, no relief (I do)
I got drip, it get wet (It do)
I got slatt, can't step (I do)
I got cash, can't leave (I do)
They know not to mess with me (They don't)
[Chorus: Lil Uzi Vert & 
Playboi Carti
]
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
[Verse 2: Lil Uzi Vert]
I got a lot of ass in her (I do)
Bad bitch, she wanna fuck me (She do)
Gettin' money, she (She do)
Cross me, get revived (You won't)
I got drip, it get wet (It do)
I got a lot of sip in her (I do)
I got cash, can't leave (I do)
I got heat, no relief (I do)
I gotta get out this town (I do)
I gotta, gotta get out this town (I do)
[Chorus: Lil Uzi Vert & 
Playboi Carti
]
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
[Verse 3: Playboi Carti]
Go, go, go, go, go, go, go (Yeah)
Bad bitch, she wanna fuck me (She do)
I got a lot of dick in her (I do)
Got a lot of ass in her (I do)
New whip just for her (It is)
She gettin' money with her (She do)
She gettin' money from me (She do)
She love to spend money (She do)
She love to count money (She do)
She love to count money with me (She do)
[Chorus: Lil Uzi Vert & 
Playboi Carti
]
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
We like the Carbon, don't play with the carbon (
Woo
)
[Outro: Lil Uzi Vert]
Yeah, yeah
Alright
We like the Carbon, don't play with the carbon (Woo)
We like the Carbon, don't play with the carbon`,id:8946762},{name:"Keep Going Up",artist:"Justin Timberlake",llama_response:`(Verse 1)
I used to be stuck in a rut, feeling like I'm not enough
But then I found my fire, and my heart started to pump
I started to grow, and I learned to love myself
Now I'm on the rise, and I won't stop until I reach my wealth

(Chorus)
I'm upgrading my life, one step at a time
I'm feeling alive, and I'm feeling fine
I'm letting go of the past, and I'm moving on up
I'm upgrading my life, and I won't stop until I reach the top

(Verse 2)
I used to be held back, by the chains of my fears
But now I'm breaking free, and I'm shedding all my tears
I'm standing tall, and I'm facing the light
I'm upgrading my life, and I'm feeling alive tonight

(Chorus)
I'm upgrading my life, one step at a time
I'm feeling alive, and I'm feeling fine
I'm letting go of the past, and I'm moving on up
I'm upgrading my life, and I won't stop until I reach the top

(Bridge)
I'm not the same person, that I used to be
I'm stronger and wiser, and I'm feeling free
I'm on a journey of growth, and I won't stop until I'm the best
I'm upgrading my life, and I'm feeling blessed

(Chorus)
I'm upgrading my life, one step at a time
I'm feeling alive, and I'm feeling fine
I'm letting go of the past, and I'm moving on up
I'm upgrading my life, and I won't stop until I reach the top

(Interlude)
I'm feeling alive, and I'm feeling free
I'm on a journey of growth, and I won't stop until I'm the best
I'm upgrading my life, and I'm feeling blessed

(Verse 3)
I used to be lost, but now I'm found
I used to be down, but now I'm standing proud
I used to be afraid, but now I'm feeling brave
I'm upgrading my life, and I won't stop until I reach the top

(Chorus)
I'm upgrading my life, one step at a time
I'm feeling alive, and I'm feeling fine
I'm letting go of the past, and I'm moving on up
I'm upgrading my life, and I won't stop until I reach the top

(Outro)
I'm feeling alive, and I'm feeling free
I'm on a journey of growth, and I won't stop until I'm the best
I'm upgrading my life, and I'm feeling blessed
I'm reaching for the stars, and I won't stop until I reach the top.

This song is written in the style of Justin Timberlake, with a catchy and upbeat beat, infused with a sense of confidence and resilience. The lyrics reflect a journey of personal growth and self-improvement, with a focus on overcoming challenges and upgrading one's life. The call-and-response dynamic in the chorus, as well as the interactive interjections throughout the song, engage listeners and make them feel like they're a part of the journey. The modern pop-R&B fusion style gives the song a fresh and contemporary feel, while the catchy melody and memorable hooks make it a radio-ready hit.`,lyre_response:`[Intro]
Don't slack, get back, get back, get back, get back, get back
Get back, get back, get back, get back, get back, get back
Don't slack, get back, get back, get back, get back, get back
Get back, get back, get back, get back, get back, get back
[Verse 1]
Now I'm on the move, got my groove
Feel my heart beating, got my fix of you
Getting stronger, getting faster
See my future, getting brighter
I can see it coming, getting closer
I can see it coming, getting closer
I can see it coming, getting closer
I can see it coming, getting closer
[Chorus]
I'm upgrading, upgrading
This is my life, I'm upgrading
This is my life, I'm upgrading
Upgrading, upgrading
This is my life, I'm upgrading
This is my life, I'm upgrading
I can see it coming, getting closer
I can see it coming, getting closer
I can see it coming, getting closer
I can see it coming, getting closer
[Post-Chorus]
(Don't slack, get back, get back, get back, get back, get back)
Get back, get back, get back, get back, get back, get back
(Don't slack, get back, get back, get back, get back, get back)
Get back, get back, get back, get back, get back, get back
(Get back, get back, get back, get back, get back, get back)
Don't slack, get back, get back, get back, get back, get back
Get back, get back, get back, get back, get back, get back
[Interlude]
You didn't think your boy Timbaland would let you put out a album without no interlude, did you?
I mean come on, this is my shit
[Verse 2]
Get back, get back, get back, get back, get back, get back
Get back, get back, get back, get back, get back, get back
Don't slack, get back, get back, get back, get back, get back
Get back, get back, get back, get back, get back, get back
[Chorus]
I'm upgrading, upgrading
This is my life, I'm upgrading
This is my life, I'm upgrading
Upgrading, upgrading
This is my life, I'm upgrading
This is my life, I'm upgrading
I can see it coming, getting closer
I can see it coming, getting closer
I can see it coming, getting closer
I can see it coming, getting closer
[Post-Chorus]
(Don't slack, get back, get back, get back, get back, get back)
Get back, get back, get back, get back, get back, get back
(Don't slack, get back, get back, get back, get back, get back)
Get back, get back, get back, get back, get back, get back
(Get back, get back, get back, get back, get back, get back)
Don't slack, get back, get back, get back, get back, get back
Get back, get back, get back, get back, get back, get back
[Interlude]
You didn't think your boy Timbaland would let you put out a album without no interlude, did you?
I mean come on, this is my shit
[Chorus]
I'm upgrading, upgrading
This is my life, I'm upgrading
This is my life, I'm upgrading
Upgrading, upgrading
This is my life, I'm upgrading
This is my life, I'm upgrading
I can see it coming, getting closer
I can see it coming, getting closer
I can see it coming, getting closer
I can see it coming, getting closer`,id:9452460},{name:"AMERICA HAS A PROBLEM (Remix)",artist:"Beyonce",llama_response:`Verse 1 (Beyonce):
I'm the queen of the game, I'm on top of the throne
Making moves that'll make you wanna know my name
From the penthouse to the mansion, I'm living large
With my cake and my champagne, I'm in charge

Chorus:
I'm a self-made success, I'm on the rise
I'm the one they all fear, I'm the one they all prize
I've got the power, I've got the wealth
I'm the boss, I'm the queen, I'm the health

Verse 2 (Kendrick Lamar):
I'm the king of the streets, I'm the one they all know
Making moves that'll make you wanna go slow
From the hood to the penthouse, I'm on the rise
With my rhymes and my flow, I'm in disguise

Chorus:
I'm a self-made success, I'm on the rise
I'm the one they all fear, I'm the one they all prize
I've got the power, I've got the wealth
I'm the boss, I'm the queen, I'm the health

Bridge:
I'm the voice of the streets, I'm the voice of the game
I'm the one they all listen to, I'm the one they all claim
I'm the master of my fate, I'm the captain of my soul
I'm the one they all want to be, I'm the one they all want to know

Chorus:
I'm a self-made success, I'm on the rise
I'm the one they all fear, I'm the one they all prize
I've got the power, I've got the wealth
I'm the boss, I'm the queen, I'm the health

Outro (Beyonce):
I'm the queen of the game, I'm on top of the throne
Making moves that'll make you wanna know my name
From the penthouse to the mansion, I'm living large
With my cake and my champagne, I'm in charge.

Musical Arrangement:
The song should have a modern, hip-hop feel, incorporating trap influence to back the commanding vocals. The instrumental should include a blend of synths, 808s, and live instruments to create a dynamic and catchy sound. The beat should be energetic and uplifting, with a strong, driving rhythm that complements the confident and assertive vibe of the lyrics. The song should build in intensity throughout the verses and choruses, with a particularly powerful and anthemic chorus that showcases the full range of Beyonce's vocal abilities.

The featured verse from Kendrick Lamar should add depth and complexity to the song, with clever wordplay and double entendres that complement the themes of wealth, desire, and influence. Kendrick's verse should have a gritty, streetwise feel, with a focus on the hustle and grind that lies at the heart of the song's message.

Overall, the song should have a strong, empowering message that captures the confident and assertive vibe of a self-made success story. With its catchy hooks, dynamic range, and modern production, the song has the potential to become an anthem for anyone who's ever chased their dreams and made them a reality.`,lyre_response:`[Intro: Beyonce]
I want you to feel inspired by my success
I worked so hard for everythin' I want you to feel inspired by my success
I worked so hard for everything
I want you to feel inspired by my success
I worked so hard for everything
[Verse 1: Beyonce]
I want you to bow down to my success
I worked so hard for everythin' I want you to bow down to my success
I worked so hard for everything
I want you to bow down to my success
I worked so hard for everything
[Pre-Chorus: Beyonce]
I'm gonna put gold in my fillings
I'm gonna fly in my daddy's private jet
I'm gonna let you spend the night
If you can prove that you're worth it, baby
[Chorus: Beyonce]
I want you to feel inspired by my success
I worked so hard for everything
I want you to feel inspired by my success
I worked so hard for everything
I want you to feel inspired by my success
I worked so hard for everything
[Post-Chorus: Beyonce]
Bow down to the queen, baby
Bow down to the queen, baby
Bow down to the queen, baby
Bow down to the queen
[Verse 2: Beyonce]
I want you to feel inspired by my success
I worked so hard for everythin' I want you to feel inspired by my success
I worked so hard for everything
I want you to feel inspired by my success
I worked so hard for everything
[Pre-Chorus: Beyonce]
I'm gonna put gold in my fillings
I'm gonna fly in my daddy's private jet
I'm gonna let you spend the night
If you can prove that you're worth it, baby
[Chorus: Beyonce]
I want you to feel inspired by my success
I worked so hard for everything
I want you to feel inspired by my success
I worked so hard for everything
I want you to feel inspired by my success
I worked so hard for everything
[Post-Chorus: Beyonce]
Bow down to the queen, baby
Bow down to the queen, baby
Bow down to the queen, baby
Bow down to the queen
[Verse 3: Kendrick Lamar]
Uh, I got my eye on the ball, cup
I'm on the top of the wall, cup
Uh, I'm in the race of a king, cup
I'm in the space of a king, cup
Uh, I got my eye on the ball, cup
I'm on the top of the wall, cup
Uh, I'm in the race of a king, cup
I'm in the space of a king, cup
Uh, I got my eye on the ball, cup
I'm on the top of the wall, cup
Uh, I'm in the race of a king, cup
I'm in the space of a king, cup
[Outro: Beyonce]
Bow down to the queen, baby
Bow down to the queen, baby
Bow down to the queen, baby
Bow down to the queen`,id:9141389},{name:"Double Fantasy",artist:"Future",llama_response:`Verse 1:
I'm trapped in a game of desire, where the stakes are high
Every move I make, it's a moral test, I can't deny
The passion between us, it's hot and wild
But the consequences of our actions, they're hard toild

Chorus:
We're dancing on the edge of morality
Temptation's calling, but we can't be free
Our hearts are racing, but our souls are lost
In this forbidden love, we're trapped and cost

Verse 2:
We know we shouldn't, but we can't resist
The pull of pleasure, it's a dangerous mist
We're caught in a web of hedonism and greed
But the guilt we feel, it's all we need

Chorus:
We're dancing on the edge of morality
Temptation's calling, but we can't be free
Our hearts are racing, but our souls are lost
In this forbidden love, we're trapped and cost

Bridge:
We're caught in a cycle of desire and shame
Our actions are ambiguous, but the blame
Falls on us, the ones who know what we've done
But we can't stop, the fire's been lit, it's won

Chorus:
We're dancing on the edge of morality
Temptation's calling, but we can't be free
Our hearts are racing, but our souls are lost
In this forbidden love, we're trapped and cost

Verse 3:
We're searching for a way out of this mess
But the escape route's hidden, it's a test
Of our willpower and our hearts of gold
But the damage we've done, it's hard to hold

Chorus:
We're dancing on the edge of morality
Temptation's calling, but we can't be free
Our hearts are racing, but our souls are lost
In this forbidden love, we're trapped and cost

Outro:
We're left with the memories of what we've done
The weight of our choices, they're hard to undone
But in the end, it's all worth the fight
For the passion and the love, it's a sweet delight.

The song features a slow tempo, atmospheric synths and trap-influenced beats that create a moody and introspective sound. The Auto-Tuned vocals deliver introspective and hedonistic lyrics that convey the conflict between desire and conscience. The imagery in the lyrics conveys both the allure and the consequences of their choices, creating a sense of tension and ambiguity. The theme of the song revolves around the idea that desire and pleasure can be tempting, but they come at a cost, and the protagonists are aware of the moral ambiguity of their actions.`,lyre_response:`[Intro]
(
I'm so high, baby
)
You know, I was thinkin', we could take this to the bedroom
(
I'm so high, baby
)
We could take this to the bedroom
(
I'm so high, baby
)
You know, I was thinkin', we could take this to the bedroom
(
I'm so high, baby
)
We could take this to the bedroom
[Verse 1]
Goddamn, your body so divine
I'm so lost in your touch, your body so fine
Baby, you know I'm a man, I got needs
Why you think I'm comin' over, just for the seed?
[Pre-Chorus]
I know that it's wrong, but I really want you
I know that it's wrong, but I really need you
Don't do this, don't do that
I'm watchin' you, but you don't know that
[Chorus]
Say you will, never do
Say you will, never do
Say you will, never do
Say you will, never do
(
I'm so high, baby
)
Say you will, never do
Say you will, never do
Say you will, never do
Say you will, never do
(
I'm so high, baby
)
Say you will, never do
Say you will, never do
Say you will, never do
Say you will, never do
(
I'm so high, baby
) [Verse 2]
I'm so lost in your touch, your body so fine
Baby, you know I'm a man, I got needs
Why you think I'm comin' over, just for the seed?
And you know I'm a rider, I got a bad habit
I'm always thinkin' about sex, I'm always thinkin' about it
And you know I'm a liar, but I always tell it
To your face and behind it, I'm always thinkin' about it [Pre-Chorus]
I know that it's wrong, but I really want you
I know that it's wrong, but I really need you
Don't do this, don't do that
I'm watchin' you, but you don't know that
[Chorus]
Say you will, never do
Say you will, never do
Say you will, never do
Say you will, never do
(
I'm so high, baby
)
Say you will, never do
Say you will, never do
Say you will, never do
Say you will, never do
Say you will, never do
(
I'm so high, baby
)
Say you will, never do
Say you will, never do
Say you will, never do
Say you will, never do
(
I'm so high, baby
) [Bridge]
Put this ring on your finger
Make this the last thing you do
'Fore I lose my mind, lose my virginity
Baby, say you will, never do
Say you will, never do
(
I'm so high, baby
)
[Pre-Chorus]
I know that it's wrong, but I really want you
I know that it's wrong, but I really need you
Don't do this, don't do that
I'm watchin' you, but you don't know that
[Chorus]
Say you will, never do
Say you will, never do
Say you will, never do
Say you will, never do
(
I'm so high, baby
)
Say you will, never do
Say you will, never do
Say you will, never do
Say you will, never do
Say you will, never do
(
I'm so high, baby
)
Say you will, never do
Say you will, never do
Say you will, never do
Say you will, never do
(
I'm so high, baby
)`,id:9006073},{name:"Ménage*",artist:"Lil Uzi Vert ",llama_response:`(Verse 1)
I'm livin' my best life, ain't no tellin' lies
Flauntin' my dough, got my own private sky
Got my own jet, ain't no flyin' high
Got my own crew, they always by my side

Poppin' them pills, feelin' like a boss
Got my own dough, ain't no countin' losses
Got my own spot, got my own vibe
Got my own crew, they always by my side

(Chorus)
I'm livin' lavish, I'm feelin' alive
Got my own flow, ain't no tellin' lies
Got my own money, ain't no countin' debt
Got my own life, ain't no tellin' regret

(Verse 2)
I'm chasin' the high, I'm chasin' the thrill
Got my own fix, ain't no tellin' the will
Got my own love, got my own heart
Got my own life, ain't no tellin' apart

Got my own style, got my own flair
Got my own game, ain't no tellin' care
Got my own vibe, got my own flow
Got my own life, ain't no tellin' slow

(Chorus)
I'm livin' lavish, I'm feelin' alive
Got my own flow, ain't no tellin' lies
Got my own money, ain't no countin' debt
Got my own life, ain't no tellin' regret

(Bridge)
I'm on the scene, I'm feelin' the heat
Got my own groove, ain't no tellin' defeat
Got my own crew, they always by my side
Got my own life, ain't no tellin' tide

(Chorus)
I'm livin' lavish, I'm feelin' alive
Got my own flow, ain't no tellin' lies
Got my own money, ain't no countin' debt
Got my own life, ain't no tellin' regret

(Outro)
I'm on the rise, I'm feelin' alive
Got my own vibe, ain't no tellin' strife
Got my own flow, ain't no tellin' lies
Got my own life, ain't no tellin' disguise.

This song is written in the style of Lil Uzi Vert, with a focus on themes of money, drugs, and relationships. The lyrics reflect a carefree and rebellious attitude, incorporating a trap beat that complements a flow similar to the snippet provided. The song exudes the energy and vibe of a party scene, mentioning the desire for extravagant experiences and using a catchy chorus to emphasize the artist's pursuit of pleasure and luxury.`,lyre_response:`[Intro]
(
Wheezy outta here
)
[Verse 1]
Just took a break from bustin' that chocha
Now I'm back to bustin' that chocha
Yeah, my girl is so bad, she's so hot, she's so crazy
Yeah, I got that sack, and she on that redbone
I'ma light that blunt, she love that redbone
I'ma pour that liquor, she love that redbone, yeah
She ride it like a pro, yeah
She told me she love me, yeah
I know she lie to me, yeah
But I can't seem to care, yeah
I'm so far gone, I'm a sucker for love, yeah
And she make it harder by showin' me love, yeah
And I keep goin' back for more, yeah
She make it hard to leave her, so I need a bigger door [Chorus]
I just wanna have fun, I just wanna drop the top
I just wanna have fun, I just wanna smoke some pot
I just wanna have fun, I just wanna drop the top
I just wanna have fun, I just wanna smoke some pot (Yeah)
I just wanna have fun, I just wanna drop the top
I just wanna have fun, I just wanna smoke some pot
I just wanna have fun, I just wanna drop the top
I just wanna have fun, I just wanna smoke some pot
[Verse 2]
Man, I'm at the bank machine, withdrawin' 25 large
Man, these girls at the club, they all about that dough, yeah
And you can get that cake, just give me that dough, yeah
I don't care if you got a boyfriend, I'm gon' take that chance, yeah
I'm with this girl, she ride me like a Harley
She said that I'm famous, her friends wanna take a photo
Man, I'm with this girl, she so annoying
But when we ride, girl, I'm gettin' annoyed, haha
I pull up in that coupe, that's a drop-top, baby
When I'm with my woes, I can make that potato baby
Yeah, I know I'm fresh, yeah, I know I'm hot, yeah
Got a nigga on that Verzuz, man, I'ma whoppin' that nigga, haha [Chorus]
I just wanna have fun, I just wanna drop the top
I just wanna have fun, I just wanna smoke some pot
I just wanna have fun, I just wanna drop the top
I just wanna have fun, I just wanna smoke some pot (Yeah)
I just wanna have fun, I just wanna drop the top
I just wanna have fun, I just wanna smoke some pot
I just wanna have fun, I just wanna drop the top
I just wanna have fun, I just wanna smoke some pot`,id:9285785},{name:"Likka Sto 2",artist:"Travis Scott ",llama_response:`Verse 1 (Travis Scott):
I'm in the liquor store, sippin' on a 40
Got my homies by my side, we're gettin' it poppin'
Got my wallet open wide, buyin' up the shelves
Livin' life to the fullest, we ain't worried 'bout no wealth

Chorus:
We're on a hedonistic bender, gotta keep it movin'
Liquor store runs, we're feelin' like we're livin'
Partyin' all night long, gotta keep it groovin'
Alcohol's got us feelin' like we're on top of the world

Verse 2 (Quavo):
I'm the king of the liquor store, got my own brand
Got my own flow, ain't nobody touchin' my hand
Got my own style, ain't nobody touchin' my shirt
Got my own swag, ain't nobody touchin' my dirt

Chorus:
We're on a hedonistic bender, gotta keep it movin'
Liquor store runs, we're feelin' like we're livin'
Partyin' all night long, gotta keep it groovin'
Alcohol's got us feelin' like we're on top of the world

Verse 3 (Takeoff):
I'm the one they call when they need a drink
Got my own brew, ain't nobody gonna blink
Got my own flow, ain't nobody gonna know
Got my own style, ain't nobody gonna show

Chorus:
We're on a hedonistic bender, gotta keep it movin'
Liquor store runs, we're feelin' like we're livin'
Partyin' all night long, gotta keep it groovin'
Alcohol's got us feelin' like we're on top of the world

Verse 4 (J. Cole):
I'm the one with the street credibility
Got my own rhymes, they're straight outta reality
Got my own style, ain't nobody touchin' my game
Got my own flow, ain't nobody touchin' my fame

Chorus:
We're on a hedonistic bender, gotta keep it movin'
Liquor store runs, we're feelin' like we're livin'
Partyin' all night long, gotta keep it groovin'
Alcohol's got us feelin' like we're on top of the world

Bridge (Travis Scott):
We're feelin' the highs and the lows
Got our hands up, got our drinks in tow
We're livin' life to the fullest, ain't nobody gonna stop
Got our feet on the floor, got our heads in the top

Chorus:
We're on a hedonistic bender, gotta keep it movin'
Liquor store runs, we're feelin' like we're livin'
Partyin' all night long, gotta keep it groovin'
Alcohol's got us feelin' like we're on top of the world

Outro (Travis Scott):
We're on a hedonistic bender, gotta keep it movin'
Liquor store runs, we're feelin' like we're livin'
Partyin' all night long, gotta keep it groovin'
Alcohol's got us feelin' like we're on top of the world.`,lyre_response:`[Intro]
(
Playmakers
)
[Pre-Chorus]
Go, go, go (
I'm going, I'm going
)
Pull up on the spot (
What spots? What spots?
)
With the liquor in-store (
What store? What store?
)
It's a fucked up storm inside the boat (
What boat? What boat?
)
We should not go home (
We should not go home
)
[Chorus]
Go, go, go (I'm going, I'm going)
Pull up on the spot with the liquor in-store
It's a fucked up storm inside the boat, we should not go home
'Cause we've only just began, begun, begun
[Post-Chorus]
Woo, ooh
Woo, ooh
Pretty young thing, what you want, what you want
Pretty young thing, what you want, what you want
Woo, ooh
Woo, ooh
Pretty young thing, what you want, what you want
Pretty young thing, what you want, what you want
[Verse 1: Travis Scott]
Pretty young thing, come play with my liquor
Bend down, girl, let me show you something
Sip it, sip it, sip it 'til you're dizzy
Fuck all the sober shit, we only do it once
Wolverine, Adidas, and a bezel
Soon as we walk in, we already killed it
Pour a whole bottle, fill up the bucket
Who's the bucket? The bucket is you, it's for fuck
Got a fat girl, she wanna fuck the whole crew
She want a fuckin' Travis Scott, she want a fuckin' Travis Scott
It's a lot of fash' in the vault, it's a lot of cash' in the vault
And I'm not talkin' 'bout ASAP, I'm talkin' about cash, cash, cash [Chorus: Travis Scott & 
NAV
]
Go, go, go (I'm going, I'm going)
Pull up on the spot with the liquor in-store
It's a fucked up storm inside the boat, we should not go home
'Cause we've only just began, begun, begun
[Post-Chorus: NAV]
Woo, ooh
Woo, ooh
Pretty young thing, what you want, what you want
Pretty young thing, what you want, what you want
Woo, ooh
Woo, ooh
Pretty young thing, what you want, what you want
Pretty young thing, what you want, what you want
[Verse 2: NAV]
Pretty young thing, I'm tryna fuck you, baby
What's your sign? If you a freak, let me know
I'm tryna fuck you, baby, let me know
I'm tryna fuck you, baby, let me know
I'm tryna fuck you, baby, let me know
I'm tryna fuck you, baby, let me show
Who is that boy with the dragon breath?
That's a dumb blonde, she think I'm David Beckham
I'm tryna fuck you, baby, let me know
I'm tryna fuck you, baby, let me show
Who is that boy with the dragon breath?
That's a dumb blonde, she think I'm David Beckham [Chorus: Travis Scott & 
NAV
]
Go, go, go (I'm going, I'm going)
Pull up on the spot with the liquor in-store
It's a fucked up storm inside the boat, we should not go home
'Cause we've only just began, begun, begun
[Post-Chorus: 
Travis Scott
 & NAV
]
Woo, ooh
Woo, ooh
Pretty young thing, what you want, what you want
Pretty young thing, what you want, what you want
Woo, ooh
Woo, ooh
Pretty young thing, what you want, what you want
Pretty young thing, what you want, what you want
Woo, ooh
Woo, ooh
Pretty young thing, what you want, what you want
Pretty young thing, what you want, what you want
[Outro]
(
Playmakers
)`,id:9095848},{name:"Kissing You",artist:"Sam Smith",llama_response:`Verse 1:
I wake up every morning, feeling so alone
The bed beside me empty, where you used to lay your head
I reach out for your touch, but it's just a cold, dark room
And I'm left with these memories, of the love we used to hold

Chorus:
Oh, how I yearn for your embrace, for your gentle touch
The way you made me feel alive, the way you made me feel so much
But now you're gone, and I'm left here to face
The ache of love lost, the space that you leave in this place

Verse 2:
I remember the way you smiled, the way you laughed with me
The way you held my hand, and made me feel like I was free
We shared so many moments, so many nights of love and light
But now they're just memories, and they don't feel quite right

Chorus:
Oh, how I yearn for your embrace, for your gentle touch
The way you made me feel alive, the way you made me feel so much
But now you're gone, and I'm left here to face
The ache of love lost, the space that you leave in this place

Bridge:
I know I'll find my way, I'll find my strength again
But for now, I'll hold on to these memories, and the love we shared
And though you're gone, your heart will always be near
In my dreams, in my heart, and in every tear

Chorus:
Oh, how I yearn for your embrace, for your gentle touch
The way you made me feel alive, the way you made me feel so much
But now you're gone, and I'm left here to face
The ache of love lost, the space that you leave in this place

Outro:
And though you're gone, I know you'll always be with me
In every smile, in every laugh, and every tear I cry
And though the pain of love lost will never truly fade
I'll hold on to the love we shared, and the memories we made.

The performance should be soulful and emotionally charged, with a focus on strong vocal delivery that captures the heartache of separation and the tenderness of cherished memories. The lyrics should be sung with a deep sense of yearning and love lost, conveying the pain and longing experienced in the absence of a loved one. The music should be poignant and emotive, with a focus on capturing the intimate moments of remembrance and the longing for physical presence and touch. The chorus should be particularly powerful, resonating with the sentiment of yearning for the person who is missed deeply.`,lyre_response:`[Intro]
Oh, ah
Oh, ah
[Verse 1]
I know you're out there, I can feel it
But how do I know it's really you?
If I'm still standing here, so lonely
Then why did you ever leave me?
Why did you ever leave me?
[Pre-Chorus]
Come back, you know that I miss you
And no one in the world can make me feel like you do
Ooh, so come back
[Chorus]
If I can't have you, I think I might die
I've never felt love like I feel when I'm by your side
If I can't have you, I think I might die
You're the only one who keeps me alive
[Post-Chorus]
Oh, ah
Oh, ah
[Verse 2]
I lay down with you, remember?
So we can see the stars, my love
We used to do, don't do so much
We never used to do so much [Pre-Chorus]
Come back, you know that I miss you
And no one in the world can make me feel like you do
Ooh, so come back
[Chorus]
If I can't have you, I think I might die
I've never felt love like I feel when I'm by your side
If I can't have you, I think I might die
You're the only one who keeps me alive
[Post-Chorus]
Oh, ah
Oh, ah
[Bridge]
In my weak moments, I think about you
I wake up in the night to see if you're there
I memorize your kiss, your touch, your skin
Every freckle on your face, so beautiful
So come back, come back to me
Come back, come back to me
[Chorus]
If I can't have you, I think I might die
I've never felt love like I feel when I'm by your side
If I can't have you, I think I might die
You're the only one who keeps me alive
[Outro]
Oh, ah
Oh, ah`,id:8721953},{name:"SIRENS",artist:"Drake",llama_response:`Verse 1:
I'm chasing the dream, but it's always out of reach
Fame and fortune, they're just a fleeting breeze
I'm tryna make a name, but it's hard to find
My place in the game, where the competition's blind

Chorus:
I'm searching for perfection, but it's hard to find
The ideal that I'm chasing, it's slipping through my mind
I'm striving for greatness, but it's hard to define
The line between success and failure, it's hard to find

Verse 2:
I'm living in the moment, but my eyes are on the prize
I'm chasing the highs, but the lows they always surprise
I'm trying to shine bright, but the spotlight's blind
I'm tryna make a name, but my legacy's hard to find

Chorus:
I'm searching for perfection, but it's hard to find
The ideal that I'm chasing, it's slipping through my mind
I'm striving for greatness, but it's hard to define
The line between success and failure, it's hard to find

Bridge:
I'm lost in the haze, tryna find my way
I'm chasing the dream, but it's slipping away
I'm trying to hold on, but it's slipping through my hands
I'm searching for the truth, but it's hard to understand

Chorus:
I'm searching for perfection, but it's hard to find
The ideal that I'm chasing, it's slipping through my mind
I'm striving for greatness, but it's hard to define
The line between success and failure, it's hard to find

Verse 3:
I'm questioning the dream, tryna find my place
I'm chasing the fame, but it's hard to embrace
The illusion of perfection, it's hard to maintain
The line between reality and fantasy, it's hard to explain

Chorus:
I'm searching for perfection, but it's hard to find
The ideal that I'm chasing, it's slipping through my mind
I'm striving for greatness, but it's hard to define
The line between success and failure, it's hard to find

Outro:
Is utopia real? Or is it just a myth?
Are we chasing the dream, or just a fleeting thought?
I'm tryna find the truth, but it's hard to believe
Sometimes what we seek is already within our grasp, you see.

The song blends atmospheric introspection with smooth, melodic beats, reflecting the narrative of striving for success in the music industry while questioning the nature of perfection and the illusion of fame. The conversational outro suggests that sometimes what we seek is already within our grasp, implying a sense of hope and possibility. The use of repetition throughout the song emphasizes the themes of striving and searching, while the moments of intensity and introspection create a sense of emotional depth and complexity.`,lyre_response:`Utopia
[Intro: Lil Wayne & 
Both
]
I can see it, I can see it, I can see it, I can see it
(
I can see it, I can see it
)
I can see it, I can see it, I can see it, I can't get it
(
I can see it, I can see it
)
I can see it, I can see it, I can see it, I can see it
(
I can see it, I can see it
)
I can see it, I can see it, I can see it, I can see it
(
I can see it, I can see it
)
[Verse 1: Lil Wayne & 
Drake
]
I'm on the highway, going 90
With my windows up, so I don't see shit
But I know that she's perfect
So I push it to the limit, I'm reckless
I'm trying to get to utopia
I'm listening to Coldplay
So I must be close, yeah
I can see it, I can see it
[Chorus: Lil Wayne & 
Drake
]
Utopia, I can see it
Utopia, I can see it
Utopia, I can see it
But it's not here, so I'm looking for it
Utopia
[Verse 2: Drake & 
Lil Wayne
]
Ayo, I'm up in my Maison II
Looking out the window, just looking at the trees (
Woo
)
I'm so far from where I used to be, you would think that I could see it
But utopia is an illusion, it doesn't exist (
What?
)
Yeah, I have a beautiful view
But nothing can beat the view I had of you
I'm still up in my Maison II
Looking out the window, still looking at the trees (
Woo
)
But I'm a little older than I was then
A little wiser, but not even close to done
You would think that I could see it
But my utopia is an illusion, it doesn't exist (
What?
)
Yeah, I have a beautiful view
But nothing can beat the view I had of you
And I still look up in the sky
And I still pray that I can fly
So close, yet so far
I can see it, but I can't get it
I can see it, I can see it
[Chorus: Lil Wayne & 
Drake
]
Utopia, I can see it
Utopia, I can see it
Utopia, I can see it
But it's not here, so I'm looking for it
Utopia
[Bridge: Lil Wayne]
I can see it, I can see it
I can see it, I can see it
(
I can see it, I can see it
)
I can see it, I can see it
I can see it, I can see it
(
I can see it, I can see it
)
I can see it, I can see it
I can see it, I can see it
(
I can see it, I can see it
)
I can see it, I can see it
I can see it, I can see it
(
I can see it, I can see it
)
[Interlude: Lil Wayne]
I can see it, I can see it, I can see it, I can see it
(
I can see it, I can see it
)
I can see it, I can see it, I can see it, I can't get it
(
I can see it, I can see it
)
I can see it, I can see it, I can see it, I can see it
(
I can see it, I can see it
)
I can see it, I can see it, I can see it, I can see it
(
I can see it, I can see it
)
[Outro: Lil Wayne & 
Drake
]
I can see it, I can see it
(
But is it really what you're looking for?
)
Utopia
I can see it, I can see it
(
But is it really what you're looking for?
)
Utopia
I can see it, I can see it
(
But is it really what you're looking for?
)
Utopia
I can see it, I can see it
(
But is it really what you're looking for?
)
Utopia`,id:9354510},{name:"Add It Up*",artist:"Lil Uzi Vert ",llama_response:`(Verse 1)
I'm on the grind, ain't nobody touchin' me
Makin' hits and stackin' cheddar, it's just part of the spree
Fresh off the plane, straight to the mansion
Got my own private jet, ain't no one messin' with the king
Got my own label, got my own team
Makin' moves, ain't no one can stop the dream

(Chorus)
Add it up, add it up, every single dime
I'm livin' large, ain't no time to chime
Add it up, add it up, it's all mine
Got my own empire, ain't no one gonna decline

(Verse 2)
Got my own line of sneakers, it's sellin' like hotcakes
Got my own clothing line, got my own fashion stacks
Got my own champagne, it's poppin' like a fountain
Got my own private beach, ain't no one gonna bring me down
Got my own entourage, they're all about the dough
Got my own yacht, it's sailin' like a go

(Chorus)
Add it up, add it up, every single dime
I'm livin' large, ain't no time to chime
Add it up, add it up, it's all mine
Got my own empire, ain't no one gonna decline

(Verse 3)
Makin' moves in the club, got the whole place jumpin'
Got my own private show, ain't no one gonna stop the fun
Got my own rhythm, got my own flow
Got my own fans, they're all about the go
Got my own spot on the charts, ain't no one gonna stop me
Got my own tour, it's all about the energy

(Chorus)
Add it up, add it up, every single dime
I'm livin' large, ain't no time to chime
Add it up, add it up, it's all mine
Got my own empire, ain't no one gonna decline

(Bridge)
I'm on the top of the world, ain't no one gonna bring me down
Got my own style, got my own sound
Got my own team, they're all about the crown
Got my own legacy, it's all about the dough

(Chorus)
Add it up, add it up, every single dime
I'm livin' large, ain't no time to chime
Add it up, add it up, it's all mine
Got my own empire, ain't no one gonna decline

(Outro)
So if you're feelin' me, let's keep it movin'
Got my own vision, ain't no one gonna stop the groovin'
Got my own flow, got my own style
Got my own empire, it's all about the smile.`,lyre_response:`[Intro]
(
Wheezy outta here
)
[Chorus: Lil Uzi Vert]
One, two, three, four, five, six, seven, eight
Add it up, add it up, add it up, add it up
One, two, three, four, five, six, seven, eight
Add it up, add it up, add it up, add it up
(
Wheezy outta here
)
[Verse 1: Lil Uzi Vert]
I just counted up, I'm way, way, way, way, way rich
I'm not playin' when I say I'm the plug, I'm in charge
I've been savin' up, yeah, since I was a kid, I'm a daddy
I know all the hoes that heffey play with, I'm a baby
Uzi Vert, I'm all about that cash, man
You know I don't mess with no basic chick, she need cash
I've been pullin' up in them foreigns, yeah, since I was a baby
I'm in this gang called "The Uzi Squad" and we all got cash
And all my niggas got cash, yeah, we don't need to ask
I'm in this mansion all by myself, yeah, I need aask
Yeah, I remember times was dark, yeah, I need a candle
I'm so happy, yeah, I'm proud of myself, yeah, I need a candle
[Chorus: Lil Uzi Vert]
One, two, three, four, five, six, seven, eight
Add it up, add it up, add it up, add it up
One, two, three, four, five, six, seven, eight
Add it up, add it up, add it up, add it up
[Bridge]
Yeah, uh
I just want them diamonds, yeah, I need that
I don't want no chick that's basic, yeah, I want that
Wanna pull up in that foreign, yeah, I need that
I just want them things and that's all, yeah, I need that
I don't want no chick that's basic, yeah, I want that
Wanna pull up in that foreign, yeah, I need that
I just want them things and that's all, yeah, I need that
I don't want no chick that's basic, yeah, I want that
Wanna pull up in that foreign, yeah, I need that
I just want them things and that's all, yeah, I need that (
Wheezy outta here
)
[Verse 2: Lil Uzi Vert]
I just counted up, I'm way, way, way, way, way rich
I'm not playin' when I say I'm the plug, I'm in charge
I've been savin' up, yeah, since I was a kid, I'm a daddy
I know all the hoes that heffey play with, I'm a baby
Uzi Vert, I'm all about that cash, man
You know I don't mess with no basic chick, she need cash
I've been pullin' up in them foreigns, yeah, since I was a baby
I'm in this gang called "The Uzi Squad" and we all got cash
And all my niggas got cash, yeah, we don't need to ask
I'm in this mansion all by myself, yeah, I need aask
Yeah, I remember times was dark, yeah, I need a candle
I'm so happy, yeah, I'm proud of myself, yeah, I need a candle
[Chorus: Lil Uzi Vert]
One, two, three, four, five, six, seven, eight
Add it up, add it up, add it up, add it up
One, two, three, four, five, six, seven, eight
Add it up, add it up, add it up, add it up
[Bridge]
Yeah, uh
I just want them diamonds, yeah, I need that
I don't want no chick that's basic, yeah, I want that
Wanna pull up in that foreign, yeah, I need that
I just want them things and that's all, yeah, I need that
I don't want no chick that's basic, yeah, I want that
Wanna pull up in that foreign, yeah, I need that
I just want them things and that's all, yeah, I need that
I don't want no chick that's basic, yeah, I want that
Wanna pull up in that foreign, yeah, I need that
I just want them things and that's all, yeah, I need that
[Outro]
(
Wheezy outta here
)`,id:5499742},{name:"Still Pushin",artist:"Logic",llama_response:`Verse 1:
I was once a rookie, tryna find my place in the game
But now I'm a vet, with a legacy to maintain
Been through the fire, and I'm still standing tall
Through the ups and downs, I've learned to take it all in stride

I've seen the superficiality of the industry firsthand
Where the flashy cars and flashy clothes, they just don't mean a thing
But the real ones know, the ones who grind every day
We ain't never worried 'bout the fame, just the art we create

Chorus:
I'm on a mission, to prove my worth
Ain't no one gonna stop me, ain't no one gonna hurt
I'm on a journey, to the top of the game
Gonna leave my mark, gonna make my claim

Verse 2:
I used to be the kid, tryna find my voice
But now I'm the man, with a message to choose
I've grown and learned, and I'm still on the rise
I ain't never gonna stop, until I reach the skies

I'm a student of the game, always tryna learn
From the legends of old, to the new and the burn
I'm a sponge, soaking up knowledge like a rain shower
Got my own style, my own flow, my own way of roar

Chorus:
I'm on a mission, to prove my worth
Ain't no one gonna stop me, ain't no one gonna hurt
I'm on a journey, to the top of the game
Gonna leave my mark, gonna make my claim

Verse 3:
I see the industry, it's a game of pretend
Where the shallow ones fade, and the real ones ascend
I ain't never gonna fit, in the mold they create
I'm on a quest, to create my own fate

I'm a rebel, a renegade, a nonconformist too
I'm a voice for the voiceless, a beacon of truth
I'm a warrior, a fighter, a king in the making
Gonna leave my legacy, gonna make my own breaking

Chorus:
I'm on a mission, to prove my worth
Ain't no one gonna stop me, ain't no one gonna hurt
I'm on a journey, to the top of the game
Gonna leave my mark, gonna make my claim

Outro:
I'm Logic, the king of the underground
Gonna take my rightful place, in the spotlight profound
I ain't never gonna back down, I ain't never gonna give in
I'm on a mission, to make my mark, and win.

The beat for this song is a dynamic, hard-hitting track that incorporates elements of hip-hop history, with a nod to classic samples and a modern twist. The instrumental has a raw, honest vibe that complements Logic's signature delivery and introspective lyricism. The song's flow is dynamic, showcasing both technical rap skills and a sense of authenticity, with references to Logic's influences and the wisdom he's gained through his personal journey in the rap game. The chorus is catchy and memorable, with a repetitive hook that drives home the song's message of determination and perseverance. Overall, the song is a testament to Logic's growth and maturity as an artist, and his commitment to creating meaningful, impactful music that resonates with listeners.`,lyre_response:`[Intro]
Yeah, uh
Uh, yeah, uh
Uh, yeah
Uh, yeah
Uh, yeah, uh
Uh, yeah, uh
Uh, yeah
Uh, yeah
Uh, yeah
Yeah, yeah, yeah
Yeah, uh-huh, yeah, uh
Uh, yeah, uh
Yeah, uh-huh, yeah, uh
Uh, yeah, uh
Yeah, uh-huh, yeah, uh
Uh, yeah, uh
Yeah, uh-huh, yeah, uh
[Verse 1]
Rappers will come-and-go
But I'ma bet-and-stay
Watched all my niggas come up
And some of them-way
I remember when-
NAV was just-
He was just a little baby rapper
And now he-
He's a superstar
And I'm so happy for him
He was just a little baby rapper
And now he-
He's a superstar
And I'm so happy for him
[Verse 2]
All that glitters-
Is not gold
Look at what the-
Fame has done
To some of them
It turned they backs-
To cold-
It's funny how this-
Industry works
They praise you one day
Then they murder you the next
It's funny how this-
Industry works
They praise you one day
Then they murder you the next
It's funny how this-
Industry works
They praise you one day
Then they murder you the next
It's funny how this-
Industry works
They praise you one day
Then they murder you the next [Verse 3]
It's a shame how-
They exploit us
For their own profit
But I-
I wouldn't be me
If I didn't say
I'm a little bit-
Different than the rest
And I-
I wouldn't be me
If I didn't say
I'm a little bit-
Different than the rest
Yeah, yeah, yeah
I'm a little bit-
Different than the rest
Yeah, yeah, yeah
I'm a little bit-
Different than the rest
Yeah, yeah, yeah
I'm a little bit-
Different than the rest
Yeah, yeah, yeah
I'm a little bit-
Different than the rest [Verse 4]
Treat my black brothers and sisters equally
Not with equal chance
Just because we're black doesn't mean you have to listen
All that bullshit, it doesn't make sense to me
I never claimed to be a civil rights activist
But I know that we're living in a racist society
I never claimed to be a civil rights activist
But I know that we're living in a racist society
I never claimed to be a civil rights activist
But I know that we're living in a racist society
I never claimed to be a civil rights activist
But I know that we're living in a racist society [Outro]
Yeah, uh
Uh, yeah, uh
Uh, yeah
Uh, yeah, uh
Uh, yeah, uh
Uh, yeah
Uh-huh, yeah, uh
Uh, yeah, uh
Yeah, uh-huh, yeah, uh
Uh, yeah, uh
Yeah, uh-huh, yeah, uh
Uh, yeah, uh
Yeah, uh-huh, yeah, uh`,id:9431005},{name:"Realest",artist:"Eminem",llama_response:`Verse 1:
Listen up y'all, I got a story to tell
About a rapper who rose from the depths of hell
Born and raised in the D, where the streets are cold and grim
But I ain't never let my environment define my rhyme

I've seen it all, from the envy and the hate
To the fake rappers who think they're too late
But I ain't never let 'em get in my way
I'm the real deal, and I'm here to stay

Chorus:
I'm the king of the game, ain't nobody touchin' me
I'm the one they all fear, the one they can't beat
I rose to fame on my own terms, ain't nobody gonna stop me
I'm the authentic voice, the one that they can't ignore

Verse 2:
I came up from the bottom, where the struggle's real
But I never let the haters bring me down to my knees
I kept grinding, kept hustling, kept pushing through
And now I'm here, with my foot on your throat, boo

The industry's harsh, it'll break you in two
But I ain't never been one to back down, that's just not true
I've seen the best of 'em, and I've seen the worst
But I'm still standing, and I'm still blasting, and I'm still cursing

Chorus:
I'm the king of the game, ain't nobody touchin' me
I'm the one they all fear, the one they can't beat
I rose to fame on my own terms, ain't nobody gonna stop me
I'm the authentic voice, the one that they can't ignore

Verse 3:
I'm the voice of the streets, the voice of the youth
I'm the one they all know, the one they all truth
I ain't never been afraid to speak my mind
And I ain't never gonna stop, until I reach the top of the line

I'm the king of the throne, and I'm here to stay
So listen up y'all, 'cause I've got something to say
I ain't never gonna back down, I ain't never gonna fade
I'm the real deal, and I'm here to stay, ain't nobody gonna make me go away

Chorus:
I'm the king of the game, ain't nobody touchin' me
I'm the one they all fear, the one they can't beat
I rose to fame on my own terms, ain't nobody gonna stop me
I'm the authentic voice, the one that they can't ignore

Outro:
So there you have it, my story's been told
And I hope you heard it, and I hope you're bold
I'm the king of the game, and I'm here to stay
And if you ain't with me, then you're in the way.`,lyre_response:`[Intro]
Yeah, you! The one sayin' I doped himself
Shit, man, you don't know what I been through
Just to get this dope rhyme the fuckin' pump
I'd fuck a puppy, fuck a baby, fuck a bitch
Fuck a hubby, fuck a spouse
Fuck the whole damn household
Fuck a plant, fuck a rock
Fuck a tree, fuck a motherfuckin' bowl
Fuck every one of you! (Get the fuck up on out of here!)
[Verse 1]
You're still just a kick in the door
Still just a glimmer in my eye
You're gonna look back in two years
And realize that you were just a fad
A fleeting moment in my life
But man, I've been some places
With cheap tricks and a quick change, I'll make you disappear
I've been to hell and back, man
I've been to hell and back again
Don't give me that look, like you don't know what I mean
I was there when Tupac was shot
I was there when Biggie went to Hell
I was there when Jimmy Page was on drugs
I was there when Elton John fell in love
I was there when John Lennon died
I was there for every big event in the lives of my idols
And I'm still here, while they're all gone, I survived
I'm like the ghost of Christmas past
Appearing to you in a cloud of smoke
With a six-shooter in my hand
And a switchblade in my sock
I'm like the Ranger, protecting the park
While you're visiting from the city
With a spear in my hand and a sniper rifle, perched on a hill
I'm just a 10-year-old kid from Lincoln Park
But I'll take on all of you motherfuckers at once
With half of my talent, I could take on Slim Shady
And the two of us would bodyslam the Liger [Chorus]
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I'm back with a brand new recipe
And this one's for the dead bitches in me
I`,id:9363637},{name:"Miracle",artist:"Calvin Harris",llama_response:`Verse 1:
I've been lost in the dark, for so long
Trying to find my way, but I can't seem to move on
From the mistakes of the past, the wounds that won't heal
I'm reaching out for hope, but it's hard to conceal

Chorus:
Oh, I need a miracle, to wash away my shame
To believe in something more, than the pain I've gained
I'm searching for a love, that will set me free
A transformative fire, that will burn bright and clear

Verse 2:
I know I've hurt those close, with my own two hands
I've let my fears and doubts, tear me apart and stand
But I'm ready to change, to start anew
To find the strength to heal, and make amends, I'll do

Chorus:
Oh, I need a miracle, to wash away my shame
To believe in something more, than the pain I've gained
I'm searching for a love, that will set me free
A transformative fire, that will burn bright and clear

Breakdown:
(Building synths and beats)
I'm holding on to hope, like a fragile thread
I'm reaching for a love, that will set me free
From the chains that bind me, from the fears that plague me
I'm searching for a light, that will guide me to the other side

Chorus:
Oh, I need a miracle, to wash away my shame
To believe in something more, than the pain I've gained
I'm searching for a love, that will set me free
A transformative fire, that will burn bright and clear

Outro:
(Energetic drop)
I know I'll find my way, out of the dark and into the light
I'll rise above the pain, and shine with all my might
I'll find the love I've sought, and never let it go
A miracle of love, that will make my heart whole.

This song is inspired by the lyrics provided and captures the essence of longing for redemption and the hope for a transformative love. The song has an emotional build-up leading to an energetic drop, characteristic of Calvin Harris's electronic dance music (EDM) style. The verses convey vulnerability and a plea for forgiveness, while the chorus emphasizes a yearning for belief in a miracle. The breakdown section echoes the theme of belief in a miracle, utilizing Harris's signature blend of synthesizers and beats to create a euphoric and danceable track.`,lyre_response:`[Intro]
Oh, no, oh, no
Oh, whoa, oh, no
Oh, no, oh, no
No, no, no
[Verse 1]
Lay me down, lay me down
I'm not like all the other boys
You would be a bad, bad girl
If you took me up on my promises
So take me instead to the hop
Where you can drink and let your hair down
And if you want, you can kiss me, but don't touch
[Pre-Chorus]
I'm not the best man I could be
Far from a perfect specimen
My heart is broken in three
But I'm hoping that you could see
[Chorus]
Inside of me, a miracle
Would make you believe
In a love that's so divine
So would you believe in a miracle?
Would you believe in a miracle?
[Post-Chorus]
Oh, no, oh, no
Oh, whoa, oh, no
Oh, no, oh, no
No, no, no
[Breakdown]
Lay me down, lay me down
Oh, no, oh, no
Oh, whoa, oh, no
Oh, no, oh, no
No, no, no
[Chorus]
Inside of me, a miracle
Would make you believe
In a love that's so divine
So would you believe in a miracle?
Would you believe in a miracle?
[Post-Chorus]
Oh, no, oh, no
Oh, whoa, oh, no
Oh, no, oh, no
No, no, no`,id:8843631},{name:"Embarrassed",artist:"Travis Scott ",llama_response:`(Verse 1)
I'm cruisin' through the city, feelin' like a king
Diamonds shinin' bright, my chain got that ring
Fashion trends on fleek, I'm the one that's bringin'
Exclusive experiences, ain't nobody else bringin'

(Chorus)
Luxury life, it's a game I play
Flyin' high, livin' large, every single day
Diamonds on my wrist, my whip got that shine
Livin' life to the fullest, feelin' so divine

(Verse 2)
I hit the club, it's a sight to see
Bottles poppin', models dancin', it's a fantasy
Ain't no other place I'd rather be, it's my spot
Got my crew by my side, we're rockin' to the top

(Chorus)
Luxury life, it's a game I play
Flyin' high, livin' large, every single day
Diamonds on my wrist, my whip got that shine
Livin' life to the fullest, feelin' so divine

(Bridge)
But sometimes I feel like I'm losin' control
The fame, the fortune, it's takin' its toll
I'm livin' life in the fast lane, it's a dangerous road
But I won't stop, no, I won't slow

(Verse 3)
I'm drippin' in designer, got my own style
Ain't nobody touchin' me, I'm takin' the prize
Flyin' private jets, got my own private pool
Livin' life like a king, ain't nobody cool

(Chorus)
Luxury life, it's a game I play
Flyin' high, livin' large, every single day
Diamonds on my wrist, my whip got that shine
Livin' life to the fullest, feelin' so divine

(Outro)
So if you see me out, don't be surprised
If I'm drippin' in diamonds, feelin' like a prize
I'm livin' life to the fullest, ain't nobody stoppin' me
Luxury life, it's the life for me.`,lyre_response:`[Intro]
(
Paris
)
[Chorus]
Diamonds, oh diamonds
Every day, I'm thinkin' about diamonds
(
I'm thinkin' about diamonds every day
)
Diamonds, oh diamonds
Every day, I'm thinkin' about diamonds
(
I'm thinkin' about diamonds every day
)
[Verse 1]
(
Pour moi, c'est la mode
)
Dior, Gucci, and YSL
 (
Ah, yeah
) 
these the brands that I do follow
 (
Do follow
)
Louis Vuitton trunk full of Dior
 (
Ah, yeah
) 
this the lifestyle that I'm in
 (
In this lifestyle, yeah
)
You see, this that luxury shit
 (
Luxury shit, yeah
) 
this that everyday shit
 (
Everyday shit
)
[Chorus]
Diamonds, oh diamonds
Every day, I'm thinkin' about diamonds
(
I'm thinkin' about diamonds every day
)
Diamonds, oh diamonds
Every day, I'm thinkin' about diamonds
(
I'm thinkin' about diamonds every day
)
[Verse 2]
(
Paris, yeah
)
I got a girlfriend who's a model
 (
A model, yeah
) 
from Paris to Houston, she'll go
She don't like when I talk about my exes
 (
My exes
) 
cause she know that I just, I just don't want to admit
 (
Just don't want to admit it, yeah
)
That I was ever that guy
That would purchase a diamond just to impress the bitches
 (
Just to impress the bitches, yeah
)
Diamonds, oh diamonds (
Woo
)
Every day, I'm thinkin' about diamonds
 (
Thinkin' 'bout diamonds every day
)
Diamonds, oh diamonds
Every day, I'm thinkin' about diamonds
(
I'm thinkin' about diamonds every day
) [Chorus]
Diamonds, oh diamonds
Every day, I'm thinkin' about diamonds
(
I'm thinkin' about diamonds every day
)
Diamonds, oh diamonds
Every day, I'm thinkin' about diamonds
(
I'm thinkin' about diamonds every day
)
[Verse 3]
I'ma get a diamond, fuck it, why not?
I'ma do it 'cause I can, 'cause I'm ballin'
 (
Ballin', yeah
) 
I got a check, so I'ma buy a karat
 (
Woo
)
I'ma buy a karat 'cause I fuckin' love a karat
 (
Fuckin' love a karat, yeah
)
Now, every time I fuck, I'ma give her karat
 (
Woo
)
'Cause I fuckin' love to give her karat
 (
Fuckin' love to give her karat
)
Give her karat every time that we fuck
 (
Ah, yeah
)
[Chorus]
Diamonds, oh diamonds
Every day, I'm thinkin' about diamonds
(
I'm thinkin' about diamonds every day
)
Diamonds, oh diamonds
Every day, I'm thinkin' about diamonds
(
I'm thinkin' about diamonds every day
)
[Outro]
Diamonds, oh diamonds
Every day, I'm thinkin' about diamonds
Diamonds, oh diamonds
Every day, I'm thinkin' about diamonds`,id:8860164},{name:"Love Me More",artist:"Sam Smith",llama_response:`Verse 1:
I stare into the mirror, but I don't see me
I see the flaws, the imperfections, the insecurities
I wish I could erase them, be someone else for a day
But the more I try, the more I'm stuck in this endless chase

Chorus:
Why can't I love myself? Why can't I see my worth?
I'm tired of hiding, tired of feeling like I'm not enough
I want to be free, to be me, to be whole
I deserve to love myself, to be loved, to be whole

Verse 2:
I've been down this road before, the one that leads to shame
The one that makes me doubt, the one that makes me feel so small
But I know I'm not alone, we've all been there
And I know that I deserve to be loved, to be free from the fear

Chorus:
Why can't I love myself? Why can't I see my worth?
I'm tired of hiding, tired of feeling like I'm not enough
I want to be free, to be me, to be whole
I deserve to love myself, to be loved, to be whole

Bridge:
I'll keep on fighting, I'll keep on trying
I'll keep on loving myself, until I reach the sky
I won't let the voices, I won't let the pain
Take away my love, take away my self-worth
I am enough, I am worthy, I am me
And that's all I need, that's all I'll ever be

Chorus:
Why can't I love myself? Why can't I see my worth?
I'm tired of hiding, tired of feeling like I'm not enough
I want to be free, to be me, to be whole
I deserve to love myself, to be loved, to be whole

Outro:
I'll learn to love myself, I'll learn to see
The beauty in me, the light that shines so bright
I'll embrace my flaws, I'll embrace my imperfections
I'll be me, I'll be whole, I'll be free.

This song is written in the style of Sam Smith, with poignant lyrics that delve into the struggle of looking in the mirror and not liking what you see. The song explores the journey from self-criticism to self-acceptance, with emotional lyrics that narrate the personal growth from pain to self-love. The music has a soulful pop sound, with a touch of melancholy in the verses building to an empowering and uplifting chorus. The bridge emphasizes the resolve to love oneself more, and the outro offers a message of hope and self-acceptance.`,lyre_response:`[Chorus]
Would you rather be
Somebody else?
Somebody better?
Somebody else
You see in the mirror
[Verse 1]
When I look in the mirror
I don't see a winner
I see a light in the distance
It's been struggle, it's been pain
For so long, I've been fightin'
I don't see myself as attractive
I don't see myself as worthy
[Pre-Chorus]
I don't think I can love, love myself
I don't think I can love, love myself
I've tried, I've tried
I've tried to do it
[Chorus]
Would you rather be
Somebody else?
Somebody better?
Somebody else
You see in the mirror
Would you rather be
Somebody else?
Somebody better?
Somebody else
You see in the mirror
[Verse 2]
I used to think that I needed
To be somebody else
So I could get your love and affections
But now I know it's an illusion
We all struggle
We all hurt sometimes
And it's okay to feel alone [Pre-Chorus]
I've learned that I can love, love myself
I've learned that I can love, love myself
I've tried, I've tried
I've tried to do it
[Chorus]
Would you rather be
Somebody else?
Somebody better?
Somebody else
You see in the mirror
Would you rather be
Somebody else?
Somebody better?
Somebody else
You see in the mirror
[Bridge]
I want to love myself more
I want to love myself more
I want to love myself more
I want to love myself more
I want to love myself more
I want to love myself more
[Chorus]
Would you rather be
Somebody else?
Somebody better?
Somebody else
You see in the mirror
Would you rather be
Somebody else?
Somebody better?
Somebody else
You see in the mirror`,id:7864555},{name:"Suburban Legends (Taylor’s Version) [From The Vault]",artist:"Taylor Swift",llama_response:`Verse 1:
I'm driving through the streets of my hometown,
Unmarked phone calls and mismatched star signs,
Thinking 'bout the one I left behind,
The love that could have been, the memories that bind.

Chorus:
I'm not there to make friends, I'm there to become,
A legend in someone's personal history,
A love that leaves a lasting impact,
But now I'm left with just a memory.

Verse 2:
I remember the gymnasium, the smell of sweat and pride,
The way we danced under the flickering lights,
The way our hearts beat as one, the way we collapsed inside,
The love that we had, the love that we lost in time.

Chorus:
I'm not there to make friends, I'm there to become,
A legend in someone's personal history,
A love that leaves a lasting impact,
But now I'm left with just a memory.

Bridge:
The clock is ticking, the waves are crashing,
I'm lost in thought, my heart is crashing,
The love we had, it's slipping away,
And I'm left to face the dawn of a new day.

Chorus:
I'm not there to make friends, I'm there to become,
A legend in someone's personal history,
A love that leaves a lasting impact,
But now I'm left with just a memory.

Outro:
The gym is empty, the stars are shining bright,
I'm standing here, lost in the night,
The love we had, it's gone, it's out of sight,
But it'll always be a part of me, a memory to hold tight.

The song is written in the style of Taylor Swift, with a focus on storytelling and vivid imagery. The lyrics capture the bittersweet nostalgia of suburban teenage romance, with a mix of magnetic attraction and the pain of unrequited love. The chorus emphasizes the idea of leaving a lasting impact on someone's personal history, with a love that's impossible to forget. The emotional intensity builds up to an outro that expresses regret and the realization of a love lost, using metaphors like a ticking clock and crashing waves to illustrate the inner turmoil. The song is a poignant reflection on the fleeting nature of love and the impact it can have on our lives.`,lyre_response:`[Intro]
My heart's been beatin', it's been beatin'
Oh, since you stepped into my life
And I just can't control it
No, I can't control it
[Verse 1]
There's a gym in the basement of the 
50s house
Where the walls are sweating and the porch lights are glowing
And I wait by the phone for you to call me
Up at 5:00 AM to see if it's raining
In the city that you picked for me
With the restaurant that you worked in
Bustling and busy, just like you
And your handshake is as strong as your promises
In your eyes, I can see all the places
That you've been and the things that you've seen
And I feel like I know you, but I've never met you
[Chorus]
I couldn't be there to make friends, to drink coffee
And watch TV with you in the evening
I just wanted to be there to see you
And be a legend in your story
You'd tell your friends, "I met this girl
And she's gonna be somebody
She's gonna do something amazing
With her life'"
And they'd say, "Who is she?"
And you would say, "Well, I don't know
But I met her in a coffee shop
When I was 19, in a T-shirt and jeans
And she's gonna change the world"
[Verse 2]
And I'd say, "I couldn't be there
To see you at the 7:00 movie
Or at the 9:30 show
But I just wanted to be there at 10:00
When you sneak in through the back door
And how your voice sounds when you laugh
And how it vibrates through my chest
And how I can feel it in my heart
Even though you're 3,000 miles away"
[Chorus]
I couldn't be there to make friends, to drink coffee
And watch TV with you in the evening
I just wanted to be there to see you
And be a legend in your story
You'd tell your friends, "I met this girl
And she's gonna be somebody
She's gonna do something amazing
With her life'"
And they'd say, "Who is she?"
And you would say, "Well, I don't know
But I met her in a coffee shop
When I was 19, in a T-shirt and jeans
And she's gonna change the world"
[Post-Chorus]
But I couldn't be there
So I'll never know
If she'd be my somebody
Or just a stranger
That I met in a coffee shop
When I was 19, in a T-shirt and jeans
And she's not gonna change the world [Outro]
My heart's been beatin', it's been beatin'
Since you stepped into my life
And I just can't control it
No, I can't control it
Time is a ticking, the clock is a ticking
And I can't control it
No, I can't control it
Your love is a cradle, it rocks me gently
And I can't control it
No, I can't control it
The waves are crashing, and they're washing over me
And I can't control it
No, I can't control it
[Bridge]
I know that it's pointless to call you now
But I can't help myself
I just want to hear your voice, to know
If you're alright
I've been flashing back to that 1950s gymnasium
With the mismatched stars that we were living in
And I keep hoping that you're coming back to me
But I know that's not happening
[Outro]
My heart's been beatin', it's been beatin'
Since you stepped into my life
And I just can't control it
No, I can't control it
Time is a ticking, the clock is a ticking
And I can't control it
No, I can't control it
Your love is a cradle, it rocks me gently
And I can't control it
No, I can't control it
The waves are crashing, and they're washing over me
And I can't control it
No, I can't control it
[Chorus]
I couldn't be there to make friends, to drink coffee
And watch TV with you in the evening
I just wanted to be there to see you
And be a legend in your story
You'd tell your friends, "I met this girl
And she's gonna be somebody
She's gonna do something amazing
With her life'"
And they'd say, "Who is she?"
And you would say, "Well, I don't know
But I met her in a coffee shop
When I was 19, in a T-shirt and jeans
And she's gonna change the world"`,id:9538403},{name:"Stars",artist:"Ozuna",llama_response:`Title: "Imagination's Power"

Verse 1 (Ozuna):
Yo quiero vivir mi vida, sin temor a lo que digan
Sigo mi corazón, sin pararme en los obstáculos
No me importa lo que dice el mundo, yo sé lo que quiero
Ya sé que puedo hacerlo, si imagino que puedo

Chorus (feat. English-speaking artist):
Imagination's power, it sets us free
We can be anything we want to be
No limits, no fears, just pure imagination
Making our dreams come true, it's our only vision

Verse 2 (Ozuna):
Sometimes I feel like giving up, but then I remember
The power of imagination, it never forgets
It helps me find the strength, to keep moving forward
And never let anyone else define my destiny

Chorus (feat. English-speaking artist):
Imagination's power, it sets us free
We can be anything we want to be
No limits, no fears, just pure imagination
Making our dreams come true, it's our only vision

Verse 3 (English-speaking artist):
I know it's hard to break free, from the chains that hold us back
But with every breath we take, we can start to attack
Our doubts and fears, they fade away
As we embrace the power of our imagination every day

Chorus (feat. Ozuna):
Imagination's power, it sets us free
We can be anything we want to be
No limits, no fears, just pure imagination
Making our dreams come true, it's our only vision

Bridge (Ozuna):
Yo creo en mi imaginación, es mi fuego interno
El que me hace seguir adelante, sin importar el costo
Yo sé que puedo hacerlo, porque imagino que puedo
Y eso es lo que me hace seguir luchando, hasta el final

Chorus (feat. English-speaking artist):
Imagination's power, it sets us free
We can be anything we want to be
No limits, no fears, just pure imagination
Making our dreams come true, it's our only vision

Outro (Ozuna):
Así que no dejes que nadie te detenga
Sigue tu camino, y no te rindas
Con la fuerza de la imaginación, puedes hacer lo que quieras
Y vivirás tu vida al máximo, sin temor a lo que digan.

The song blends reggaeton rhythms with pop influences, creating an upbeat and vibrant tone that reflects the themes of self-empowerment and the importance of following one's own path. The collaboration between Ozuna and an English-speaking artist adds a unique touch to the song, making it accessible to a wider audience. The lyrics encourage listeners to believe in themselves and not be held back by others, and the hook captures the freeing power of imagination. The verses mix both Spanish and English, reflecting on living life to the fullest and overcoming doubts, making the song perfect for both reflective moments and lively celebrations.`,lyre_response:`[Intro: Ozuna]
Woh-oh, woh-oh
[Letra de "La Felicidad"]
[Coro: Ozuna & 
Kelsea Ballerini
]
Sé que algunos pueden no entender
Cuando digo que la felicidad
Noelia, Noé, Félix, eso es lo que dijeron
Pero yo quiero que me creas
Y te voy a mostrar
Que es posible alcanzar
[Verso 1: Ozuna]
Cuando llego a una fiesta
Me ponen a bailar
Cuando me enamoro
Pasajero
Cuando quiero sentirme
Difícil
Cuando digo que la felicidad
[Coro: Ozuna & 
Kelsea Ballerini
]
Sé que algunos pueden no entender
Cuando digo que la felicidad
Noelia, Noé, Félix, eso es lo que dijeron
Pero yo quiero que me creas
Y te voy a mostrar
Que es posible alcanzar
[Post-Coro: Ozuna & 
Kelsea Ballerini
]
Imagina lo que sería
Si de verdad creyeras en algo
Tu suerte lo cambiaría
Y alcanzarías lo más alto (Lo más alto)
(Woh-oh, woh-oh)
Imagina lo que sería
Si de verdad creyeras en algo
Tu suerte lo cambiaría
Y alcanzarías lo más alto
[Verso 2: Ozuna & 
Kelsea Ballerini
]
Yo vendo cosas en la calle
Sé que algunos lo dudan
Pero yo te voy a mostrar
Que es posible alcanzar (Woh-oh, woh-oh)
Cuando llego a una fiesta
Me ponen a bailar
Cuando me enamoro
Pasajero
Cuando quiero sentirme
Difícil
Cuando digo que la felicidad [Coro: Ozuna & 
Kelsea Ballerini
]
Sé que algunos pueden no entender
Cuando digo que la felicidad
Noelia, Noé, Félix, eso es lo que dijeron
Pero yo quiero que me creas
Y te voy a mostrar
Que es posible alcanzar
[Post-Coro: Ozuna & 
Kelsea Ballerini
]
Imagina lo que sería
Si de verdad creyeras en algo
Tu suerte lo cambiaría
Y alcanzarías lo más alto
(Woh-oh, woh-oh)
Imagina lo que sería
Si de verdad creyeras en algo
Tu suerte lo cambiaría
Y alcanzarías lo más alto
[Verso 3: Kelsea Ballerini]
Me gusta soñar
Ya no piensas mal de mí
Me gusta soñar
Ya no piensas mal de mí
Me gusta soñar
Ya no piensas mal de mí
Me gusta soñar
Ya no piensas mal de mí
Cuando creas
En algo, puedes alcanzar
Cuando creas
En algo, puedes alcanzar
(Woh-oh, woh-oh)
[Coro: Ozuna & 
Kelsea Ballerini
]
Sé que algunos pueden no entender
Cuando digo que la felicidad
Noelia, Noé, Félix, eso es lo que dijeron
Pero yo quiero que me creas
Y te voy a mostrar
Que es posible alcanzar
[Outro: Ozuna]
Woh-oh, woh-oh`,id:8733841},{name:"Fighting Myself",artist:"Linkin Park",llama_response:`Verse 1 (Mike Shinoda):
I'm stuck in this hellhole, can't escape the past
Regret lingers like a ghost, won't let me move on at last
Mistakes I've made, they haunt me every day
Can't find my way, lost in a sea of dismay

Chorus (Powerful Rock Chorus):
I'm trying to break free, but the weight is too much
Can't shake off the shame, it's tearing me apart
I'm searching for a way out, but it's hard to find
The demons inside, they're always on my mind

Verse 2 (Chester Bennington):
I'm drowning in my thoughts, can't find my way out
The guilt and the shame, they're crushing me without a doubt
I'm trying to rise above, but it's hard to find the strength
The memories of what I've done, they haunt me with their length

Chorus (Powerful Rock Chorus):
I'm trying to break free, but the weight is too much
Can't shake off the shame, it's tearing me apart
I'm searching for a way out, but it's hard to find
The demons inside, they're always on my mind

Bridge (Mike Shinoda):
I know I'm not alone, we all make mistakes
But the weight of our own regret, it's hard to escape
We're all fighting the same fight, trying to find our way
But the past can be cruel, it'll keep us in its sway

Chorus (Powerful Rock Chorus):
I'm trying to break free, but the weight is too much
Can't shake off the shame, it's tearing me apart
I'm searching for a way out, but it's hard to find
The demons inside, they're always on my mind

Outro (Chester Bennington):
I'll keep on fighting, I won't give up the fight
I'll rise above the pain, I'll shine with all my might
I'll find my way out, I'll leave the past behind
I'll be free from the regret, I'll be free to shine.

This song captures the internal struggle with regret and the desire to change the past, while also exploring the theme of falling from grace and the fight against self. The mix of rap verses and powerful, melodic rock choruses reflects the dynamic vocal interplay between Mike Shinoda and Chester Bennington, while the introspective lyrics convey a sense of introspection and emotional depth. The energetic yet emotional instrumental background adds to the overall intensity of the song, making it a powerful exploration of the human experience.`,lyre_response:`[Intro]
(
I'm just barely holdin' on
)
[Verse 1: Mike Shinoda]
Sometimes I wake up
Praying that it's all a dream
Trying to convince myself
That what you're feelin' isn't real
And you know I feel your pain
It's all in your head, you know that
But sometimes it ain't
Sometimes the things you can't say
Make you wanna scream
[Chorus: Chester Bennington]
All you can do is all you can do
All you can do is all you can do
(
I'm just barely holdin' on
)
[Verse 2: Mike Shinoda]
Crawlin' through the mud
Hands bloodied, knees scrapped
Feelin' like a god
But not the divine one
More like the tarnished, broken kind
Prayin' someone will come and save me
Save me from this sea of regret
[Chorus: Chester Bennington]
All you can do is all you can do
All you can do is all you can do
(
I'm just barely holdin' on
)
All you can do is all you can do
All you can do is all you can do
(
I'm just barely holdin' on
)
All you can do is all you can do
All you can do is all you can do [Outro: Mike Shinoda]
(
I'm just barely holdin' on
)
It's all in your head, you know that
But sometimes it ain't
Sometimes the things you can't say
Make you wanna scream`,id:8760629},{name:"That’s Not How This Works",artist:"Charlie Puth",llama_response:`(Verse 1)
I thought we had it all figured out, but now I'm feeling doubt
Every time you say you love me, it's like a rollercoaster ride
One minute you're in, the next you're out, it's like you're hiding
Signals crossed, mixed messages, I'm losing my mind

(Chorus)
That's not how this works, no, no, no
Can't you see the love we had is gone?
That's not how this works, no, no, no
We need to face the truth, it's time to move on

(Verse 2)
I try to hold on to what we had, but it's slipping away
Every time I think you're back, you pull me back again
I'm drowning in your inconsistency
Can't you see the hurt you're causing me?

(Chorus)
That's not how this works, no, no, no
Can't you see the love we had is gone?
That's not how this works, no, no, no
We need to face the truth, it's time to move on

(Bridge)
I thought we had a love that would last
But now it's just a memory, a past
I'm trying to hold on to what we had
But it's like trying to hold on to sand

(Chorus)
That's not how this works, no, no, no
Can't you see the love we had is gone?
That's not how this works, no, no, no
We need to face the truth, it's time to move on

(Outro)
I'll always remember the way you made me feel
But I can't keep holding on to a love that's no longer real
That's not how this works, no, no, no
It's time to move on, let go of the past.

This song is written in the style of Charlie Puth, with a focus on poignant lyrics and a catchy chorus. The lyrics express the frustration of a conflicted and strained relationship, with inconsistent and confusing signals from a partner. The song captures the emotional turmoil of trying to hold on to what once was, while dealing with the reality of a love that may no longer be viable. The chorus emphasizes the theme of mixed signals and the need to face the truth and move on. The bridge provides a emotional punchline, highlighting the impermanence of love and the need to let go.`,lyre_response:`[Intro]
That's not how this works
That's not how this works
That's not how this works
That's not how this works
[Verse 1]
You're so confused, you're so undecided
You're sending me mixed signals, I'm getting frustrated
You're saying you're tired, you're saying you're bored
You're going away, but you keep on coming back for more
[Pre-Chorus]
But if you want me to stay, you're gonna have to do better
You've got to give me something to believe in
[Chorus]
That's not how this works
You can't keep me guessin'
That's not how this works
You're so inconsistent
That's not how this works
You're not making it easy
That's not how this works
Oh, that's not how this works [Verse 2]
You're overprotective, you're underconstructive
You're always so critical, I'm getting destructive
You're saying you're sorry, you're saying you love me
You're going away, but you keep on coming back for me, for me [Pre-Chorus]
But if you want me to stay, you're gonna have to do better
You've got to give me something to believe in
[Chorus]
That's not how this works
You can't keep me guessin'
That's not how this works
You're so inconsistent
That's not how this works
You're not making it easy
That's not how this works
Oh, that's not how this works [Bridge]
I'm crying, I'm crying
I'm crying, I'm crying
I'm crying, I'm crying
I'm crying, I'm crying
I'm crying, I'm crying
I'm crying, I'm crying
I'm crying, I'm crying
I'm crying, I'm crying
I'm crying, I'm crying
[Breakdown]
That's not how this works
You can't keep me guessin'
That's not how this works
You're so inconsistent
That's not how this works
You're not making it easy
That's not how this works [Chorus]
That's not how this works
You can't keep me guessin'
That's not how this works
You're so inconsistent
That's not how this works
You're not making it easy
That's not how this works
Oh, that's not how this works`,id:7358067},{name:"Sweeter Than Fiction",artist:"Taylor Swift",llama_response:`Verse 1:
I was lost in the dark, couldn't find my way
Adversity knocked me down, day by day
But I won't give up, I won't give in
I'll rise up, like a phoenix, and start again

Chorus:
I've been through the fire, and I've been through the rain
But I'm not the same, I've been remade
I've learned to rise, I've learned to shine
I'm standing tall, I'm feeling fine

Verse 2:
I've seen the depths of my soul, and I've seen the light
I've fought for every breath, and I've fought for my life
But I won't forget, where I've been
I'll carry it with me, like a lesson learned

Chorus:
I've been through the fire, and I've been through the rain
But I'm not the same, I've been remade
I've learned to rise, I've learned to shine
I'm standing tall, I'm feeling fine

Bridge:
I'll rise above, I'll rise above the pain
I'll rise above, I'll rise above the shame
I'll rise above, I'll rise above the fear
I'll rise above, I'll rise above the tears

Chorus:
I've been through the fire, and I've been through the rain
But I'm not the same, I've been remade
I've learned to rise, I've learned to shine
I'm standing tall, I'm feeling fine

Outro:
I've overcome, I've risen from the ashes
I've found my voice, I've found my cause
I'll keep on fighting, I'll keep on shining
I'm a survivor, I'm a warrior, I'm a queen.

This song is written in the style of Taylor Swift, with a melodic pop sound and inspiring crescendos that evoke a similar emotional impact to her anthemic choruses. The lyrics convey the journey from struggle to triumph, embodying a sense of vindication and sweet victory, and include vivid imagery that paints a picture of transformation and resilience. The song's narrative is reflective and hopeful, conveying the message that no matter what life throws our way, we can rise above it and emerge stronger and more resilient.`,lyre_response:`[Intro]
I remember, I was lost
And no one would answer
I was the missing
And no one would trust me
And I spent years, oh
Years of my life
Trying to make them understand
[Verse 1]
I was in the dark, now I'm seein' the light
I was stuck in the wreckage, but now I'm flyin' high
I was under the table, but now I'm on top of the hill
I was surrounded by shadows, but now I can see
[Pre-Chorus]
It takes time, it takes work
It takes thinkin' you'll never get there
But you'll learn to soar, and you'll never fall
[Chorus]
And I won, and it feel so good, and it feel so bad (So good, so bad)
'Cause I fought, and it hurt so good, and it hurt so bad (So good, so bad)
And I won, and it feel so good, and it feel so bad (So good, so bad)
And you will win too, and it will feel so good, and it will hurt so bad (So good, so bad)
[Verse 2]
I remember, I was lost
And no one would answer
I was the missing
And no one would trust me
And I spent years, oh
Years of my life
Trying to make them understand
[Pre-Chorus]
It takes time, it takes work
It takes thinkin' you'll never get there
But you'll learn to soar, and you'll never fall
[Chorus]
And I won, and it feel so good, and it feel so bad (So good, so bad)
'Cause I fought, and it hurt so good, and it hurt so bad (So good, so bad)
And I won, and it feel so good, and it feel so bad (So good, so bad)
And you will win too, and it will feel so good, and it will hurt so bad (So good, so bad)
[Bridge]
I've got a story to tell
I've got a story to sell
I've got a story to sell
I've got a story to tell (
Sell
)
[Chorus]
And I won, and it feel so good, and it feel so bad (So good, so bad)
'Cause I fought, and it hurt so good, and it hurt so bad (So good, so bad)
And I won, and it feel so good, and it feel so bad (So good, so bad)
And you will win too, and it will feel so good, and it will hurt so bad (So good, so bad) [Outro]
It takes time, it takes work
It takes thinkin' you'll never get there
But you'll learn to soar, and you'll never fall
It takes time, it takes work
It takes thinkin' you'll never get there
But you'll learn to soar, and you'll never fall`,id:241562},{name:"HOPE",artist:"NF",llama_response:`Verse 1:
I was lost in my own mind, consumed by my fears
Doubt crept in like a thief, stole my self-respect and my tears
But I won't let it define me, no, I won't give in
I'll rise above the noise, and let my voice be heard within

Chorus:
I'm breaking free from the chains of my past
Leaving the doubts and the fears, where they'll forever last
I'm learning to love myself, to let go of the pain
I'm growing, I'm healing, I'm becoming the person I'll remain

Verse 2:
I used to hide behind a mask, a facade of who I thought I should be
But the more I tried to fit in, the more I lost my identity
Now I see the light, the truth, the beauty in my flaws
And I'm embracing every part of me, no more hiding in the shadows

Chorus:
I'm breaking free from the chains of my past
Leaving the doubts and the fears, where they'll forever last
I'm learning to love myself, to let go of the pain
I'm growing, I'm healing, I'm becoming the person I'll remain

Bridge:
Life may throw us curves, but we're strong enough to face
We're warriors, we're survivors, we're here to embrace
The struggles we've endured, the scars we've earned
We're proof that we can rise, that we can transform

Chorus:
I'm breaking free from the chains of my past
Leaving the doubts and the fears, where they'll forever last
I'm learning to love myself, to let go of the pain
I'm growing, I'm healing, I'm becoming the person I'll remain

Outro:
I'm not the same person I used to be
I've grown, I've learned, I've found my identity
I'm proud of who I am, I'm proud of who I've become
I'm breaking free, I'm rising up, I'm living life to the fullest.

This song, "Breaking Free," channels NF's signature introspective and emotionally raw storytelling style, while incorporating his signature blend of rap and melodic elements. The lyrics delve into the complexities of personal growth, overcoming self-doubt, and facing life's challenges head-on, all while maintaining a confessional and intense narrative. The song reflects on past struggles, the journey of self-improvement, and the resolve to be a better person for oneself and for family, while maintaining a message of hope and resilience.`,lyre_response:`[Verse]
Yeah, it's been a while
I've been tryna figure out how to do this without breaking down
I'm not the same person that you knew
I've been workin' on myself, I'm different now
I'm not perfect, but I'm worth it
I'm not perfect, but I'm worth it
I'm not perfect, but I'm worth it
I'm not perfect, but I'm worth it
[Chorus]
I'm worth it, I'm worth it
I'm worth it, I'm worth it
I'm worth it, I'm worth it
I'm worth it, I'm worth it
I'm worth it, I'm worth it
I'm worth it, I'm worth it
I'm worth it, I'm worth it
I'm worth it, I'm worth it
I'm worth it, I'm worth it
[Verse]
It's gonna take some time
I'm tryna figure out how to do this without breaking down
I'm not the same person that you knew
I've been workin' on myself, I'm different now
I'm not perfect, but I'm worth it
I'm not perfect, but I'm worth it
I'm not perfect, but I'm worth it
I'm not perfect, but I'm worth it
[Chorus]
I'm worth it, I'm worth it
I'm worth it, I'm worth it
I'm worth it, I'm worth it
I'm worth it, I'm worth it
I'm worth it, I'm worth it
I'm worth it, I'm worth it
I'm worth it, I'm worth it
I'm worth it, I'm worth it
I'm worth it, I'm worth it
I'm worth it, I'm worth it [Outro]
I'm worth it, I'm worth it
I'm worth it, I'm worth it
I'm worth it, I'm worth it
I'm worth it, I'm worth it
I'm worth it, I'm worth it
I'm worth it, I'm worth it
I'm worth it, I'm worth it
I'm worth it, I'm worth it
I'm worth it, I'm worth it`,id:8829528},{name:"STATE OF THE WORLD",artist:"Michael Jackson",llama_response:`(Verse 1)
We're living in a world where injustice reigns
From Qatar to the streets, inequality remains
3-5-7-9, equality for all every time
But they don't really care about us, it's a crime

(Chorus)
2-4-6-8, Qatar must legislate
We demand action, it's time to state
We want equality, we want change
We won't be silent, we'll rearrange

(Verse 2)
From discrimination to oppression, we see
Marginalized groups suffer, can't be free
Their voices silenced, their rights ignored
It's time for us to rise, and let our voices be heard

(Chorus)
2-4-6-8, Qatar must legislate
We demand action, it's time to state
We want equality, we want change
We won't be silent, we'll rearrange

(Bridge)
We call on FIFA, and all in power
To stand with us, and show they care
For the love of the game, let's unite
And end this injustice, let's ignite

(Spoken Word)
We're not just talking about a game
We're talking about lives, we're talking about shame
Shame on you, FIFA, for turning a blind eye
Shame on you, world, for standing by

(Chorus)
2-4-6-8, Qatar must legislate
We demand action, it's time to state
We want equality, we want change
We won't be silent, we'll rearrange

(Outro)
So let's stand up, and let our voices be heard
Let's demand change, and let love be the word
We'll spread love over hate, we'll rise above
For equality and justice, we'll never give up.

In this song, I have taken inspiration from Michael Jackson's anthemic tracks, incorporating a strong message of equality and a catchy hook that demands action. The lyrics reflect a sense of urgency and a plea for global solidarity, particularly in support of marginalized groups in Qatar, while maintaining the musical energy and signature pop sound characteristic of Michael Jackson's music. The spoken word elements directly call out institutions like FIFA, underscoring the song with an upbeat yet defiant tone that encourages spreading love over hate. The song's message of equality and justice is conveyed through a series of rhythmic chants and calls to action, emphasizing the need for legislative change and global solidarity.`,lyre_response:`[Intro]
They don't really care about us
They don't really care about us
They don't really care about us
They don't really care
[Verse 1]
We're desperate
So, what do we do?
When we're feeling that way
We all need a little bit of empathy
We're hopeless
So, what do we do?
When we're feeling that way
We need to come together and fight for the rights of the people, 
of the people
We're tired
So, what do we do?
When we're feeling that way
We all need to come together and fight for the rights of the people, of the people
[Refrain]
2-4-6-8 Qatar must legislate
3-5-7-9 Equality for all every time
[Verse 2]
They don't really care about us
They go, "We did it for the game"
But what do they really care about?
They don't really care about us
They don't really care about us
They go, "We did it for the game"
But what do they really care about? [Chorus]
2-4-6-8 Qatar must legislate
3-5-7-9 Equality for all every time
They don't really care about us
What do they really care about?
2-4-6-8 Qatar must legislate
3-5-7-9 Equality for all every time
They don't really care about us
What do they really care about? [Spoken Word]
I'm talking to you, FIFA
I'm talking to you, the fans
Let's all go crazy
But, you know what?
We're not gonna go crazy
Until we get it right
What do they really care about?
What do they really care about? [Bridge]
Love, love, love, love
Over hate, hate, hate, hate
Love, love, love, love
Over hate, hate, hate, hate
[Verse 3]
So, let's all come together
And fight for the rights of the people, of the people
With our voices, we will be heard
We'll fight for the rights of the people, of the people
We're hopeless
So, what do we do?
When we're feeling that way
We need to come together and fight for the rights of the people, of the people
[Chorus]
2-4-6-8 Qatar must legislate
3-5-7-9 Equality for all every time
They don't really care about us
What do they really care about?
2-4-6-8 Qatar must legislate
3-5-7-9 Equality for all every time
They don't really care about us
What do they really care about?
[Refrain]
2-4-6-8 Qatar must legislate
3-5-7-9 Equality for all every time`,id:8484071},{name:"Gimme",artist:"Sam Smith",llama_response:`Title: Gimme What I Want (feat. Chronixx)

Verse 1 (Sam Smith):
I've been searching for so long
Tryna find my place in this world
But every time I think I'm getting close
It slips right through my hands like a bird

Chorus (Sam Smith & Chronixx):
Gimme what I want, gimme what I need
Gimme the love that I deserve
Gimme the chance to be free
Gimme what I want, gimme what I need

Verse 2 (Chronixx):
I hear you crying out for more
But you ain't getting it, no more
You gotta stand up for what you desire
And demand it like a burning fire

Chorus (Sam Smith & Chronixx):
Gimme what I want, gimme what I need
Gimme the love that I deserve
Gimme the chance to be free
Gimme what I want, gimme what I need

Bridge (Sam Smith):
I know it's hard to break the mold
But I can't keep living in the past
I need to take a stand and make it bold
Gimme what I want, gimme what I need at last

Chorus (Sam Smith & Chronixx):
Gimme what I want, gimme what I need
Gimme the love that I deserve
Gimme the chance to be free
Gimme what I want, gimme what I need

Outro (Sam Smith):
I'll keep on fighting for my rights
Gimme what I want, gimme what's right
I won't back down, I won't give in
Gimme what I want, gimme what I need within

This song blends pop-soul with smooth vocal harmonies, while incorporating a sense of yearning and intensity in both the lyrics and delivery. The repetitive chorus emphasizes the phrase "gimme what I want," creating a catchy and memorable hook. The collaboration with Chronixx brings a reggae influence to the table, creating a dynamic and engaging musical conversation between the two artists. The contrasting styles complement each other well, resulting in a unique and captivating sound. The lyrics are bold and assertive, demanding what one desires, while also highlighting the importance of standing up for what one wants and needs. Overall, this song is a powerful and emotive expression of the human desire for love, freedom, and fulfillment.`,lyre_response:`[Intro: Poo Bear]
Gimme what I want
(
Oh-oh, gimme what I want
)
Gimme what I want
(
Oh-oh, gimme what I want
)
Gimme what I want
(
Oh-oh, gimme what I want
)
Gimme what I want (What I want)
[Verse 1: Sam Smith]
Gimme what I want
(What I want), gimme what I want
(What I want)
Gimme what I want
(What I want), gimme what I want
(What I want)
Gimme what I want
(What I want), gimme what I want
(What I want)
I wanna know, gimme what I want
(What I want), gimme what I want
(What I want)
I wanna see, gimme what I want
(What I want), gimme what I want
(What I want)
I wanna be, gimme what I want
(What I want), gimme what I want
(What I want)
[Chorus: Poo Bear & 
Sam Smith
]
Gimme what I want
(
Oh-oh, gimme what I want
)
Gimme what I want
(
Oh-oh, gimme what I want
)
Gimme what I want
(
Oh-oh, gimme what I want
)
Gimme what I want (
What I want
)
Gimme what I want
(
Oh-oh, gimme what I want
)
Gimme what I want
(
Oh-oh, gimme what I want
)
Gimme what I want
(
Oh-oh, gimme what I want
)
Gimme what I want (
What I want
)
Gimme what I want
(
Oh-oh, gimme what I want
)
Gimme what I want
(
Oh-oh, gimme what I want
)
Gimme what I want
(
Oh-oh, gimme what I want
)
Gimme what I want (What I want)
[Verse 2: Koffee]
Gonna get what's mine
(What I want), gonna get what's mine
(What I want)
Put in the work and I shine
Gonna get what's mine
(What I want), gonna get what's mine
(What I want)
Put in the work and I shine
Gonna get what's mine
(What I want), gonna get what's mine
(What I want)
Put in the work and I shine
Gonna get what's mine
(What I want), gonna get what's mine
(What I want)
Put in the work and I shine [Chorus: Poo Bear & 
Sam Smith
]
Gimme what I want
(
Oh-oh, gimme what I want
)
Gimme what I want
(
Oh-oh, gimme what I want
)
Gimme what I want
(
Oh-oh, gimme what I want
)
Gimme what I want (What I want)
Gimme what I want
(
Oh-oh, gimme what I want
)
Gimme what I want
(
Oh-oh, gimme what I want
)
Gimme what I want
(
Oh-oh, gimme what I want
)
Gimme what I want (What I want)
Gimme what I want
(
Oh-oh, gimme what I want
)
Gimme what I want
(
Oh-oh, gimme what I want
)
Gimme what I want
(
Oh-oh, gimme what I want
)
Gimme what I want (What I want)`,id:8542976},{name:"Daylight",artist:"Drake",llama_response:`Verse 1:
I was in the trap, sippin' on a 40, when I seen it all go down
Lost my homie to a snitch, had to watch him hit the ground
Feels like betrayal, like a knife in my back, every day
But I ain't tryna fall apart, gotta keep my head straight

Chorus:
She said she loved me, but she lied, now I'm left to die
But I won't let it get me down, gon' rise above the sky
Got my crew by my side, they know I'm the real deal
Got my own lane, ain't nobody touchin' my wheels

Verse 2:
Forgive me for my sins, but I ain't never gonna change
I'm the king of this game, ain't nobody gonna rearrange
Loyalty is key, that's what I preach every day
But when you're in the streets, you gotta do what you gotta say

Chorus:
She said she loved me, but she lied, now I'm left to die
But I won't let it get me down, gon' rise above the sky
Got my crew by my side, they know I'm the real deal
Got my own lane, ain't nobody touchin' my wheels

Verse 3:
I seen it all, from the trap to the mansion
But the streets will always be my home, that's the only one I got
Told you I was hardened, that's what they call me
But deep down, I'm still the same, just a kid from the 6

Chorus:
She said she loved me, but she lied, now I'm left to die
But I won't let it get me down, gon' rise above the sky
Got my crew by my side, they know I'm the real deal
Got my own lane, ain't nobody touchin' my wheels

Outro:
Thought I was invincible, but life had other plans
But I won't let it break me, gon' rise above the hands
I got my own connections, got my own crew
Got my own voice, ain't nobody gonna silence me, boo

In this song, I've tried to capture the essence of Drake's hardened, street-savvy persona, with sharp wordplay and references to past relationships, loyalty, and the street code. The beat is moody and trap-influenced, reflecting themes of betrayal and resilience. The lyrics are layered with complex metaphors and braggadocio, typical of Drake's music, and the tone is defiant and confident. The song also has a contrasting softer note in the outro, hinting at personal connections and vulnerability, which is a signature element of Drake's music.`,lyre_response:`[Intro]
Yeah, it's Drake
You wouldn't believe your eyes
[Pre-Chorus]
And when it came down to loading up the clips
He took the guns, I took the rings
She gon' tell me lies if she goes talkin' to the cops
I should probably kill you before the trial, that's when
[Chorus]
I found out it was you that told the police where my stash was hidin' (Woah, woah, woah, woah, woah, 
dude, where is it?
)
I found out it was you that told the police where my stash was hidin' (Woah, woah, woah, woah, woah, 
dude, where is it?
)
I found out it was you that told the police where my stash was hidin'
 (Woah, woah, woah, woah, woah)
I found out it was you that told the police where my stash was hidin' (Woah, woah, woah, woah, woah, 
dude, where is it?
)
I found out it was you that told the police where my stash was hidin' (Woah, woah, woah, woah, woah)
I found out it was you that told the police where my stash was hidin'
 (Woah, woah, woah, woah, woah)
[Verse 1]
Never knew I'd give your ass a fade, ha
Had to do it, you a dead man, walkin' Zed, ha
I'm connectin' all the dots, doin' numbers with Errol, ha
I'll be the net, you'll be the ball, you'll be goin' over, ha
[Pre-Chorus]
And when it came down to loading up the clips
 (Uh) He took the guns, I took the rings
 (Uh) She gon' tell me lies if she goes talkin' to the cops
 (Uh) I should probably kill you before the trial, that's when (Woah)
[Chorus]
I found out it was you that told the police where my stash was hidin'
 (Woah, woah, woah, woah, woah)
I found out it was you that told the police where my stash was hidin' (Woah, woah, woah, woah, woah, 
dude, where is it?
)
I found out it was you that told the police where my stash was hidin' (Woah, woah, woah, woah, woah)
I found out it was you that told the police where my stash was hidin'
 (Woah, woah, woah, woah, woah)
[Verse 2]
You're a fun one, once they run one, gotta get some, right?
You know I'm a tryna fuck, tell me where the body is, right?
I mean, you were just with him, right?
Tell me where the body is, I'll do the same with him, right?
Tell me where the body is, right?
'Cause if you're with me, you won't ever get hurt, right?
If he gets hurt, you can tell me, right?
I won't ever hurt you, you can tell me, right?
If you love me, you won't ever leave me, right?
If he loves you, you'll never leave him, right?
I found out it was you that told the police where my stash was hidin'
 (Woah, woah, woah, woah, woah)
I found out it was you that told the police where my stash was hidin' (Woah, woah, woah, woah, woah, 
dude, where is it?
)
I found out it was you that told the police where my stash was hidin' (Woah, woah, woah, woah, woah)
I found out it was you that told the police where my stash was hidin'
 (Woah, woah, woah, woah, woah)
[Chorus]
I found out it was you that told the police where my stash was hidin'
 (Woah, woah, woah, woah, woah)
I found out it was you that told the police where my stash was hidin' (Woah, woah, woah, woah, woah, 
dude, where is it?
)
I found out it was you that told the police where my stash was hidin'
 (Woah, woah, woah, woah, woah)
I found out it was you that told the police where my stash was hidin'
 (Woah, woah, woah, woah, woah)
[Outro]
Hey, yeah, man
It's 6ix, man
Ayy, man
What's up, man?
Never take pictures with niggas, man
You never know who might be snitchin', man
Never trust a nigga, man
Just like that, man
Yeah, it's a cold world, man
But the money keep switchin' hands, man
And the cars keep movin', man
But the game stays the same, man
And I still got my head in the clouds, man
But my feet on the ground, man
Yeah, it's Drake
Man`,id:9592328},{name:"Kill Bill",artist:"The Weekend",llama_response:`Verse 1:
I thought I was strong, but you left me for dead
Now I'm lost in my head, consumed by my dread
I tried to move on, but I can't shake the past
Every night I see your face, and my heart crashes

Chorus:
I'm crawling through the dark, searching for a light
Tryna find a way to make it right
But every time I see you with someone new
I wanna rip their throat, and make them feel the blues
I'm lost in this obsession, it's eating me alive
I'm teetering on the edge, of a darker side

Verse 2:
I went to therapy, but it didn't help me much
Just a temporary fix, for a lifetime of such
I thought I'd found the cure, but it was just a drug
Now I'm hooked on you, and I can't break free

Chorus:
I'm crawling through the dark, searching for a light
Tryna find a way to make it right
But every time I see you with someone new
I wanna rip their throat, and make them feel the blues
I'm lost in this obsession, it's eating me alive
I'm teetering on the edge, of a darker side

Bridge:
I know I'm not myself, but I can't stop myself
From reaching out, from trying to mend the hurt
But every time I see you happy, it's like a knife
Cutting deeper, into my soul, and I can't survive

Chorus:
I'm crawling through the dark, searching for a light
Tryna find a way to make it right
But every time I see you with someone new
I wanna rip their throat, and make them feel the blues
I'm lost in this obsession, it's eating me alive
I'm teetering on the edge, of a darker side

Outro:
I'm trapped in this obsession, it's eating me alive
I'm teetering on the edge, of a darker side
I'm lost in this love, it's consuming me whole
I'm crawling through the dark, searching for a light.

This song is written in the style of The Weeknd, with a blend of R&B and pop elements, and a haunting melody that conveys a sense of maturity and a skewed perception of love. The lyrics explore the dark and obsessive side of love, where the protagonist struggles with intense jealousy and considers extreme measures after a breakup. The chorus is catchy yet chilling, reflecting the dangerous thoughts of harming an ex and their new partner out of a misguided desire to not be alone. The song builds up to a dramatic bridge, revealing the lengths the protagonist is willing to go for what they perceive as love, teetering on the edge of sanity, all while abstaining from substances, adding to the complexity of their emotions and actions.`,lyre_response:`[Intro]
My therapist tells me I'm better
So much better than I was
But I'm still not good enough
I look in the mirror and I see a better me
But I'm still not good enough
[Verse 1]
I've been taking my medicine
Just not in the way that you'd think
I'm not drinking or using
But that doesn't mean I'm using my brain
No, I'm not using my brain
I'm smoking your cigarettes
And drinking your wine
But that doesn't mean I'm not in pain
Oh, I'm in so much pain
[Pre-Chorus]
You're with somebody new
I can see it in your face, in your posture, in your smile
And it shows that you're happy, so happy, but
[Chorus]
I think I might fuck up your shit
I think I might fuck up your shit
And I know it's wrong, but I just can't help myself
I think I might fuck up your shit
And I know it's wrong, but I just can't help myself
I think I might fuck up your shit
I think I might fuck up your shit
And I know it's wrong, but I just can't help myself
I think I might fuck up your shit
I think I might fuck up your shit
And I know it's wrong, but I just can't help myself
[Verse 2]
Therapy's great, but it's not magic
I'm not cured, I'm just more aware
Of my actions and how they affect you
But that doesn't mean I'm in control, no
I'm not in control [Pre-Chorus]
You're with somebody new
I can see it in your face, in your posture, in your smile
And it shows that you're happy, so happy, but
[Chorus]
I think I might fuck up your shit
I think I might fuck up your shit
And I know it's wrong, but I just can't help myself
I think I might fuck up your shit
And I know it's wrong, but I just can't help myself
I think I might fuck up your shit
I think I might fuck up your shit
And I know it's wrong, but I just can't help myself
I think I might fuck up your shit
I think I might fuck up your shit
And I know it's wrong, but I just can't help myself
[Bridge]
So I'll wait in the dark for you
Just in case
You realize that you need me too
I'll be waiting in the dark for you
Just in case
You realize that you need me too
So I'll wait in the dark for you
Just in case
You realize that you need me too
I'll be waiting in the dark for you
Just in case
You realize that you need me too
So I'll wait in the dark for you
Just in case
You realize that you need me too
I'll be waiting in the dark for you
Just in case
You realize that you need me too
So I'll wait in the dark for you
Just in case
You realize that you need me too
I'll be waiting in the dark for you
Just in case
You realize that you need me too
So I'll wait in the dark for you
Just in case
You realize that you need me too
I'll be waiting in the dark for you
Just in case
You realize that you need me too`,id:8616820},{name:"HVN ON EARTH",artist:"Kodak Black",llama_response:`(Verse 1)
I was born in the streets, but I ain't never been weak
Got my eyes on the prize, and I won't never seek
I'm a H.O.E, H.O.E, Heaven on earth, that's what I'm living for
Got my homies by my side, we all grinding for more

(Chorus)
H.O.E, H.O.E, Heaven on earth, that's where I wanna be
H.O.E, H.O.E, Where the money long and the fame is free

(Verse 2)
I been through the struggle, but I ain't never lose
Kept my head on a swivel, and I won't never choose
My ambition's my fuel, it's what keeps me alive
Got my eyes on the top, and I won't never arrive

(Chorus)
H.O.E, H.O.E, Heaven on earth, that's where I wanna be
H.O.E, H.O.E, Where the money long and the fame is free

(Verse 3)
Loyalty is key, that's what I been taught
Can't nobody touch me, 'cause I got my own cloth
I'm a H.O.E, H.O.E, Heaven on earth, that's my crew
We all grinding for the same thing, and that's the truth

(Chorus)
H.O.E, H.O.E, Heaven on earth, that's where I wanna be
H.O.E, H.O.E, Where the money long and the fame is free

(Bridge)
I ain't never gonna stop, until I reach my goal
Got my eyes on the prize, and I won't never soil
I'm a H.O.E, H.O.E, Heaven on earth, that's my life
Got my homies by my side, we all living right

(Chorus)
H.O.E, H.O.E, Heaven on earth, that's where I wanna be
H.O.E, H.O.E, Where the money long and the fame is free

(Outro)
I'm a H.O.E, H.O.E, Heaven on earth, that's my name
Got my homies by my side, and we all living large
I'm a H.O.E, H.O.E, Heaven on earth, that's my goal
Got my eyes on the prize, and I won't never fold.

The modern trap beat for this song would feature a heavy bassline and hi-hats, with a snappy rhythm that complements Kodak Black's raw and gritty flow. The beat would be dark and atmospheric, with a focus on creating a sense of tension and release that enhances the emotional impact of the lyrics. The use of synths and other electronic elements would add depth and texture to the production, creating a sound that is both modern and nostalgic. The overall vibe of the beat would be intense and energetic, with a focus on pushing the listener to the limit and back again.`,lyre_response:`[Intro]
H.O.E, H.O.E, Heaven on earth
H.O.E, H.O.E, Heaven on earth
H.O.E, H.O.E, Heaven on earth
H.O.E, H.O.E, Heaven on earth
[Hook]
This is Heaven on earth, this is Heaven on earth
This is Heaven on earth, this is Heaven on earth
This is Heaven on earth, this is Heaven on earth
This is Heaven on earth
[Verse 1]
This is Kodak, Jackie Chan, he fight drunk
Bust a move, I'm dancing with the devil, it's okay, okay
I got twenty hoes live, like how I'm stayin' so clean, okay
I like youngins, fresh out of high school, needy, okay
My jaw lockin', chew on my money, I can't eat, okay
I'm on probation, can't leave town, I'm stuck, okay
Bail bondsman, his number, I keep on my phone, okay
I can't sleep, I'm up still, I'm doin' one hundred, okay
I might fuck up a semi, comin' down on a bitch, okay
This aZiano, made it from slavin', I don't shower, okay
I'm at the crib, it's a crackhouse, I don't know, okay
I can't do this, I'm a ghost, you can't follow, okay
This for all my ghosts, ride with me, you can't slow me, okay
[Hook]
This is Heaven on earth, this is Heaven on earth
This is Heaven on earth, this is Heaven on earth
This is Heaven on earth, this is Heaven on earth
This is Heaven on earth [Verse 2]
Fucked a bitch twice, in the same outfit, I'm nasty, I'm vicious
In another city, another stay-away from my daughter, I'm evil
Thirty bitches, thirty dicks, I'm gettin' money, I'm happy
I'm sippin' syrup, I can't walk straight, I'm silly, I'm saucy
I'm poppin' Xans, I can't feel my face, I'm starin' at the ceilin'
I'm doin' fifties, I can't reach my knees, I'm swearin' on my momma
I'm runnin' from the police, I'm drivin' on the median
I'm smokin' on the marijuana, I'm screamin', "Fuck Bill Clinton"
Fuck Donald Trump, I'm sure he hate me, I'm sure he love it
This for all my niggas in the Fed-Ex, this is overnight it
[Hook]
This is Heaven on earth, this is Heaven on earth
This is Heaven on earth, this is Heaven on earth
This is Heaven on earth, this is Heaven on earth
This is Heaven on earth`,id:9424345},{name:"Unholy",artist:"Sam Smith",llama_response:`Verse 1:
I've got a secret, it's something I can't reveal
A hidden truth that I've kept locked up for years
I've lived a double life, with two faces so bright
One for the world to see, and one for the night

Chorus:
But when the lights are low, and the night is still
I let my true self shine, and I give in to the thrill
Of the forbidden, the taboo, the secrets we keep
It's a game we play, with hearts that beat

Verse 2:
I've seen the look in your eyes, the one that's so bold
The way you whisper my name, when no one's looking old
I know you're just like me, with secrets to hide
And when we're alone, we'll let our guardides

Chorus:
But when the lights are low, and the night is still
I let my true self shine, and I give in to the thrill
Of the forbidden, the taboo, the secrets we keep
It's a game we play, with hearts that beat

Bridge:
We dance in the shadows, with steps so refined
Our secrets our safe, with the night as our shrine
We're the kings and queens, of this game we play
With hearts that beat, for the thrill of the night

Chorus:
But when the lights are low, and the night is still
I let my true self shine, and I give in to the thrill
Of the forbidden, the taboo, the secrets we keep
It's a game we play, with hearts that beat

Outro:
And when the night is over, and the sun starts to rise
We'll hide our secrets, and put on our disguise
But the thrill of the night, will always be our prize
In the game of secrecy, where hearts collide.

This song is written in the style of Sam Smith, with a focus on soulful vocals and emotional depth. The lyrics explore themes of secrecy and taboo, with a hint of drama and mischief. The catchy chorus contrasts with sultry and confessional verses, reflecting the dual lives of the characters involved. The collaborative elements of the song would suit a feature with an artist like Kim Petras, highlighting a blend of soulful vocals with edgy pop beats. The lyrics allude to scandalous activities and the thrill of the forbidden, while maintaining an air of sophistication and emotional depth.`,lyre_response:`[Chorus: Sam Smith & 
Kim Petras
]
I know a place (
I know a place
)
We can go to get away from all the people (
All the people
)
There's a room (
There's a room
)
We can go to keep our secrets out of sight
It's got a lock (
It's got a lock
)
And you know the key is 
(Turn it and see)
[Verse 1: Sam Smith & 
Kim Petras
]
I know a place (I know a place)
We can go to get away from all the people (All the people)
There's a room (There's a room)
We can go to keep our secrets out of sight
Do you dare to come with me?
[Pre-Chorus: Sam Smith & 
Kim Petras
]
I'm warning you, it's going to be
Dangerous, so dangerous
You should never come alone
[Chorus: Sam Smith & 
Kim Petras
]
I know a place (I know a place)
We can go to get away from all the people (All the people)
There's a room (
There's a room
)
We can go to keep our secrets out of sight
It's got a lock (
It's got a lock
)
And you know the key is 
(Turn it and see)
[Verse 2: Kim Petras]
I'm the one (I'm the one)
You've been texting, so sneaky, so sneaky
I know you wanna kiss me
 (I know you wanna kiss me)
When no one's looking (When no one's looking)
I'm the one you should be with
 (I'm the one you should be with)
I'm the one
 (I'm the one)
You've been texting, so sneaky, so sneaky
I know you wanna kiss me
 (I know you wanna kiss me)
When no one's looking (When no one's looking)
I'm the one you should be with
 (I'm the one you should be with)
[Pre-Chorus: Kim Petras]
I'm warning you, it's going to be
Dangerous, so dangerous
You should never come alone
[Chorus: Kim Petras & 
Sam Smith
]
I know a place (I know a place)
We can go to get away from all the people (All the people)
There's a room (
There's a room
)
We can go to keep our secrets out of sight
It's got a lock (
It's got a lock
)
And you know the key is 
(Turn it and see)
[Bridge: Sam Smith & 
Kim Petras
]
I'll be good, be good
I'll be good, be good
I'll be good, be good
I'll be good
 (I'll be good)
I'll be good, be good
I'll be good, be good
I'll be good, be good
I'll be good (I'll be good)
[Chorus: Sam Smith & 
Kim Petras
]
I know a place (I know a place)
We can go to get away from all the people (All the people)
There's a room (There's a room)
We can go to keep our secrets out of sight
It's got a lock (
It's got a lock
)
And you know the key is 
(Turn it and see)
I know a place (I know a place)
We can go to get away from all the people (All the people)
There's a room (There's a room)
We can go to keep our secrets out of sight
It's got a lock (
It's got a lock
)
And you know the key is 
(Turn it and see)`,id:8302862},{name:"8am in Charlotte",artist:"Drake",llama_response:`Verse 1:
I woke up this mornin', feelin' like a boss,
My cred in the streets is solid, no need to boast,
I'm livin' life on my own terms, don't need no one's approval,
Got my eyes on the prize, and I'm takin' it to the top, yo.

Chorus:
I'm the king of the game, ain't no one touchin' me,
Got my crown on tight, and it's plain to see,
I'm the one they all come to, when they need a hit,
I'm the real deal, and I won't forget,
Where I came from, and who I am,
I'm the one they all want, to be just like that.

Verse 2:
I remember when I was young, strugglin' to make a name,
Hustlin' every day, just to stay in the game,
But now I'm on top, and I ain't never gonna fall,
Got my loyal fans, and they're standin' tall,
They know the real me, and they know I'm true,
I ain't never gonna let 'em down, I'll always come through.

Chorus:
I'm the king of the game, ain't no one touchin' me,
Got my crown on tight, and it's plain to see,
I'm the one they all come to, when they need a hit,
I'm the real deal, and I won't forget,
Where I came from, and who I am,
I'm the one they all want, to be just like that.

Verse 3:
But with success comes fame, and the price I pay,
Gotta keep my cool, and stay on top of the game,
Can't let the haters get to me, gotta keep it real,
Got my legacy on my mind, and I won't reveal,
My secrets to the world, gotta keep it locked in,
Got my eyes on the future, and I won't give in.

Chorus:
I'm the king of the game, ain't no one touchin' me,
Got my crown on tight, and it's plain to see,
I'm the one they all come to, when they need a hit,
I'm the real deal, and I won't forget,
Where I came from, and who I am,
I'm the one they all want, to be just like that.

Outro:
So listen up y'all, I hope you understand,
This is my story, and this is my plan,
Got my sights on the top, and I won't give in,
I'm the king of the game, and I'll always win.

This song is written in the style of Drake, with a confident and introspective tone, clever wordplay, and a smooth flow. The lyrics reflect on personal success and the challenges of street credibility versus mainstream fame, with references to pop culture, personal anecdotes, and the idea of outlasting and outperforming any competition in the rap game. The song has a moody and atmospheric beat, typical of Drake's music, and the chorus is catchy and memorable. The lyrics also touch on themes of loyalty, legacy, and the juxtaposition of a lavish lifestyle with the realities of his origins.`,lyre_response:`[Intro]
Yeah, it's DeMar DeRozan, and I'm back
Just to tell you how I really feel
I wish I could put this in a Reply-All
Just so you know how I really feel
[Verse]
I wish everyone could tell me what they really feel
Sometimes I ask and they just don't tell me for real
But on my mom's life, I will not commit a crime
Or say a word that could harm my reputation, that's mine
My father's a provider, my father is a winner
My father's a dope dealer, who got pinched in 1996
I'm sure he still loves to hug and kiss me on the neck
Probably wants to spend more time with me, but I'm too accustomed
To moving every other year, having new teachers and classmates
Living in different time zones and staying in different hotels
I just want you to know that I'm a lot farther than you think
I just want you to know that I know what I'm doing, I'm on a mission
To prove to myself and everybody else that I am the truth
I don't want to be remembered as that kid from the hood with the mansion
I want it dedicated to all the real ones that stuck with me through the mission
I want it dedicated to all the real ones that stuck with me through the mission
I want it dedicated to all the real ones that stuck with me through the mission [Outro]
Yeah, it's DeMar DeRozan, and I'm back
Just to tell you how I really feel
I wish I could put this in a Reply-All
Just so you know how I really feel`,id:9589444},{name:"Hold Up",artist:"Future",llama_response:`(Verse 1 - Future)
I'm sippin' on a bottle, got a bad bitch on my dick
Ridin' 'round in my whip, tryna fuck the night
I'm livin' life to the fullest, ain't no regrets
Got my own jet, ain't no flights to forget

(Chorus - Future)
Futuristic, tryna live my best life
Luxury brands, got my own slice
Party every night, ain't no time to sleep
Futuristic, tryna live my best life

(Verse 2 - Guest Verse - Playboi Carti)
I'm in the building, tryna reach the top
Got my own flow, ain't no one stoppin' me
I'm on the rise, ain't no one gonna stop
Got my own style, ain't no one gonna pop

(Chorus - Future)
Futuristic, tryna live my best life
Luxury brands, got my own slice
Party every night, ain't no time to sleep
Futuristic, tryna live my best life

(Bridge - Future)
I'm on the gram, tryna get the fame
Got my own squad, ain't no one gonna claim
I'm on the rise, ain't no one gonna stop
Got my own flow, ain't no one gonna pop

(Verse 3 - Future)
I'm in the club, tryna have a good time
Got my own crew, they all tryna shine
I'm on the dance floor, ain't no time to rest
Got my own style, ain't no one gonna pass

(Chorus - Future)
Futuristic, tryna live my best life
Luxury brands, got my own slice
Party every night, ain't no time to sleep
Futuristic, tryna live my best life

(Outro - Future)
I'm livin' life to the fullest, ain't no regrets
Got my own flow, ain't no one gonna forget
Futuristic, tryna live my best life
Luxury brands, got my own slice
Party every night, ain't no time to sleep
Futuristic, tryna live my best life.

This song captures the signature Atlanta trap sound of Future, with repetitive and catchy hooks and ad-libs, while also incorporating elements of luxury, partying, and a carefree lifestyle. The lyrics reference luxury brands, fast cars, and flirtatious encounters, and the high-energy beat is suitable for clubs. The guest verse by Playboi Carti complements Future's flow and adds to the song's energy and momentum.`,lyre_response:`[Intro: Future]
Yeah, Pluto
Let's go
[Chorus: Future]
I live it up every time that I have the cash
Pull up with the 'rari, that's a Bugatti, if that's the ask
Bring a bitch inside, if she stay, that's a ask
She gon' get that ass out of my face, that's a fact, if that's the task
Ball so hard on these hoes, that's a act, if that's the task
Get her wet as hell, and then I rip that ass apart, that's a fact
I'm tryna fuck the bitch from the start
[Verse 1: Future]
Fuck her right on the jet, that's a fact
Fuck her right on the brain, that's a drug, if that's the task
I'm tryna fuck her from the start
I'm tryna fuck her from the start
Yeah, she tryna fuck from the start
I'm tryna fuck her from the start
Bitch, I'm tryna fuck her from the start
[Chorus: Future]
I live it up every time that I have the cash
Pull up with the 'rari, that's a Bugatti, if that's the ask
Bring a bitch inside, if she stay, that's a ask
She gon' get that ass out of my face, that's a fact, if that's the task
Ball so hard on these hoes, that's a act, if that's the task
Get her wet as hell, and then I rip that ass apart, that's a fact
I'm tryna fuck the bitch from the start
[Verse 2: Playboi Carti]
What is love? (What is love?)
Codeine in my Durag
Brown M&M's in my bucket (Bucket)
Watermelon Punch in my blunt
Pull up with the 'rari (What?)
Woo, 
Bugatti, yeah
Pull up with the 'rari (Woo)
Woo, 
that's a Bugatti
Pull up with the 'rari (What?)
Brown M&M's in my bucket (Yeah)
Watermelon Punch in my blunt
Watermelon Punch in my blunt (Yeah)
Pull up with the 'rari (What?)
Brown M&M's in my bucket (Yeah)
Watermelon Punch in my blunt (Woo)
Watermelon Punch in my blunt
[Chorus: Future]
I live it up every time that I have the cash
Pull up with the 'rari, that's a Bugatti, if that's the ask
Bring a bitch inside, if she stay, that's a ask
She gon' get that ass out of my face, that's a fact, if that's the task
Ball so hard on these hoes, that's a act, if that's the task
Get her wet as hell, and then I rip that ass apart, that's a fact
I'm tryna fuck the bitch from the start
[Outro: Future & 
Playboi Carti
]
I'm tryna fuck her from the start (
Playboi
)
Bitch, I'm tryna fuck her from the start (
Pluto
)
I'm tryna fuck her from the start
Watermelon Punch in my blunt
Fuck her right on the jet, that's a fact
Fuck her right on the brain, that's a drug`,id:8215393},{name:"Suicide Doors",artist:"Lil Uzi Vert ",llama_response:`(Verse 1)
I'm the king of the game, ain't no one touchin' me
Got more dough than a bakery, got more flow than a bee
I'm rockin' diamonds like they're goin' outta style
Got a private jet, flyin' high, never takin' a while

I don't give a damn 'bout what the haters say
I'm livin' my best life, every single day
I got the world on a string, ain't nothin' gonna bring me down
I'm the one they all come to see, I'm the rockstar crown

(Chorus)
I'm unstoppable, untouchable, unforgettable
I'm the one they all wanna be, I'm the king of the game
I'm on top of the world, ain't no one gonna bring me down
I'm the one and only, I'm the rockstar crown

(Verse 2)
I'm drippin' in designer, got more bling than a ring
Got more fame than a TV show, got more fans than a king
I'm livin' large, livin' loud, livin' my best life
I ain't worried 'bout nothin', ain't no one gonna bring me strife

I'm the master of my fate, I'm the captain of my soul
I'm the one they all wanna be, I'm the rockstar goal
I'm on top of the world, ain't no one gonna bring me down
I'm the one and only, I'm the rockstar crown

(Bridge)
I ain't never scared of criticism, I ain't never scared of shame
I'm the king of the game, I'm the one they all claim
I'm the one they all wanna be, I'm the rockstar crown

(Chorus)
I'm unstoppable, untouchable, unforgettable
I'm the one they all wanna be, I'm the king of the game
I'm on top of the world, ain't no one gonna bring me down
I'm the one and only, I'm the rockstar crown

(Outro)
I'm the one and only, I'm the rockstar crown
I'm the king of the game, I'm the one they all know
I'm the one they all wanna be, I'm the rockstar crown
I'm unstoppable, untouchable, unforgettable.`,lyre_response:`[Intro]
(
Woah, okay
)
Phantom, woah, no, not the coupe
Woah, yeah, let's go
[Refrain]
Let's go, let's go, let's go
Let's go, let's go, drown me in the water
Let's go, let's go, let's go
Let's go, let's go, let's go
[Chorus]
What they gon' say? (
What they gon' say?
)
What they gon' do? (
What they gon' do?
)
I don't give a shit (I don't give a shit)
I'm a superstar (I'm a superstar)
What they gon' say? (
What they gon' say?
)
What they gon' do? (
What they gon' do?
)
I don't give a shit (I don't give a shit)
I'm a superstar (I'm a superstar) [Verse 1]
I was in the Phantom, not the coupe (Yeah)
I was in the drop, and it was black, too (Yeah)
And I was thinkin', "Man, this the life" (Man, this the life)
I would do this every night (Yeah, yeah)
Yeah, let's go
Got no stress, don't need no Glock (I don't need no Glock)
Ain't got no exes, I just got them locks (I just got them locks)
Ain't got no worries, I just got them rocks (I just got them rocks)
Woah, yeah, let's go
[Chorus]
What they gon' say? (
What they gon' say?
)
What they gon' do? (
What they gon' do?
)
I don't give a shit (I don't give a shit)
I'm a superstar (I'm a superstar)
What they gon' say? (
What they gon' say?
)
What they gon' do? (
What they gon' do?
)
I don't give a shit (I don't give a shit)
I'm a superstar (I'm a superstar) [Verse 2]
I don't give a fuck if you don't like me (I don't give a shit)
I don't give a fuck if they don't like me (I don't give a shit)
I just do what I like, yeah, I like me (I just do what I like, yeah)
Don't like me? Then don't look at me (Then don't look at me)
Won't make a song 'bout no-one like me (Won't make a song 'bout no-one like me)
Because there's no one like me (No one like me)
I'm the greatest, yeah, that's on me (I'm the greatest, yeah, that's on me)
Woah, yeah, let's go (Woah, yeah, let's go) [Chorus]
What they gon' say? (
What they gon' say?
)
What they gon' do? (
What they gon' do?
)
I don't give a shit (I don't give a shit)
I'm a superstar (I'm a superstar)
What they gon' say? (
What they gon' say?
)
What they gon' do? (
What they gon' do?
)
I don't give a shit (I don't give a shit)
I'm a superstar (I'm a superstar) [Bridge]
Phantom, woah, no, not the coupe
Woah, yeah, let's go
[Refrain]
Let's go, let's go, let's go
Let's go, let's go, drown me in the water
Let's go, let's go, let's go
Let's go, let's go, let's go
[Chorus]
What they gon' say? (
What they gon' say?
)
What they gon' do? (
What they gon' do?
)
I don't give a shit (I don't give a shit)
I'm a superstar (I'm a superstar)
What they gon' say? (
What they gon' say?
)
What they gon' do? (
What they gon' do?
)
I don't give a shit (I don't give a shit)
I'm a superstar (I'm a superstar)`,id:9269871},{name:"Lost",artist:"Linkin Park",llama_response:`Verse 1 (Chester):
Trapped in my mind, a never-ending fight
Memories of the past, they haunt me day and night
The scars they leave, they never heal
I'm lost in my own hell, can't find my way out

Chorus (Both):
I'm stuck in my illusions, can't escape the pain
Trying to move on, but it's hard to change
The ghosts of my past, they never leave
I'm searching for redemption, but it's hard to believe

Verse 2 (Mike):
I see the world around me, but it's not the same
The shadows of my past, they follow me like a game
I try to hide, but they find their way
Into my dreams, into my heart, every single day

Chorus (Both):
I'm stuck in my illusions, can't escape the pain
Trying to move on, but it's hard to change
The ghosts of my past, they never leave
I'm searching for redemption, but it's hard to believe

Bridge (Chester):
I know I'm not alone, in this fight
We all carry our own scars, day and night
But it's hard to keep going, when the pain feels so real
I'm just trying to find my way, to heal and to feel

Chorus (Both):
I'm stuck in my illusions, can't escape the pain
Trying to move on, but it's hard to change
The ghosts of my past, they never leave
I'm searching for redemption, but it's hard to believe

Outro (Mike):
I'll keep on fighting, until I find my way
Out of this darkness, into a brighter day
I'll keep on searching, until I find my peace
And maybe then, I'll finally find release.

The song is written in a style similar to Linkin Park's nu-metal sound, with a mix of intense and brooding dynamics. The lyrics reflect a blend of Chester Bennington's raw emotional delivery and Mike Shinoda's introspective rap verses, with a theme centered around the difficulty of moving on from past traumas. The chorus captures the feeling of being lost in one's own illusions and confusions, with a haunting melody that emphasizes the sense of internal turmoil and the search for self-redemption. The song should incorporate the band's signature mix of rock and nu-metal, with a strong emphasis on heavy guitars and driving rhythms, as well as a mix of clean and unclean vocals. The production should be raw and emotive, with a focus on creating a sense of atmosphere and mood that complements the lyrics and the overall theme of the song.`,lyre_response:`[Chester Bennington]
Trapped in my mind, surrounded by thieves
Cutting myself loose, would it bring back memories?
Fading to black, fading to black
Fading to black, fading to black
Took my life in my own hands, would it bring back memories?
Fading to black, fading to black
Fading to black, fading to black
[Chester Bennington & 
Mike Shinoda
]
I'm lost in my mind, I'm lost in my mind
I'm caught up in my thoughts, I'm trapped in my mind
I'm lost in my mind, I'm lost in my mind
Living a life of self-pity, I'm wasting my time
[Chester Bennington]
I'm lost in my mind
[Chester Bennington & 
Mike Shinoda
]
I'm lost in my mind, I'm lost in my mind
Caught up in my thoughts, trapped in my mind
I'm lost in my mind, I'm lost in my mind
Living a life of self-pity, wasting my time
[Chester Bennington & 
Mike Shinoda
]
I'm lost in my mind
(I'm lost) I'm lost in my mind
(I'm lost) Caught up in my thoughts, trapped in my mind
I'm lost in my mind, I'm lost in my mind
Living a life of self-pity, wasting my time
[Chester Bennington]
I'm lost in my mind [Chester Bennington & Mike Shinoda]
I'm lost in my mind, I'm lost in my mind
Caught up in my thoughts, trapped in my mind
I'm lost in my mind, I'm lost in my mind
Living a life of self-pity, wasting my time
[Chester Bennington]
I'm lost in my mind
[Outro: Chester Bennington & 
Mike Shinoda
]
(I'm lost) 
I'm lost in my mind
(I'm lost) 
I'm lost in my mind
(I'm lost) 
Living a life of self-pity, wasting my time
(I'm lost) 
I'm lost in my mind`,id:6713449},{name:"DELRESTO (ECHOES)",artist:"Beyonce",llama_response:`Verse 1 (Beyoncé):
I've been searching for a summer of contentment
A place where I can be free from the shadows of my past
Echoes of memories, they linger and they haunt me
But I know I must let them go, to move on at last

Chorus (Beyoncé, Travis Scott, Justin Vernon):
Oh, the longing and release, it's a feeling like no other
A journey through the fire, to find the other side
We're searching for a light, to guide us through the night
And find the strength to hold on, through the darkest of fights

Verse 2 (Beyoncé):
I've been through the storm, and I've seen the rain
But I know that I'm strong, and I'll rise again
I've got the resilience, to face the pain
And I won't let it break me, I'll rise above the strain

Chorus (Beyoncé, Travis Scott, Justin Vernon):
Oh, the longing and release, it's a feeling like no other
A journey through the fire, to find the other side
We're searching for a light, to guide us through the night
And find the strength to hold on, through the darkest of fights

Bridge (Justin Vernon):
I've been lost in the darkness, but I've found my way
To a place of peace, where the echoes fade away
And I've learned to let go, to move on from the past
To find a new horizon, where love will forever last

Chorus (Beyoncé, Travis Scott, Justin Vernon):
Oh, the longing and release, it's a feeling like no other
A journey through the fire, to find the other side
We're searching for a light, to guide us through the night
And find the strength to hold on, through the darkest of fights

Outro (Beyoncé):
I'll rise above the echoes, and shine my light on through
I'll find the summer of contentment, and make it mine to do
I'll hold on to hope, and never let it go
I'll rise above the shadows, and let my spirit glow.

This song, inspired by Beyoncé's style, incorporates elements of introspection and resilience, while also exploring the theme of longing and release. The dynamic shifts in the song, similar to a ballroom setting transitioning into a more intimate space, reflect on both the grandeur and the personal struggles of life. The collaboration with Travis Scott and Justin Vernon adds depth and a blend of genres, while the lyrics convey a journey through challenges and the search for a summer of contentment. The song carries an air of sophistication and strength, with a rhythmic undercurrent that invites listeners to contemplate the act of letting go while holding onto hope.`,lyre_response:`[Intro: Beyoncé]
I've drowned
I've drowned
[Verse 1: Beyoncé]
There's a time that I remember when I didn't know no pain
When I couldn't wait to grow up and out of the city and its pollution
I guess I never thought about the weight of the world
And how it would test me, making me wonder if I was worthy
[Pre-Chorus: Beyoncé]
It's been a long time coming, but I'm really, really trying
To get to a place of pure happiness and pure love
It won't be long now, I can feel it, so close I can taste it
I'm almost there, I can see it, so clear I can see it
[Chorus: Beyoncé]
And you know sometimes we need to feel the pressure
Just to keep from slipping into stagnation
Yeah, let it out, let it out, let it out
You know you gotta let it out, let it out
[Drop: Beyoncé]
[Verse 2: Beyoncé]
Life can be so cruel, it can make you feel like you're the fool
It can make you feel like you don't know nothing, you're so cruel
I've been through hell, but I'm still here, so I know how you feel
And you don't have to keep trying, because you've already killed
[Pre-Chorus: Beyoncé]
It's been a long time coming, but I'm really, really trying
To get to a place of pure happiness and pure love
It won't be long now, I can feel it, so close I can taste it
I'm almost there, I can see it, so clear I can see it
[Chorus: Beyoncé]
And you know sometimes we need to feel the pressure
Just to keep from slipping into stagnation
Yeah, let it out, let it out, let it out
You know you gotta let it out, let it out
[Drop: Beyoncé]
[Bridge: Travis Scott]
(I've drowned)
I've drowned
I've drowned
(I've drowned)
I've drowned
I've drowned
I've drowned
I've drowned
[Chorus: Beyoncé, 
Travis Scott
, & 
Justin Vernon
]
And you know sometimes we need to feel the pressure
Just to keep from slipping into stagnation
Yeah, let it out, let it out, let it out
You know you gotta let it out, let it out
Yeah, let it out, let it out, let it out
You know you gotta let it out, let it out
[Drop: Beyoncé, 
Travis Scott
, & 
Justin Vernon
]
(
I've drowned
)
I've drowned
I've drowned
I've drowned
(
I've drowned
)
I've drowned
I've drowned
I've drowned
I've drowned`,id:8465484},{name:"Dress",artist:"Taylor Swift",llama_response:`Verse 1:
I'm walking through the city, head held high
But little do they know, I'm lying by
A secret that I keep, a love that I hide
Away from prying eyes, where only you reside

Chorus:
Oh, the thrill of a secret romance
Sneaking around, stealing glances
The public world may see me strong
But deep inside, my heart is wrong

Verse 2:
I wear this dress, bought just for you
A symbol of my vulnerability, too
I dream of the moment when you'll take it off
And in that instant, our love will be alight

Chorus:
Oh, the thrill of a secret romance
Sneaking around, stealing glances
The public world may see me strong
But deep inside, my heart is wrong

Bridge:
We dance in the shadows, our love a flame
Pulsating with energy, our hearts aflame
The world may think us crazy, but we know the truth
Our love is real, our love is youth

Chorus:
Oh, the thrill of a secret romance
Sneaking around, stealing glances
The public world may see me strong
But deep inside, my heart is wrong

Outro:
So I'll keep on walking, with my head held high
But little do they know, my heart is flying
To the place where only you reside
Where our love will thrive, and our hearts collide.

Musical Composition:
The song should have a soft, acoustic base, with a mix of pop energy and emotional highs. The chorus should have a catchy, upbeat melody, with a repetition of the phrase "the thrill of a secret romance" to emphasize the theme of the song. The verses should have a more introspective and emotional tone, with a focus on the contrast between the persona's public composure and their inner turmoil. The bridge should have a more intense and passionate feel, with a focus on the excitement and energy of the secret romance. The song should have a gradual build-up in energy throughout the verses and chorus, with a climactic moment in the bridge, before returning to a more mellow, introspective tone in the outro.

Lyrics:

* "I'm walking through the city, head held high" - This line sets the tone for the song, with the persona presenting a confident exterior, while hiding a secret love.
* "But little do they know, I'm lying by" - This line emphasizes the contrast between the persona's public image and their private feelings.
* "A dress bought just for you" - This line is a poignant symbol of the persona's vulnerability and connection to their secret lover.
* "I dream of the moment when you'll take it off" - This line conveys the anticipation and excitement of the secret romance.
* "We dance in the shadows, our love a flame" - This line highlights the intensity and passion of the secret romance, with the world outside only seeing a glimpse of their love.
* "The public world may see me strong" - This line emphasizes the contrast between the persona's public image and their inner turmoil.
* "But deep inside, my heart is wrong" - This line conveys the true emotions of the persona, with their heart pining for their secret lover.
* "So I'll keep on walking, with my head held high" - This line closes the song, with the persona presenting a confident exterior, while hiding their true feelings.`,lyre_response:`[Intro]
I'm in a taxi headin' north
On my way to meet you at the park
It's getting hard to be so calm
'Cause I'm fallin' for you, you, you
I'm in a taxi headin' north
On my way to meet you at the park
The sun is going down and I'm goin' crazy
Thinkin' 'bout the moments we've stolen
[Verse 1]
You waitin' at the garden wall
For me to come and sweep you off your feet
I'm feelin' every moment, it's pure magic
Somethin' about you, I just can't resist
You think I'm out right now (I'm out right now)
You think that I'm out livin' it up (I'm out livin' it up)
But you'll never know what I'm goin' through
I'm seein' you in that dress, I just bought it for you
[Chorus]
You're secretly a lover
And I'm secretly your Loverboy
We'll make out in a crowded room (Crowded room)
The whole world can figure out
We're in love, but we'll never tell
'Cause you're secretly a lover
And I'm secretly your Loverboy [Verse 2]
I'm in a taxi headin' south
On my way to meet you at the park
You tell me that you're not my type
But you've been gettin' off on the sight
The dress that you wore, I just bought it for you
I wanna take it off when we're alone
I wanna be the one to make you feel brand new [Chorus]
You're secretly a lover
And I'm secretly your Loverboy
We'll make out in a crowded room (Crowded room)
The whole world can figure out
We're in love, but we'll never tell
'Cause you're secretly a lover
And I'm secretly your Loverboy [Bridge]
And when the room is empty
We'll be empty too
And when the room is empty
I'll be flyin' to you
[Chorus]
You're secretly a lover (Secretly a lover)
And I'm secretly your Loverboy (Secretly your Loverboy)
We'll make out in a crowded room (Crowded room)
The whole world can figure out
We're in love, but we'll never tell
'Cause you're secretly a lover
And I'm secretly your Loverboy [Outro]
You're secretly a lover (Lover)
And I'm secretly your Loverboy (Your Loverboy)
We'll make out in a crowded room (In a crowded room)
The whole world can figure out (The whole world can figure out)
We're in love, but we'll never tell
'Cause you're secretly a lover (You're secretly a lover)
And I'm secretly your Loverboy (I'm secretly, secretly your Loverboy)`,id:3281502},{name:"GOD’S COUNTRY",artist:"Kanye West",llama_response:`Verse 1:
I was lost in the dark, couldn't find my way out
Trapped in my mind, with thoughts that couldn't be doubt
Fighting with demons, that I couldn't defeat
But then I found God, and my soul started to retreat

Chorus:
La, la, la, la, la, la
Redemption is coming, it's in the air
La, la, la, la, la, la
I'm breaking free from the chains that bound me there

Verse 2:
I used to think wealth was the answer to my prayers
But now I see, it's just a temporary escape
From the pain and the struggle, from the hate and the fears
But now I know, true redemption is what I hold dear

Chorus:
La, la, la, la, la, la
Redemption is coming, it's in the air
La, la, la, la, la, la
I'm breaking free from the chains that bound me there

Verse 3:
I've been on this journey, it's been a long and hard road
But I'm still standing, and my spirit is still whole
I've seen the light, and I know what I've found
It's a love that's pure, and it's never bound

Chorus:
La, la, la, la, la, la
Redemption is coming, it's in the air
La, la, la, la, la, la
I'm breaking free from the chains that bound me there

Verse 4:
I know I've been through hell, but I'm not the same
I've fought my battles, and I've won the game
I've found my voice, and I'm not afraid to say
I'm standing tall, and I'm here to stay

Chorus:
La, la, la, la, la, la
Redemption is coming, it's in the air
La, la, la, la, la, la
I'm breaking free from the chains that bound me there

Bridge:
I've seen the darkness, but I've also seen the light
I've been to the depths, but I've also reached the heights
I know that I'm not alone, and that's a beautiful sight
I'm grateful for the journey, and the fight

Chorus:
La, la, la, la, la, la
Redemption is coming, it's in the air
La, la, la, la, la, la
I'm breaking free from the chains that bound me there

Outro:
I'm rising from the ashes, like a phoenix from the fire
I'm breaking free from the chains, and I'm never retiring
I'm living my truth, and I'm never gonna hide
I'm finding my voice, and I'm gonna make it shine.

In this song, I've incorporated themes of redemption, conflict, and spiritual warfare, as well as vivid imagery and references to wealth and lifestyle. The repetitive melodic hook symbolized by "La, la, la" chants helps to create a sense of continuity and progression throughout the song, while the dynamic shifts in the music mirror the transition from darkness to light, much like the metaphor of a butterfly's metamorphosis. The song also incorporates a mixture of singing and rapping, reflecting the introspective and personal nature of the lyrics.`,lyre_response:`[Intro]
Yeah, uh
Well, you know, it's like, it's like, it's like...
La, la, la
La, la, la
La, la, la
La, la, la
[Verse 1]
I've been at home, I've been alone
I've been in the dark, no one to hold
I've been in conflict, yea, even in my mind
Seen some things that would make your mind unwind
Things that I can't mention, but times like that, I thank God for my spirit guide
Yeah, I made it through that, thought I was done, but God had other plans, had other plans
God, God, God, God, God
[Bridge]
You know that this life, could really get to you
It's like a butterfly
Burst out of its chrysalis, and, and, and, and, and, and, and, and, and
You know that this life, could really get to you
It's like a butterfly
Burst out of its chrysalis, and, and, and, and, and, and, and, and, and, and [Verse 2]
We be in the lab, cookin' up new formulae
I been contemplating, been on that meditating tip
I been in a funk, I been in a slump
I been so down, but I gotta get up, I gotta get up
And I gotta get out, and get out, and get out of this rut
I be thinkin' about it, 
lost in my thoughts
And it's nothing you could ever tell me, that I don't know
Feelin' so low, but I'm tryna get high
I feel so high, but I'm not high, I'm just feelin' alive
Alive, alive, alive, alive, alive, alive [Bridge]
You know that this life, could really get to you
It's like a butterfly
Burst out of its chrysalis, and, and, and, and, and, and, and, and, and, and
You know that this life, could really get to you
It's like a butterfly
Burst out of its chrysalis, and, and, and, and, and, and, and, and, and, and, and [Outro]
La, la, la
La, la, la
La, la, la
La, la, la
La, la, la`,id:5780833},{name:"NUTHIN’",artist:"Michael Jackson",llama_response:`(Verse 1)
I'm standing on the edge, staring into the night
The world outside is cold, and it's filled with fright
Fears and doubts they haunt me, like a ghostly plight
I'm lost in a sea of confusion, where's the light?

(Chorus)
All of this for nothing, it's a cryin' shame
We're livin' in a world that's goin' insane
We're chasin' after dreams, but they're always out of reach
All of this for nothin', it's a cryin' shame

(Verse 2)
I see the disillusionment, in the eyes of those around
A longing for a better life, that's hard to find
The system's broken, and it's tearin' us apart
We're trapped in a cycle, of hate and despair

(Chorus)
All of this for nothing, it's a cryin' shame
We're livin' in a world that's goin' insane
We're chasin' after dreams, but they're always out of reach
All of this for nothin', it's a cryin' shame

(Bridge)
But I still believe, in the power of the heart
A spark of hope, that will set us apart
We can break the chains, and rise above the pain
We can make a change, and start again

(Chorus)
All of this for nothing, it's a cryin' shame
We're livin' in a world that's goin' insane
We're chasin' after dreams, but they're always out of reach
All of this for nothin', it's a cryin' shame

(Outro)
But I see a glimmer, of a brighter day
Where love and unity, will lead the way
We'll rise above the fear, and shine like the sun
And our hearts will be healed, and our souls will be won

(Verse 3 - additional)
We'll stand together, and we'll fight for our rights
We'll raise our voices, and we'll shine with all our might
We'll be the change, that we know we can be
And our future will be bright, and our hearts will be free

(Chorus)
All of this for nothing, it's a cryin' shame
We're livin' in a world that's goin' insane
We're chasin' after dreams, but they're always out of reach
All of this for nothin', it's a cryin' shame

In this song, I've tried to capture the essence of Michael Jackson's style, while also expressing a sense of existential questioning and a plea for change. The lyrics touch on themes of fear, disillusionment, and a desire for freedom, while ultimately offering a glimmer of hope for unity and improvement. The catchy chorus emphasizes the futility of certain efforts, but also suggests that a better future is possible. The music is rhythmic and allows for signature Michael Jackson vocal inflections and energetic delivery.`,lyre_response:`[Intro]
Don't fear tomorrow
All of this for nothing
Don't fear tomorrow
All of this for nothing
[Verse 1]
He's just a poor boy, nobody loves him
He's sensitive and his heart is breaking
He cries in the night because he's afraid
He thinks that there's no hope for him
He's just a poor boy, nobody loves him
He's sensitive and his heart is breaking
He cries in the night because he's afraid
He thinks that there's no hope for him
[Chorus]
All of this for nothing
Why should we fight for nothing?
All of this for nothing
Why should we bleed for nothing?
All of this for nothing
Why should we cry for nothing?
All of this for nothing
Why should we die for nothing?
[Verse 2]
Why does he keep us apart?
Does he think that we're stupid?
Why does he get us to fight?
Does he think that we're stupid?
Why does he keep us apart?
Does he think that we're stupid?
Why does he get us to fight?
Does he think that we're stupid? [Chorus]
All of this for nothing
Why should we fight for nothing?
All of this for nothing
Why should we bleed for nothing?
All of this for nothing
Why should we cry for nothing?
All of this for nothing
Why should we die for nothing?
[Outro]
We can do it
We can do it
We can do it
We can do it
We can do it
We can do it
We can do it
We can do it
We can do it
We can do it
We can do it`,id:8484263},{name:"Die 4 Me",artist:"Post Malone",llama_response:`Verse 1:
I thought you were my home, my safe haven
The one I could always count on, through every storm
But now I'm standing here, with tears in my eyes
Realizing you were the one who tore me apart

You promised to be there, through thick and thin
To love me unconditionally, until the end
But you lied, you cheated, you played me like a fool
And now I'm left with nothing but broken rules

Chorus:
You said you'd be there, through the good and the bad
But now I'm standing here, feeling so sad
The promises you made, they meant nothing to you
And now I'm left to pick up the pieces, feeling so blue

Verse 2:
I tried to hold on, but you kept on pushing
Away the love we had, and the trust that was rushing
You said you needed space, but what you meant was time
To find someone new, and leave me in the dark, feeling so blind

I gave you my heart, and you tore it apart
With your lies and your games, you broke it from the start
I thought I was strong, but you showed me I'm not
You took my love, and you left me with nothing but regret

Chorus:
You said you'd be there, through the good and the bad
But now I'm standing here, feeling so sad
The promises you made, they meant nothing to you
And now I'm left to pick up the pieces, feeling so blue

Bridge:
I thought we had something real, something true
But now I'm left to wonder, what could have been, what I could have done
I'm learning to let go, to move on from the pain
But it's hard to forget, the love we had, the love that remains

Chorus:
You said you'd be there, through the good and the bad
But now I'm standing here, feeling so sad
The promises you made, they meant nothing to you
And now I'm left to pick up the pieces, feeling so blue

Outro:
I'll rise above, I'll find my way
I'll learn to love again, someday
But for now, I'll just hold on to the pain
And hope that someday, I'll find love again, without the strain.

This song captures the feeling of betrayal and heartbreak through the lens of Post Malone's style, with a moody and introspective vibe that blends elements of hip-hop and pop. The lyrics express the pain of being lied to by someone who promised to be there through thick and thin, and the chorus emphasizes the stark contrast between the promises made and the reality of the situation. The tone balances vulnerability with a touch of bitterness, reflecting on personal growth and resilience in the face of deceit.`,lyre_response:`[Intro]
Yeah, yeah
You said forever, yeah, you promised me forever
Everything was perfect, yeah, you promised me forever
Said you'd be there through thick and thin
[Chorus]
Forever, you said you'd be there forever
Forever, you promised me forever
(Forever, oh, you promised me forever)
But forever's come and gone
Forever, you said you'd be there forever
(You promised me forever) Forever's come and gone
[Verse 1]
Why can't you see that I'm in misery?
You're the one that made me see that forever's just a word, yeah
You're the one that made me cry
You're the one that made me say goodbye
[Pre-Chorus]
You were my strength, my pillar
You were supposed to be my shelter
From the world, you were supposed to keep me safe and sound
You were my strength, my pillar
My forever was supposed to be forever
[Chorus]
Forever, you said you'd be there forever
Forever, you promised me forever
(Forever, oh, you promised me forever)
But forever's come and gone
Forever, you said you'd be there forever
(You promised me forever) Forever's come and gone
[Verse 2]
How can I trust anyone at all?
You made me realize that love is just a game, yeah
You made me lose everything
You made me feel like I don't even know myself
[Pre-Chorus]
You were my strength, my pillar
You were supposed to be my shelter
From the world, you were supposed to keep me safe and sound
You were my strength, my pillar
My forever was supposed to be forever
[Chorus]
Forever, you said you'd be there forever
Forever, you promised me forever
(Forever, oh, you promised me forever)
But forever's come and gone
Forever, you said you'd be there forever
(You promised me forever) Forever's come and gone
[Bridge]
You said forever
Forever, you said you'd be there forever
You promised me forever
(Forever, oh, you promised me forever)
But forever's come and gone
Forever, you said you'd be there forever
(You promised me forever) Forever's come and gone
[Chorus]
Forever, you said you'd be there forever
Forever, you promised me forever
(Forever, oh, you promised me forever)
But forever's come and gone
Forever, you said you'd be there forever
(You promised me forever) Forever's come and gone
[Outro]
You said forever
(Forever, you said you'd be there forever)
Forever, you promised me forever
(Forever, oh, you promised me forever)
But forever's come and gone
Forever, you said you'd be there forever
(You promised me forever) Forever's come and gone`,id:8837446},{name:"Pain 1993 (Demo)",artist:"Drake",llama_response:`(Verse 1)
I'm sippin' on a gin and juice, feelin' like a king
Nobody phuckin' with me, I'm on top of the game
Casual confidence, that's my M.O.
I don't need no awards, my rhymes are the fame

I'm livin' life on my own terms, ain't no one gonna tell me what to do
I'm on a mission to the top, and I'm gonna make it through
I ain't worried 'bout no haters, they just fuel my fire
I'm on a roll, ain't no one gonna stop my desire

(Chorus)
I'm unbothered, unbothered, that's the way I roll
I'm on top of the game, and I'm here to stay, fo' shizzle
I ain't worried 'bout no critics, they just don't know the real me
I'm the king of the rap game, and I'm here to prove it, bae

(Verse 2)
I'm chillin' with my crew, sippin' on some champagne
We ain't worried 'bout nothin', we just vibin' on the same page
We grindin' hard, we ballin' hard, we ain't worried 'bout the fame
We just wanna make hits, and have fun, ain't no one gonna change our game

I'm on a luxury cruise, livin' life to the fullest
I got my own jet, and my own mansion, that's the way I roll
I ain't worried 'bout no money, I got more than enough
I just wanna keep on flowin', and make hits that'll last

(Chorus)
I'm unbothered, unbothered, that's the way I roll
I'm on top of the game, and I'm here to stay, fo' shizzle
I ain't worried 'bout no critics, they just don't know the real me
I'm the king of the rap game, and I'm here to prove it, bae

(Bridge)
I'm on a journey from solitude to selective companionship
I ain't worried 'bout no fame, I just wanna make hits that'll last
I'm on a mission to the top, and I won't stop 'til I get there
I'm unbothered, unbothered, that's the way I roll, bae

(Verse 3)
I'm on top of the world, ain't no one gonna bring me down
I'm the king of the rap game, and I'm wearin' the crown
I ain't worried 'bout no haters, they just fuel my fire
I'm on a roll, ain't no one gonna stop my desire

I'm livin' life on my own terms, ain't no one gonna tell me what to do
I'm on a mission to the top, and I'm gonna make it through
I ain't worried 'bout no critics, they just don't know the real me
I'm the king of the rap game, and I'm here to prove it, fo' shizzle

(Outro)
So if you wanna come at me, you better come correct
I'm unbothered, unbothered, that's the way I roll, bae
I'm on top of the game, and I'm here to stay
I'm the king of the rap game, and I'm here to play.

This song is written in the style of Drake, with a focus on casual confidence and effortless dominance in the rap game. The lyrics express a nonchalant attitude towards critics and an unbothered swagger, while incorporating elements of luxury, personal relationships, and the journey from solitude to selective companionship. The song also includes cultural references that resonate with urban lifestyles and the hip-hop community, such as sippin' on gin and juice and wearing the crown as the king of the rap game. The flow is smooth and clever, with wordplay that is both catchy and meaningful. The open verse provides an opportunity for collaboration, and the song is sure to be a hit with fans of Drake and hip-hop music.`,lyre_response:`[Intro]
Yeah, Ren, M.O.F, and T.O.S
Always
[Verse: Drake]
I'm just working at the office, man, nothing new
How could I be tough with a soft heart?
How could I be rough with a soft heart?
Unless—
Unless, it's cool that I'm rough with a soft heart
It's cool, right?
Yeah, I'm just working at the office, man, nothing new
How could I be tough with a soft heart?
How could I be rough with a soft heart?
Unless—
Unless, it's cool that I'm rough with a soft heart
It's cool, right? Yeah
I'm just working at the office, man, nothing new
How could I be tough with a soft heart?
How could I be rough with a soft heart?
Unless—
Unless, it's cool that I'm rough with a soft heart
It's cool, right?
Yeah
[Refrain: Lloyd]
Got no reason to be frightened
And no reason to be nervous
And no reason to be nervous, yeah
[Pre-Chorus: Lloyd]
Hmm-mm, mmm, mmm
Got no reason to be frightened
And no reason to be nervous
And no reason to be nervous, yeah
[Chorus: Lloyd]
And you can't be rough with a soft heart
Unless you're cool with people knowing
That you're rough with a soft heart, yeah
(Soft heart)
That you're rough with a soft heart, yeah
(Soft heart)
That you're rough with a soft heart [Verse 1: Drake]
I'm just working at the office, man, nothing new
How could I be tough with a soft heart?
How could I be rough with a soft heart?
Unless—
Unless, it's cool that I'm rough with a soft heart
It's cool, right?
Yeah
I'm just working at the office, man, nothing new
How could I be tough with a soft heart?
How could I be rough with a soft heart?
Unless—
Unless, it's cool that I'm rough with a soft heart
It's cool, right? Yeah
[Refrain: Lloyd]
Got no reason to be frightened
And no reason to be nervous
And no reason to be nervous, yeah
[Pre-Chorus: Lloyd]
Hmm-mm, mmm, mmm
Got no reason to be frightened
And no reason to be nervous
And no reason to be nervous, yeah
[Chorus: Lloyd]
And you can't be rough with a soft heart
Unless you're cool with people knowing
That you're rough with a soft heart, yeah
(Soft heart)
That you're rough with a soft heart, yeah
(Soft heart)
That you're rough with a soft heart [Verse 2: Lloyd]
Can't act tough when you're just alone
And you can't act tough when you're in foe
You can't be tough with a soft heart
Unless you're cool with people knowing
That you're tough with a soft heart, yeah
(Soft heart)
That you're tough with a soft heart, yeah
(Soft heart)
That you're tough with a soft heart [Verse 3: Lil Wayne]
Uh, I'm Lil Wayne, young Tunechi
I'm from the Nawf, but I'm in H-town, so
That means I'm a Houstonian
And I'm here to ensure that y'all understand
That I'm a real man, so I can't sit around
And let these young bucks have the game all to themselves
I mean, I could sit back, relax, and chill on some Mills, but
I'm Tunechi, so I'm still gon' drop hits when I'm 80
I'm in the studio with T-Pain, and I got a pint
Of something strong, and I'm feelin' like shit
So I'm gonna sing, yeah, I'm gonna sing
I'm gonna sing like Lloyd from the group Lloyds of London
I'm gonna sing like I'm in the group Lloyds of London
Uh, Ren, M.O.F, and T.O.S
Always [Chorus: Lloyd]
And you can't be rough with a soft heart
Unless you're cool with people knowing
That you're rough with a soft heart, yeah
(Soft heart)
That you're rough with a soft heart, yeah
(Soft heart)
That you're rough with a soft heart`,id:8722327},{name:"No Time Wasted",artist:"Future",llama_response:`Verse 1:
I was born in the trenches, where the streets ain't always clean
But I learned how to hustle, how to grind and how to be seen
Got my homies by my side, we was all we got
We was living life on the edge, but we ain't never got caught

Chorus:
But now I'm on top, living life in the fast lane
Got my money, my fame, my life in the palm of my hand
But I ain't forgot where I came from, ain't forgot the struggles I faced
Got my eyes on the prize, ain't nothing gonna take my place

Verse 2:
I seen it all, from the highs to the lows
From the streets to the mansions, from the struggles to the dough
But I kept my head up, kept grinding every day
Now I'm living life in a different way, ain't no way to stay

Chorus:
But now I'm on top, living life in the fast lane
Got my money, my fame, my life in the palm of my hand
But I ain't forgot where I came from, ain't forgot the struggles I faced
Got my eyes on the prize, ain't nothing gonna take my place

Verse 3:
I ain't no rags to riches story, ain't no fairy tale to tell
But I grinded and hustled, I fought and I sold
I seen the best of life, seen the worst of times
But I kept my head up, kept my eyes on the prize

Chorus:
But now I'm on top, living life in the fast lane
Got my money, my fame, my life in the palm of my hand
But I ain't forgot where I came from, ain't forgot the struggles I faced
Got my eyes on the prize, ain't nothing gonna take my place

Bridge:
I ain't forgot where I came from, ain't forgot the ones who was with me
I ain't forgot the struggles, ain't forgot the losses I faced
But I kept my head up, kept grinding every day
Now I'm living life in a different way, ain't no way to stay

Chorus:
But now I'm on top, living life in the fast lane
Got my money, my fame, my life in the palm of my hand
But I ain't forgot where I came from, ain't forgot the struggles I faced
Got my eyes on the prize, ain't nothing gonna take my place

Outro:
I'm living life in the fast lane, got my money and my fame
But I ain't forgot where I came from, ain't forgot the struggles I faced
I'm on top of the world, but I ain't forgot the gritty reality
Of street life, of grinding, of fighting for victory.`,lyre_response:`[Intro]
(
Raymond lives!
)
You know, for—, oh, like, forever
I've been forever, yeah, I've been forever
I've been forever, yeah, I've been forever
I've been forever
[Verse 1]
I done cried, I done cried, I done cried
Over nineteen, over nineteen, I done cried
I done seen, I done seen, I done seen it all
I done seen it all, I done seen it all
I done lost, I done lost, I done lost
Over nineteen, over nineteen, I done lost
I done kicked, I done kicked, I done kicked
Over nineteen, over nineteen, I done kicked
[Pre-Chorus]
Now I'm livin' like this, how could I ever switch?
They wanna know what it's like, I tell 'em just watch
(
I've been forever, I've been forever
)
[Chorus]
'Cause when you're livin' like this and you're from the streets
It's hard to make it, but if you don't give up, you'll beat it
Yeah, yeah, you'll beat it, beat it, beat it, beat it
Beat it, beat it, beat it, beat it, beat it
Yeah, you'll beat it, beat it, beat it, beat it, beat it
Beat it, beat it, beat it, beat it, beat it
[Verse 2]
I done came, I done came, I done came in
Over nineteen, over nineteen, I done came in
I done got, I done got, I done got it
Over nineteen, over nineteen, I done got it
I been, I been, I been riding 'round
Over nineteen, over nineteen, I been riding 'round
I been, I been, I been ballin' out
Over nineteen, over nineteen, I been ballin' out
[Pre-Chorus]
Now I'm livin' like this, how could I ever switch?
They wanna know what it's like, I tell 'em just watch
(
I've been forever, I've been forever
)
[Chorus]
'Cause when you're livin' like this and you're from the streets
It's hard to make it, but if you don't give up, you'll beat it
Yeah, yeah, you'll beat it, beat it, beat it, beat it
Beat it, beat it, beat it, beat it, beat it
Yeah, you'll beat it, beat it, beat it, beat it, beat it
Beat it, beat it, beat it, beat it, beat it
[Verse 3]
Yeah, I've been forever, I've been forever
And, yeah, I've been forever, I've been forever
I done seen, I done seen it all, I done seen it all
I done seen it all, I done seen it all
I done cried, I done cried, I done cried
Over nineteen, over nineteen, I done cried
I done kicked, I done kicked, I done kicked
Over nineteen, over nineteen, I done kicked
I done lost, I done lost, I done lost
Over nineteen, over nineteen, I done lost
I've been, I've been, I've been forever
Yeah, I've been forever, I've been forever
I've been, I've been, I've been forever
Yeah, I've been forever, I've been forever
[Outro]
I done cried, I done cried, I done cried
Over nineteen, over nineteen, I done cried
I've been forever, I've been forever`,id:8804263},{name:"K-POP",artist:"Travis Scott ",llama_response:`Verse 1 (English):
I'm living my best life, ain't no tellin' lies
Popping bottles and smokin' dice, feelin' like the king of the sky
Got my squad by my side, we ain't stoppin' 'til the mornin' light
Chasin' the high, chasin' the thrill, livin' life on the tight

Chorus (English):
Oh, last night, oh, last night
The memories still feelin' right
We livin' life to the fullest, no regrets, no alarms
Oh, last night, oh, last night

Verse 2 (Spanish):
Viviendo mi mejor vida, no hay mentiras
Botellas explosionando y fumando dados, siento el rey del cielo
Tengo mi crew a mi lado, no pararemos hasta el amanecer
Buscando la alta, buscando el placer, viviendo la vida en el aire

Chorus (Spanish):
Oh, la noche pasada, oh, la noche pasada
Las memorias aún sientenight
Vivimos la vida al máximo, sin arrepentimientos, sin alaridos
Oh, la noche pasada, oh, la noche pasada

Verse 3 (English):
I'm the king of the club, got the crowd in a trance
Makin' moves that'll make 'em dance, got 'em feelin' like they're in a daze
Got my hands on the pulse, got the flow like a snake
Makin' moves that'll make 'em shake, got 'em feelin' like they're in a cage

Chorus (English):
Oh, last night, oh, last night
The memories still feelin' right
We livin' life to the fullest, no regrets, no alarms
Oh, last night, oh, last night

Outro (English):
The night is young, we ain't done yet
Got a feelin' that we'll be back at it, bet
Got a taste for the thrill, got a thirst for the fun
We'll be back at it again, when the sun is done.

This song incorporates elements of Travis Scott's style, blending trap beats and melodic hooks, while navigating between braggadocio and a sense of longing in the verses. The inclusion of a verse in Spanish adds a bilingual twist, reminiscent of Scott's collaborations with artists like Bad Bunny. The chorus is catchy and conveys the intensity of a single memorable night, while maintaining the cool and laid-back vibe characteristic of Scott's sound.`,lyre_response:`[Intro: Travis Scott]
NAH, THIS CAN'T BE LIFE, CAN IT?
NAH, THIS CAN'T BE LIFE, CAN IT?
NAH, THIS CAN'T BE LIFE, CAN IT?
NAH, THIS CAN'T BE LIFE, CAN IT?
(
Yeah, yeah, yeah, yeah, nah, nah, nah, nah
)
[Verse 1: Travis Scott]
Ayy, ayy, ayy, ayy, ayy
I been, I been, I been smokin' Mary Jane
Highway, highway, no lanes, oh, I'm swerving
Swerving, swerving, yeah, that's that drowsy shit
In the drop, in the drop, in the drop, the whip
Lowkey, lowkey, I'm looking for that hit
Don't wanna fuck, don't wanna fuck, tengo peso
No tengo peso, no tengo peso
[Bridge: Travis Scott & 
Bad Bunny
]
Besito, besito, besito, besito
Mira, mira, mira, mi casa, su casa
Besito, besito, besito, besito
Mira, mira, mira, mi casa, su casa
Besito, besito, besito, besito
Mira, mira, mira, mi casa, su casa
Besito, besito, besito, besito
Mira, mira, mira, mi casa, su casa
[Verse 2: Bad Bunny & 
Travis Scott
]
Uno, uno, prende, bebe
Y uestra (
Yeah, yeah
)
Ay, yo, aye, kemo, pa' mi casa
Pa' mi casa, pa' mi casa
Dilesa (
Woo, woo, woah
)
Dilesa (
Woo, woo, woah
)
Toca, toca, to' las chicas
Toca, toca, to' las chicas
Bailar, bailar, ma' las estrellas
Bailar, bailar, ma' las estrellas
(
Oh, woh, ayy
)
[Pre-Chorus: Travis Scott]
NAH, THIS CAN'T BE LIFE, CAN IT?
NAH, THIS CAN'T BE LIFE, CAN IT?
NAH, THIS CAN'T BE LIFE, CAN IT?
NAH, THIS CAN'T BE LIFE, CAN IT?
[Chorus: Travis Scott & 
Bad Bunny
]
Ooh, that's that one night, one night
NAH, THIS CAN'T BE LIFE, CAN IT?
I wanna relive that one night, one night
NAH, THIS CAN'T BE LIFE, CAN IT?
I wanna relive that one night
Ooh, that's that one night, one night
I wanna relive that one night, one night
NAH, THIS CAN'T BE LIFE, CAN IT?
Ooh, that's that one night, one night
NAH, THIS CAN'T BE LIFE, CAN IT?
I wanna relive that one night, one night
NAH, THIS CAN'T BE LIFE, CAN IT?
I wanna relive that one night [Verse 3: Bad Bunny]
Uno, uno, prende, bebe
Y uestra
Ay, yo, aye, kemo, pa' mi casa
Pa' mi casa, pa' mi casa
Dilesa
Toca, toca, to' las chicas
Toca, toca, to' las chicas
Bailar, bailar, ma' las estrellas
Bailar, bailar, ma' las estrellas
(
Oh, woh, ayy
)
[Pre-Chorus: Bad Bunny]
Ynah, thith Can't Be Li Life, Can It?
Nah, Thith Can't Be Li Life, Can It?
Nah, Thith Can't Be Li Life, Can It?
Nah, Thith Can't Be Li Life, Can It?
[Chorus: Travis Scott & 
Bad Bunny
]
Oh, that's that one night, one night
Nah, Thith Can't Be Li Life, Can It?
I wanna relive that one night, one night
Nah, Thith Can't Be Li Life, Can It?
I wanna relive that one night
Ooh, that's that one night, one night
I wanna relive that one night, one night
Nah, Thith Can't Be Li Life, Can It?
Ooh, that's that one night, one night
Nah, Thith Can't Be Li Life, Can It?
I wanna relive that one night, one night
Nah, Thith Can't Be Li Life, Can It?
I wanna relive that one night`,id:9175638},{name:"Heavenly Sent",artist:"Sam Smith",llama_response:`Verse 1:
I never knew what it meant to feel so free
Until the day you came into my life
With your wings of love and your shining light
You saved me from the dark, and made everything right

Chorus:
You're my angel, my guiding star
The one who holds my heart, near and far
In you I find solace, comfort, and peace
You're the one who helps me find my release

Verse 2:
Life can be harsh, it can be cold
But with you by my side, I never feel alone
You're my rock, my shelter in the storm
My forever friend, my guiding form

Chorus:
You're my angel, my guiding star
The one who holds my heart, near and far
In you I find solace, comfort, and peace
You're the one who helps me find my release

Bridge:
I don't know what I'd do without your love
It's the one thing that keeps me from above
You're the one who makes my heart sing
You're the one who brings me wings

Chorus:
You're my angel, my guiding star
The one who holds my heart, near and far
In you I find solace, comfort, and peace
You're the one who helps me find my release

Outro:
You're my steady hand, my beacon in the night
My forever love, my guiding light
In you I find my home, my place to rest
You're the one who helps me find my best

This song is written in the style of Sam Smith, with a focus on deep gratitude and reverence for a steadfast partner. The lyrics convey a sense of warmth and comfort in their presence, highlighting their constancy and strength as a source of healing and clarity. The melody is soulful and emotional, carrying the weight of profound appreciation and love. The use of imagery and metaphor, such as comparing the partner to an angel, adds depth and richness to the lyrics, while the repetition of the chorus serves to reinforce the theme of the partner as a guiding force in the speaker's life.`,lyre_response:`[Intro]
You're an angel
[Verse 1]
You're the one I need, you're the one I breathe
You're the one I depend on, you're the one I see
Through all of the darkness, you are the light
You're an angel, yeah, you're an angel
[Pre-Chorus]
And I don't know what I'd do, where would I be
Without you holding me, through all of the storms
You're an angel, yeah, you're an angel
[Chorus]
You're an angel sent from the heavens above
You're an angel, you're an angel
[Verse 2]
I don't deserve you, no, I could never repay
What you've done for me, but I'll try, I'll try with every part
Of myself, I'll do my best to make sure you're alright
You're an angel, yeah, you're an angel
[Pre-Chorus]
And I don't know what I'd do, where would I be
Without you holding me, through all of the storms
You're an angel, yeah, you're an angel
[Chorus]
You're an angel sent from the heavens above
You're an angel, you're an angel
[Bridge]
When I'm feeling lost, you're the light that I follow
When I'm feeling cold, you're the fire that I cling to
You're an angel, yeah, you're an angel
[Chorus]
You're an angel sent from the heavens above
You're an angel, you're an angel`,id:8721952},{name:"Die For You (Remix)",artist:"Ariana Grande",llama_response:`Verse 1:
I'm standing here, heart on my sleeve
Tryna find the words to convey
The depth of my love, the weight of my heart
Feeling so lost, but I'll never depart

Chorus:
I'll do anything, just to be with you
Facing every fear, to prove my love true
I'll stand by you, through the good and the bad
'Cause you're worth it, you're the one I've had

Verse 2:
Fear of loneliness, it's a feeling so real
But I know I'd rather feel that than to conceal
The truth of my heart, the depth of my soul
'Cause when I'm with you, I know I'm whole

Chorus:
I'll do anything, just to be with you
Facing every fear, to prove my love true
I'll stand by you, through the good and the bad
'Cause you're worth it, you're the one I've had

Bridge:
I know we're far, but my love won't fade
I'll be there for you, no matter the shade
I'll fight for you, with every breath I take
'Cause you're the one I need, you're the one I make

Chorus:
I'll do anything, just to be with you
Facing every fear, to prove my love true
I'll stand by you, through the good and the bad
'Cause you're worth it, you're the one I've had

Outro:
I'll be your shelter, your safe haven
I'll be your home, where you can always be
I'll be your forever, your love so true
I'll do anything, just to be with you.

In this song, I've tried to capture the complexities of expressing deep love and commitment in the midst of emotional turmoil. The lyrics convey a heartfelt confession of being willing to do anything for a loved one, even when faced with challenges and distance. The contrasting emotions of fear of loneliness and the recognition of the other's worth are echoed in the vulnerable and powerful sentiments found in Ariana Grande's vocal delivery and musical arrangements. The song's melody and harmonies are meant to evoke a sense of longing and determination, reflecting the themes of love and commitment that are central to the song's message.`,lyre_response:`[Verse 1]
I'm scared of loneliness, but I'm willin' to give it a try
If it means that you'll be mine
I'm standin' by, and I'm willin' to say goodbye
To every place I've ever known
[Pre-Chorus]
'Cause I'm so used to makin' all the rules
But baby, this time, I'm willin' to lose
I'm willin' to lose
[Chorus]
I'm willin' to do anything for you
Anything, anything, anything for you
I'm willin' to do anything for you
Anything, anything, anything
For you, for you
[Verse 2]
Hey, I'm jealous, and I'm always lookin' at the mirror
Who'd I see?  You guessed it
I'm angry too, and I'm sorry that I lashed out at you
When I'm scared, I run, but I'm willin' to face it
I'm willin' to face it [Pre-Chorus]
'Cause I'm so used to makin' all the rules
But baby, this time, I'm willin' to lose
I'm willin' to lose
[Chorus]
I'm willin' to do anything for you
Anything, anything, anything for you
I'm willin' to do anything for you
Anything, anything, anything
For you, for you
[Bridge]
You know I'd never ask you to do somethin' stupid
Or let you do somethin' stupid to me
I know you'd never ask me to do somethin' stupid
So let's just chill and stay together, naturally
[Chorus]
I'm willin' to do anything for you
Anything, anything, anything for you
I'm willin' to do anything for you
Anything, anything, anything
For you, for you
I'm willin' to do anything for you
Anything, anything, anything for you
I'm willin' to do anything for you
Anything, anything, anything
For you, for you`,id:8855026},{name:"Selfish (will.i.am Reference)",artist:"Kanye West",llama_response:`Verse 1:
I'm the king of my domain, you're the queen of my heart
But sometimes I feel like I'm losing my grip, oh Lord
You're the only one I desire, the only one I need
But the world's trying to tear us apart, it's a never-ending fight

Chorus:
I want you all to myself, give me the key
I'll keep you locked up tight, like a treasure to me
I'll be your possessive king, you'll be my queen
Together we'll rule this world, our love will be seen

Verse 2:
I'm a slave to my emotions, a prisoner of my mind
I can't help but think of you, all the time
I know I'm not perfect, I've got my own demons to face
But with you by my side, I feel like I can conquer the place

Chorus:
I want you all to myself, give me the key
I'll keep you locked up tight, like a treasure to me
I'll be your possessive king, you'll be my queen
Together we'll rule this world, our love will be seen

Verse 3:
I know I've got issues, I've got my own personal hell
But with you, I feel like I can conquer anything, you're my fuel
I'll do whatever it takes, to keep you by my side
I'll be the king of your heart, you'll be my queen, my pride

Chorus:
I want you all to myself, give me the key
I'll keep you locked up tight, like a treasure to me
I'll be your possessive king, you'll be my queen
Together we'll rule this world, our love will be seen

Bridge:
I know I'm not perfect, I've got my own personal shame
But with you, I feel like I can rise above it all, you're my claim to fame
I'll do whatever it takes, to keep you by my side
I'll be the king of your heart, you'll be my queen, my pride

Chorus:
I want you all to myself, give me the key
I'll keep you locked up tight, like a treasure to me
I'll be your possessive king, you'll be my queen
Together we'll rule this world, our love will be seen

Outro:
I'll be your king, you'll be my queen
Together we'll rule this world, our love will be seen
I'll keep you locked up tight, like a treasure to me
I'll be your possessive king, you'll be my queen, my pride.

In this song, I've tried to incorporate elements of Kanye West's style, such as the bravado and vulnerability, as well as the emotional depth and cultural references. The chorus has a catchy and repetitive style similar to XXXTENTACION, while the verses have a clever wordplay and cultural references reminiscent of will.i.am's lyrical approach. The song has a hip-hop beat with potential for moody and atmospheric production elements to enhance the sense of longing and fixation expressed in the lyrics.`,lyre_response:`[Intro: XXXTENTACION]
Don't ever speak my name like it's common (Like)
You don't ever look at me that way (Huh)
And if you ever leave my side, boy you're gonna-
[Chorus: XXXTENTACION & 
Kanye West
]
Be sorry, very sorry (
Sorry
)
Sorry I'm not sorry (
Not sorry
)
'Cause all I ever really wanted
Was you, so I'm glad I got ya (
I got ya
)
I don't really wanna share ya (Don't wanna share)
So keep it on the low, yeah, I'm possessive, yeah (Shh)
You can have your moments, but don't have other people (Shh)
I don't really wanna share ya (Don't wanna share)
So keep it on the low, yeah, I'm possessive, yeah (Shh)
You can have your moments, but don't have other people (Shh)
[Verse 1: Kanye West]
And don't ever let 'em take your freedom (Oh, no)
And don't ever let 'em take your dignity (Oh, no)
When it comes to matters of the heart (Oh, no)
I don't think rehab can fix your addiction
It's gon' take a miracle to fix your obsession (Woo)
A miracle in the form of relaxation (Woo)
It's gon' take a miracle (Woo)
A miracle because it's not just a habit (Woo)
She's too far gone, this girl, you can't come back (Woo)
You built too many walls, now it's too late (Woo)
The greatest asset in the game is self-awareness (Woo)
The greatest flaw is thinking you're aware enough (Woo)
And if you get too close, you're gonna get burned (Woo)
You're gonna get third-degree burns (Woo)
'Cause I don't think you're ready for the world, baby (Woo)
The last time we spoke, you didn't want to talk baby (Woo)
'Cause your pride is hurt
 (Woo)
And I don't think you're ready for the world, baby (Woo)
The last time we spoke, you didn't want to talk baby (Woo)
'Cause your pride is hurt (Woo)
And I don't think you're ready (Woo)
I don't think you're ready for the world, baby (Woo)
The last time we spoke, you didn't want to talk baby (Woo)
'Cause your pride is hurt (Woo)
And I don't think you're ready (Woo) [Chorus: XXXTENTACION & 
Kanye West
]
Be sorry, very sorry (
Sorry
)
Sorry I'm not sorry (
Not sorry
)
'Cause all I ever really wanted
Was you, so I'm glad I got ya (
I got ya
)
I don't really wanna share ya (Don't wanna share)
So keep it on the low, yeah, I'm possessive, yeah (Shh)
You can have your moments, but don't have other people (Shh)
I don't really wanna share ya (Don't wanna share)
So keep it on the low, yeah, I'm possessive, yeah (Shh)
You can have your moments, but don't have other people (Shh)
[Verse 2: XXXTENTACION]
And I don't think you're ready
For the world, so overboard (So overboard)
Everything is so extreme (So extreme)
Bet you never thought you'd see me sober (Sober)
I'm in a cast, it's a long story (It's a long story)
But I'm home, I'm not a murderer (I'm not a murderer)
I don't got life, so I'm a lucky bastard (I'm a lucky bastard)
But I don't know how to love, I'm a coward (I'm a coward)
And I don't think you're ready
For the world, so overboard (So overboard)
Everything is so extreme (So extreme)
Bet you never thought you'd see me sober (Sober)
I'm in a cast, it's a long story (It's a long story)
But I'm home, I'm not a murderer (I'm not a murderer)
I don't got life, so I'm a lucky bastard (I'm a lucky bastard)
But I don't know how to love, I'm a coward (I'm a coward)
[Chorus: XXXTENTACION & 
Kanye West
]
Be sorry, very sorry (
Sorry
)
Sorry I'm not sorry (
Not sorry
)
'Cause all I ever really wanted
Was you, so I'm glad I got ya (
I got ya
)
I don't really wanna share ya (Don't wanna share)
So keep it on the low, yeah, I'm possessive, yeah (Shh)
You can have your moments, but don't have other people (Shh)
I don't really wanna share ya (Don't wanna share)
So keep it on the low, yeah, I'm possessive, yeah (Shh)
You can have your moments, but don't have other people (Shh)
[Outro: Kanye West]
I don't think she's ready
For the world, so overboard
Everything is so extreme
Bet you never thought you'd see me sober
I'm in a cast, it's a long story
But I'm home, I'm not a murderer
I don't got life, so I'm a lucky bastard
But I don't know how to love, I'm a coward`,id:8855903},{name:"Dance The Night",artist:"Dua Lipa",llama_response:`(Verse 1)
I've been through the fire, but I'm still standing tall
Heartache in my eyes, but I won't let it pull me down
I hit the club tonight, to lose myself in the sound
Of the beat and the lights, and the energy all around

(Chorus)
I'm feeling alive, got my sparkling crown
Dancing through the night, like a queen on the throne
I'm unstoppable, got my confidence high
Glittering in the lights, like a diamond in the sky

(Verse 2)
I see the world through different eyes, when I'm on the floor
The music takes me higher, than any heartache can bring
I shake it off, like a shadow, and let the beat consume
I'm a queen of the night, and I'm feeling alive

(Chorus)
I'm feeling alive, got my sparkling crown
Dancing through the night, like a queen on the throne
I'm unstoppable, got my confidence high
Glittering in the lights, like a diamond in the sky

(Bridge)
I've been through the fire, but I'm still standing tall
I won't let heartache bring me down, I'll rise above it all
I'll keep on dancing, until the morning light
I'll shine brighter than the stars, in the night

(Chorus)
I'm feeling alive, got my sparkling crown
Dancing through the night, like a queen on the throne
I'm unstoppable, got my confidence high
Glittering in the lights, like a diamond in the sky

(Outro)
I'll keep on dancing, until the morning light
I'll shine brighter than the stars, in the night
I'm unstoppable, got my sparkling crown
I'm the queen of the night, and I'm feeling alive.

This song is written in the style of Dua Lipa, with a focus on upbeat, dance-pop music and vivid imagery of shining under the club lights. The lyrics reflect resilience in the face of heartache, maintaining poise and composure as one dances through the challenges. The song is an empowering escape, with a pulsating beat that mirrors the act of dancing. The attitude of the song shrugs off romantic setbacks, focusing instead on the joy and freedom found on the dance floor.`,lyre_response:`[Intro]
Don't call me, I'm already gone
I'm dancing with somebody new
Don't worry, it's not about you
[Chorus]
I'm dancin' with the deuces, so call me Deuce Wild
I'm movin' like a champion, just call me Suga Bear
I'm shinin' like a diamond underneath the sparkle lights
I'm decomposin' like it's no one's business, no worries, no fights
[Verse 1]
I'm moving like a champion and you know it
I've got the crowd in check, just watch me go
Don't let it break your heart
When we're far apart
I know that I'll be there
Dancing with somebody new [Pre-Chorus]
No time to be sad, babe
When you're dancing with somebody new
I know it's over, babe
But that's not what I want to do
[Chorus]
I'm dancin' with the deuces, so call me Deuce Wild
I'm movin' like a champion, just call me Suga Bear
I'm shinin' like a diamond underneath the sparkle lights
I'm decomposin' like it's no one's business, no worries, no fights
[Verse 2]
I'm moving like a champion and you know it
I've got the crowd in check, just watch me go
Don't let it break your heart
When we're far apart
I know that I'll be there
Dancing with somebody new [Pre-Chorus]
No time to be sad, babe
When you're dancing with somebody new
I know it's over, babe
But that's not what I want to do [Chorus]
I'm dancin' with the deuces, so call me Deuce Wild
I'm movin' like a champion, just call me Suga Bear
I'm shinin' like a diamond underneath the sparkle lights
I'm decomposin' like it's no one's business, no worries, no fights
I'm dancin' with the deuces, so call me Deuce Wild
I'm movin' like a champion, just call me Suga Bear
I'm shinin' like a diamond underneath the sparkle lights
I'm decomposin' like it's no one's business, no worries, no fights`,id:9149479},{name:"Another Late Night",artist:"Drake",llama_response:`Verse 1:
I'm sitting here, sipping on a drink, thinking 'bout the one I left behind
She was the one I loved, but now she's just a memory, a distant mind
I'm living this life of fame, it's all about the glamour and the dime
But sometimes I can't help but wonder, if it's all just a crime

Chorus:
My bitch, my bitch, my heart's on fire
But I know I'm not the one she desires
She wants the fame and fortune, the lights and the glory
But I'm just a man, trying to find my way to her heart, oh

Verse 2:
I'm living this life of luxury, but it's not as sweet as it seems
I'm constantly in the spotlight, but nobody sees the real me
I'm just a kid from the 6, trying to make a name for myself
But sometimes I feel like I'm losing myself in the wealth and the wealth

Chorus:
My bitch, my bitch, my heart's on fire
But I know I'm not the one she desires
She wants the fame and fortune, the lights and the glory
But I'm just a man, trying to find my way to her heart, oh

Verse 3:
I'm walking these red carpets, but I'm not who I pretend to be
I'm just a man, trying to find my place in this world, you see
I'm trying to make a difference, but sometimes it feels like a game
I'm just a pawn in this world, trying to make my move, but it's all in vain

Chorus:
My bitch, my bitch, my heart's on fire
But I know I'm not the one she desires
She wants the fame and fortune, the lights and the glory
But I'm just a man, trying to find my way to her heart, oh

Bridge:
I know I'm not the only one, living this life of fame and fortune
But sometimes it feels like a curse, a never-ending cycle of madness
I'm just a man, trying to find my place in this world, trying to make a name
But sometimes I feel like I'm losing myself in the game

Chorus:
My bitch, my bitch, my heart's on fire
But I know I'm not the one she desires
She wants the fame and fortune, the lights and the glory
But I'm just a man, trying to find my way to her heart, oh

Outro:
So I'll keep on singing my song, hoping that she'll hear me someday
And maybe she'll see the real me, behind this fame and the glamour
I'm just a man, trying to find my way, in this crazy world we live in
But my heart's on fire, and I know she's the one I need to win.`,lyre_response:`[Intro]
(
Rihanna!
)
Hello? Yeah
I think I lost my train of thought
It's like I said, you're coming over
I'm at the house, it's a bit of a mess
I've been up and down, you know that
Just be careful when you come through the front door
I put the tunes on, max the volume out
Just be careful not to knock over the trophies
(
Ooh, whoa
)
[Verse 1]
And I'm sitting here thinking how it all started
And it was you, my baby, who got me involved in all of this shit
You're the one who told me I'm a star, recruit me for the Marines, you're a bitch
You're the reason I got plaques and the reason I got ribbons, you a bitch
I hate to do this over the phone, but can you do me a favor?
Can you make it out to West here tomorrow? I'll be at the crib all day
Oh, and baby, I gotta ask, can you bring me my bags?
My new bag, that is, the one that's from your favorite designer
The one that got all the sauce on it from when you left the spray tan on me
(
Oh, oh, oh
)
[Pre-Chorus]
I don't know, it's kinda stupid if you ask me
What I'm doing out here all alone
Thinking 'bout letting you stay over
Is it cool if I call you my bitch?
I don't know, it's kinda stupid if you ask me
I'm out here all alone
And I can think of a million things I'd rather do than be on the phone with you
But right now, that's the only way I can think of to make it up to you
So what do you say, baby? Can I call you my bitch? (
My bitch
) [Chorus]
I can call you my bitch, but that don't make you my bitch
If you don't want me to, I won't, I won't, I won't, I won't, I won't
I can call you my bitch, but that don't make you my bitch
If you don't want me to, I won't, I won't, I won't, I won't, I won't [Verse 2]
I've been watching you from the moment I came into this world
And even when I leave, that is, if that's God's will
I always will love you and I will always respect you
I'll be right here on call if you ever need a favor
I don't mind getting dirty, I do it all for you
I know that you're out here, so go on and hit me up
What do you need, baby? Just let me know, and do
I gotta ask, how is Kanye? I met him once before
I was a bit of a fan back in the day, I won't argue anymore
And Kim, you two are having a baby, that's a big deal to me
Congratulations to you both, man, that's great to see [Pre-Chorus]
I don't know, it's kinda stupid if you ask me
What I'm doing out here all alone
Thinking 'bout letting you stay over
Is it cool if I call you my bitch?
I don't know, it's kinda stupid if you ask me
I'm out here all alone
And I can think of a million things I'd rather do than be on the phone with you
But right now, that's the only way I can think of to make it up to you
So what do you say, baby? Can I call you my bitch? (
My bitch
) [Chorus]
I can call you my bitch, but that don't make you my bitch
If you don't want me to, I won't, I won't, I won't, I won't, I won't
I can call you my bitch, but that don't make you my bitch
If you don't want me to, I won't, I won't, I won't, I won't, I won't
I can call you my bitch, but that don't make you my bitch
If you don't want me to, I won't, I won't, I won't, I won't, I won't
I can call you my bitch, but that don't make you my bitch
If you don't want me to, I won't, I won't, I won't, I won't, I won't`,id:9488818},{name:"FUnK YA",artist:"Bruno Mars",llama_response:`(Verse 1)
Yo, listen up, I got a story to tell
'Bout a love that's funky, and a love that's swell
See, she's got a way of making me smile
But then she pushes me away, and I'm left to wonder why

(Chorus)
Funk you to the top, I'm gonna break through
Gonna funk you to the top, and get my groove back to you
Punk ya, I'm gonna make you see
That I'm the one for you, and you're the one for me

(Verse 2)
We dance around, we play games of love
She's got me feeling like I'm walking on air
But then she takes a step back, and I'm left to roam
Wondering where I stand, and if I'll ever be the one

(Chorus)
Funk you to the top, I'm gonna break through
Gonna funk you to the top, and get my groove back to you
Punk ya, I'm gonna make you see
That I'm the one for you, and you're the one for me

(Bridge)
We're like two souls, lost in a funky haze
Trying to find our way, through the emotional maze
But I know we can make it, if we just keep on dancing
Funk you to the top, and let our love take chancing

(Outro)
Now I'm standing here, with my heart on my sleeve
Realizing too late, I wanna stay and believe
In the funk of love, and the groove of life
Funk you to the top, and make it alright

(Hook)
Funk you to the top, funk you to the top
Punk ya, punk ya, make you see
Funk you to the top, funk you to the top
We're gonna funk you to the top, and never stop

This song is written in the style of Bruno Mars, with a focus on a playful and funky vibe, catchy hooks, and smooth vocal delivery. The lyrics tell a narrative of a romantic push-and-pull dynamic, with a desire to break through emotional barriers using the phrases "funk ya" and "punk ya." The song features a groovy instrumental bridge and an outro that conveys a too-late realization of wanting to stay, all while maintaining the infectious energy of the song.`,lyre_response:`[Intro]
Funk you to the top
Punk you to the top
Funk you to the top
Punk you to the top
Funk you to the top
Punk you to the top
[Verse 1]
Pete: 
Hey, Dave, what's up, man?
Dave: 
Not much, Pete. What's up with you?
Pete: 
I'm uh, I'm trying to figure out this chick, man
Dave: 
Oh yeah? What's her name?
Pete: 
Jenny. She's hot, man. She's like, mega
Dave: 
Okay, well, how's she feel about you?
Pete: 
It's back and forth, you know? She's all like, "I love this song!"
Then she's like, "I hate this song!"
Dave: 
Oh, man. That's gotta be hard to figure out
Pete: 
Tell me about it, man. One minute she's all over me
Then the next, she's cold as ice
Dave: 
Well, you wanna know a trick that might help you out?
Pete: 
Yeah, I'm all ears
Dave: 
Just learn how to punk her, man
Punk her
Funk you to the top
[Spoken Dialogue]
Pete: 
Jenny, I'm gonna call you tonight
Jenny: 
Okay, what's up?
Pete: 
Nothin', nothin'. I was just thinkin' 'bout you
Jenny: 
Oh yeah?
Pete: 
Yeah. I was wonderin' if I could, uh, see you tonight
Jenny: 
Okay
Pete: 
Okay, well, what's your number again?
Jenny: 
Uh, it's 555-7264
Pete: 
Okay, cool. Well, I'm gonna funk you to the top, girl
Jenny: 
What?
Pete: 
Nothing, I was just sayin' you're like a virgin
Girl, you gotta get funked
Jenny: 
Oh
Pete: 
Don't be so quick to judge, okay?
Jenny: 
I'm not judging
Pete: 
Cool. Well, I'm gonna funk you to the top
Jenny: 
Pete, wait
Pete: 
What?
Jenny: 
I didn't say you could use my bathroom
Pete: 
Oh, I did? When?
Jenny: 
Last night
Pete: 
Oh, man. I'm gonna funk you to the top
, girl
Jenny: 
Punk me first
Pete: 
What?
Jenny: 
Punk me first
Pete: 
Oh, you want the truth?
Jenny: 
Yeah
Pete: 
Look, uh, I'm gonna funk you to the top
Jenny: 
How?
Pete: 
I'm gonna punk you to the top
Jenny: 
Oh
Pete: 
Don't worry, I got a plan
Jenny: 
What is it?
Pete: 
I'm gonna funk you to the top
Jenny: 
How?
Pete: 
I'm gonna punk you to the top
Jenny: 
Oh
Pete: 
Don't worry, I got a plan
Jenny: 
What is it?
Pete: 
I'm gonna funk you to the top
Jenny: 
How?
Pete: 
I'm gonna punk you to the top
Jenny: 
Oh
Pete: 
Don't worry, I got a plan
Jenny: 
What is it?
Pete: 
I'm gonna funk you to the top
Jenny: 
How?
Pete: 
I'm gonna punk you to the top
Jenny: 
Oh
Pete: 
Don't worry, I got a plan
Jenny: 
What is it?
Pete: 
I'm gonna funk you to the top
Jenny: 
How?
Pete: 
I'm gonna punk you to the top
Jenny: 
Oh
Pete: 
Don't worry, I got a plan
Jenny: 
What is it?
Pete: 
I'm gonna funk you to the top
Jenny: 
How?
Pete: 
I'm gonna punk you to the top
Jenny: 
Oh
Pete: 
Don't worry, I got a plan
Jenny: 
What is it?
Pete: 
I'm gonna funk you to the top
Jenny: 
How?
Pete: 
I'm gonna punk you to the top
Jenny: 
Oh
Pete: 
Don't worry, I got a plan
Jenny: 
What is it?
Pete: 
I'm gonna funk you to the top
Jenny: 
How?
Pete: 
I'm gonna punk you to the top
Jenny: 
Oh
Pete: 
Don't worry, I got a plan
Jenny: 
What is it?
Pete: 
I'm gonna funk you to the top
Jenny: 
How?
Pete: 
I'm gonna punk you to the top
Jenny: 
Oh
Pete: 
Don't worry, I got a plan
Jenny: 
What is it?
Pete: 
I'm gonna funk you to the top
Jenny: 
How?
Pete: 
I'm gonna punk you to the top
Jenny: 
Oh
Pete: 
Don't worry, I got a plan
Jenny: 
What is it?
Pete: 
I'm gonna funk you to the top
Jenny: 
How?
Pete: 
I'm gonna punk you to the top
Jenny: 
Oh
Pete: 
Don't worry, I got a plan
Jenny: 
What is it?
Pete: 
I'm gonna funk you to the top
Jenny: 
How?
Pete: 
I'm gonna punk you to the top
Jenny: 
Oh
Pete: 
Don't worry, I got a plan
Jenny: 
What is it?
Pete: 
I'm gonna funk you to the top
Jenny: 
How?
Pete: 
I'm gonna punk you to the top
Jenny: 
Oh
Pete: 
Don't worry, I got a plan
Jenny: 
What is it?
Pete: 
I'm gonna funk you to the top
Jenny: 
How?
Pete: 
I'm gonna punk you to the top
Jenny: 
Oh
Pete: 
Don't worry, I got a plan
Jenny: 
What is it?
Pete: 
I'm gonna funk you to the top
Jenny: 
How?
Pete: 
I'm gonna punk you to the top
Jenny: 
Oh
Pete: 
Don't worry, I got a plan
Jenny: 
What is it?
Pete: 
I'm gonna funk you to the top
Jenny: 
How?
Pete: 
I'm gonna punk you to the top
Jenny: 
Oh
Pete: 
Don't worry, I got a plan
Jenny: 
What is it?
Pete: 
I'm gonna funk you to the top
Jenny: 
How?
Pete: 
I'm gonna punk you to the top
Jenny: 
Oh
Pete: 
Don't worry, I got a plan
Jenny: 
What is it?
Pete: 
I'm gonna funk you`,id:8542990},{name:"GOLD BLACKBERRY",artist:"Travis Scott ",llama_response:`(Verse 1)
I'm livin' large, I'm on top of the game
Floating on clouds, got my name in flames
Got my own private jet, it's never late
Flyin' high, feelin' alive, ain't no debate

Got my own private island, it's off the chain
Partyin' all night, got my own private gain
Got my own private chef, he cooks up the finest dishes
Got my own private vault, it's where I keep my riches

(Chorus)
Luxury life, it's the only way to live
Got my own private world, it's where I give
Everything I got, it's all on the table
Luxury life, it's the only way to survive

(Verse 2)
Bentley, Ferrari, and a mansion to call my own
Got my own private beach, it's where I go to moan
Got my own private crew, they always by my side
We party hard, we never say die

Got my own private club, it's where I get my thrills
Got my own private stage, it's where I get my kills
Got my own private life, it's where I get my fame
Luxury life, it's the only way to play the game

(Chorus)
Luxury life, it's the only way to live
Got my own private world, it's where I give
Everything I got, it's all on the table
Luxury life, it's the only way to survive

(Bridge)
I'm the king of the game, I'm on top of the throne
Got my own private army, they always on the phone
Got my own private bank, it's where I keep my dough
Luxury life, it's the only way to flow

(Verse 3)
Got my own private island, it's where I get my thrills
Got my own private beach, it's where I get my kills
Got my own private crew, they always by my side
We party hard, we never say die

Got my own private jet, it's where I get my flight
Got my own private stage, it's where I get my light
Got my own private life, it's where I get my fame
Luxury life, it's the only way to play the game

(Outro)
Luxury life, it's the only way to live
Got my own private world, it's where I give
Everything I got, it's all on the table
Luxury life, it's the only way to survive.

This song is written in the style of Travis Scott, blending themes of wealth, hedonism, and the high-stakes lifestyle. The lyrics reflect a confident and lavish life, with references to high-end brands, exclusive parties, and the insatiable pursuit of excess. The musical style includes a hard-hitting beat with atmospheric synths, typical of Scott's production, creating a vibe that's both boastful and hypnotic. The song captures the essence of luxury and success, while also highlighting the indulgent and extravagant lifestyle that comes with it.`,lyre_response:`[Intro]
(
Snippet from "Birds" by KAYTRANADA
)
Ayy, bitch, I'm fuckin' her on the regular
And she just want me to get her more and more
(
More and more
)
She just want me to get her more and more
(
More and more
)
She just want me to get her more and more
(
More and more
)
She just want me to get her more and more
(
More and more
)
Ayy, bitch, I'm fuckin' her on the regular
And she just want me to get her more and more
(
More and more
)
She just want me to get her more and more
(
More and more
)
She just want me to get her more and more
(
More and more
)
She just want me to get her more and more
(
More and more
)
[Verse]
Bad bitches wanna fuck me, I got options
When I show up, the women go wild
They see me, they want me, they tap on my shoulder
And say, "Fuck me, I'm your little mama"
I like that, they call me a playboy, I like that
I've got a lot of bitches, I ain't got no time for that
I'm a hustler, yeah, I'm a hustler
And if you don't fuckin' know, I'm a hustler
I'm a hustler, I need me a hustler
I'm a hustler, I need me a hustler
 (Yeah)
I'm a hustler, I need me a hustler
I'm a hustler, I need me a hustler
 (Yeah, yeah)
[Chorus]
She just want me to get her more and more
She just want me to get her more and more
She just want me to get her more and more
She just want me to get her more and more
She just want me to get her more and more
She just want me to get her more and more
She just want me to get her more and more
She just want me to get her more and more
She just want me to get her more and more
She just want me to get her more and more
[Interlude]
(
Snippet from "Birds" by KAYTRANANDA
)
Ayy, bitch, I'm fuckin' her on the regular
And she just want me to get her more and more
(
More and more
)
She just want me to get her more and more
(
More and more
)
She just want me to get her more and more
(
More and more
)
She just want me to get her more and more
(
More and more
)
Ayy, bitch, I'm fuckin' her on the regular
And she just want me to get her more and more
(
More and more
)
She just want me to get her more and more
(
More and more
)
She just want me to get her more and more
(
More and more
)
She just want me to get her more and more
(
More and more
) [Verse 2]
I remember just gettin' my first million
Couldn't get me no bigger than a coupe and a mistress
I was drivin' around with my brothers, doin' donuts on the curb
With the engine on the back of my first horse, I was ridin' a turbo
I'm from the city where they love and they praise hustlers
I'm from the city where they make 'em, they don't raise 'em
I'm from the city of Houston, I'm from the city of H-Town
I don't talk about my personal life, you know I got a couple of sides now
But me and Kylie, we got Tyga, we got Stoney, we got that one lil' nigga
That's my only son, and he gon' be okay, don't worry 'bout nothin', yeah
[Chorus]
She just want me to get her more and more
She just want me to get her more and more
She just want me to get her more and more
She just want me to get her more and more
She just want me to get her more and more
She just want me to get her more and more
She just want me to get her more and more
She just want me to get her more and more
She just want me to get her more and more
[Outro]
(
Snippet from "Birds" by KAYTRANANADA
)
Ayy, bitch, I'm fuckin' her on the regular
And she just want me to get her more and more
(
More and more
)
She just want me to get her more and more
(
More and more
)
She just want me to get her more and more
(
More and more
)
She just want me to get her more and more
(
More and more
)`,id:9103860}];function Od(){const[e,n]=kn.useState([]),[t,o]=kn.useState(!1),[a,i]=kn.useState(["wait...","wait...",-1,-1,-1]),[r,s]=kn.useState({});a[4]==9;const h=()=>{console.log("submitting.."),fetch("https://hidden-chamber-86726-d7f9acdfb41d.herokuapp.com/https://simple-server-0ac476df4b54.herokuapp.com/submit-json",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(y=>y.json).then(y=>console.log(y))},u=function(y,c){return y.sort(()=>.5-Math.random()).slice(0,10)},g=(y,c)=>()=>{s({...r,[y]:c});let I=a[3];I<9?i([e[I+1].llama_response,e[I+1].lyre_response,e[I+1].id,I+1,e[I+1].prompt]):(o(!0),console.log("DONE"),console.log(r),h())};return kn.useEffect(()=>{const y=u(jd);n([...y]),i([y[0].llama_response,y[0].lyre_response,y[0].id,0,y[0].prompt])},[]),pe.jsx("div",{children:t?pe.jsx("div",{children:"Thanks for helping us advance the future of LLM's."}):pe.jsx(Ad,{index:a[2],songOne:a[0],songTwo:a[1],handlePreference:g,prompt:a[3]})})}function Yd(){return pe.jsx("div",{className:"text-center",children:pe.jsx(Od,{})})}const Vd=document.getElementById("root");Bd.render(pe.jsx(Yd,{}),Vd);
