parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"EEp9":[function(require,module,exports) {
var e=document.querySelector(".contact"),t=document.querySelector(".about"),n=document.querySelector(".contact__elipse-dot"),o=document.querySelector(".about__elipse"),r=n.getBoundingClientRect(),c=o.getBoundingClientRect(),u=/Firefox/i.test(navigator.userAgent);if(u){var a=document.querySelector(".header__img-parallax");a.style.backgroundPosition="0 0"}var i=function(e,t,n){var o=e.clientX-t.x,r=e.clientY-t.y;n.style.transform="\n    translate(".concat(o/40,"px, ").concat(-1*r/50,"px)")};e.addEventListener("mousemove",function(e){return i(e,r,n)}),t.addEventListener("mousemove",function(e){return i(e,c,o)});
},{}]},{},["EEp9"], null)
//# sourceMappingURL=main.da9b73ea.js.map