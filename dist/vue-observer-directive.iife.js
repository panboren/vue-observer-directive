var vueObserverDirective=function(e){"use strict";function o(){var e=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=o.target,r=o.show,i=void 0===r?function(){}:r,n=o.hide,s=void 0===n?function(){}:n,v=o.threshold,c=void 0===v?.01:v,d=o.once,h=void 0!==d&&d,u=o.root,a=void 0===u?null:u;c=Math.max(Math.min(c,1),.01);try{var f=new window.IntersectionObserver((function(o){o[0].intersectionRatio>=c?(i(),h&&e.stop()):s()}),{threshold:[c],root:a});f.observe(t),this.stop=function(){f.disconnect()}}catch(e){console.error(e.message,"\n不支持IntersectionObserver，升级浏览器或代码使用polyfill: https://github.com/w3c/IntersectionObserver")}}var t={inserted:function(e,t){var r=t.value,i=t.arg,n=t.modifiers;e.observer=new o({target:e,show:"function"==typeof r?r:r.show,hide:r.hide,threshold:i/100||void 0,once:n.once,root:r.dom})},unbind:function(e){e.observer&&"function"==typeof e.observer.stop&&e.observer.stop()}},r={install:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.directive(o.directive||"observer",t)}};return e.default=r,e.vueObserverDirective=t,e}({});
