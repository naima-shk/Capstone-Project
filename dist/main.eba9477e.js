parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var e=1;function l(l){n(e+=l)}function t(l){n(e=l)}function n(l){var t,n=document.getElementsByClassName("mySlides"),s=document.getElementsByClassName("dot");for(l>n.length&&(e=1),l<1&&(e=n.length),t=0;t<n.length;t++)n[t].style.display="none";for(t=0;t<s.length;t++)s[t].className=s[t].className.replace(" active","");n[e-1].style.display="block",s[e-1].className+=" active"}function s(){var e=document.getElementById("demo");"none"===e.style.display?e.style.display="block":e.style.display="none"}n(e);
},{}]},{},["epB2"], null)
//# sourceMappingURL=/main.eba9477e.js.map