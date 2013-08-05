/*! jQuery UI - v1.10.3 - 2013-05-15
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.slider.js
* Copyright 2013 jQuery Foundation and other contributors Licensed MIT */

(function(e,t){function i(t,i){var a,n,r,o=t.nodeName.toLowerCase();return"area"===o?(a=t.parentNode,n=a.name,t.href&&n&&"map"===a.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&s(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var a=0,n=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var s,a,n=e(this[0]);n.length&&n[0]!==document;){if(s=n.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(a=parseInt(n.css("zIndex"),10),!isNaN(a)&&0!==a))return a;n=n.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var s=e.attr(t,"tabindex"),a=isNaN(s);return(a||s>=0)&&i(t,!a)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,s){function a(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===s?["Left","Right"]:["Top","Bottom"],r=s.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+s]=function(i){return i===t?o["inner"+s].call(this):this.each(function(){e(this).css(r,a(this,i)+"px")})},e.fn["outer"+s]=function(t,i){return"number"!=typeof t?o["outer"+s].call(this,t):this.each(function(){e(this).css(r,a(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,s){var a,n=e.ui[t].prototype;for(a in s)n.plugins[a]=n.plugins[a]||[],n.plugins[a].push([i,s[a]])},call:function(e,t,i){var s,a=e.plugins[t];if(a&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(s=0;a.length>s;s++)e.options[a[s][0]]&&a[s][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",a=!1;return t[s]>0?!0:(t[s]=1,a=t[s]>0,t[s]=0,a)}})})(jQuery);(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(a){}n(t)},e.widget=function(i,s,n){var a,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],a=u+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(i,n){return e.isFunction(n)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,a=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=a,i}}(),t):(l[i]=n,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:a}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var n,a,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(n in r[o])a=r[o][n],r[o].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,n=e.data(this,a);return n?e.isFunction(n[r])&&"_"!==r.charAt(0)?(s=n[r].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(r||{})._init():e.data(this,a,new n(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,a,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},n=i.split("."),i=n.shift(),n.length){for(a=o[i]=e.widget.extend({},this.options[i]),r=0;n.length-1>r;r++)a[n[r]]=a[n[r]]||{},a=a[n[r]];if(i=n.pop(),s===t)return a[i]===t?null:a[i];a[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,r=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?a.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var r,o=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),r=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),r&&e.effects&&e.effects.effect[o]?s[t](n):o!==t&&s[o]?s[o](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}})})(jQuery);(function(e){var t=!1;e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?e(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(a!==e)return a;var i,s,n=t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return t("body").append(n),i=o.offsetWidth,n.css("overflow","scroll"),s=o.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),a=i-s},getScrollInfo:function(e){var i=e.isWindow?"":e.element.css("overflow-x"),s=e.isWindow?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,a="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:a?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]);return{element:i,isWindow:s,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var a,p,m,g,v,b,_=t(e.of),y=t.position.getWithinInfo(e.within),w=t.position.getScrollInfo(y),x=(e.collision||"flip").split(" "),k={};return b=n(_),_[0].preventDefault&&(e.at="left top"),p=b.width,m=b.height,g=b.offset,v=t.extend({},g),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=l.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=l.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),k[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===e.at[0]?v.left+=p:"center"===e.at[0]&&(v.left+=p/2),"bottom"===e.at[1]?v.top+=m:"center"===e.at[1]&&(v.top+=m/2),a=i(k.at,p,m),v.left+=a[0],v.top+=a[1],this.each(function(){var n,l,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),b=s(this,"marginTop"),D=u+f+s(this,"marginRight")+w.width,T=d+b+s(this,"marginBottom")+w.height,C=t.extend({},v),M=i(k.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?C.left-=u:"center"===e.my[0]&&(C.left-=u/2),"bottom"===e.my[1]?C.top-=d:"center"===e.my[1]&&(C.top-=d/2),C.left+=M[0],C.top+=M[1],t.support.offsetFractions||(C.left=h(C.left),C.top=h(C.top)),n={marginLeft:f,marginTop:b},t.each(["left","top"],function(i,s){t.ui.position[x[i]]&&t.ui.position[x[i]][s](C,{targetWidth:p,targetHeight:m,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:D,collisionHeight:T,offset:[a[0]+M[0],a[1]+M[1]],my:e.my,at:e.at,within:y,elem:c})}),e.using&&(l=function(t){var i=g.left-C.left,s=i+p-u,n=g.top-C.top,a=n+m-d,h={target:{element:_,left:g.left,top:g.top,width:p,height:m},element:{element:c,left:C.left,top:C.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>a?"top":n>0?"bottom":"middle"};u>p&&p>r(i+s)&&(h.horizontal="center"),d>m&&m>r(n+a)&&(h.vertical="middle"),h.important=o(r(i),r(s))>o(r(n),r(a))?"horizontal":"vertical",e.using.call(this,t,h)}),c.offset(t.extend(C,{using:l}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-a-n;e.collisionWidth>a?h>0&&0>=l?(i=t.left+h+e.collisionWidth-a-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+a-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-a-n;e.collisionHeight>a?h>0&&0>=l?(i=t.top+h+e.collisionHeight-a-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+a-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-o-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-o-a,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-o-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,m=-2*e.offset[1];0>c?(s=t.top+p+f+m+e.collisionHeight-o-a,t.top+p+f+m>c&&(0>s||r(c)>s)&&(t.top+=p+f+m)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+m-h,t.top+p+f+m>u&&(i>0||u>r(i))&&(t.top+=p+f+m))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,a,o=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(o?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in s)e.style[a]=s[a];e.appendChild(r),i=o||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()})(jQuery);(function(t){var e=5;t.widget("ui.slider",t.ui.mouse,{version:"1.10.3",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)o.push(a);this.handles=n.add(t(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,i="";e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):this.range=t([])},_setupEvents:function(){var t=this.handles.add(this.range).filter("a");this._off(t),this._on(t,this._handleEvents),this._hoverable(t),this._focusable(t)},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,a,o,r,h,l,u=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-u.values(e));(n>i||n===i&&(e===u._lastChangedValue||u.values(e)===c.min))&&(n=i,a=t(this),o=e)}),r=this._start(e,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),h=a.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-h.left-a.width()/2,top:e.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,a;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&i>s||1===e&&s>i)&&(i=s),i!==this.values(e)&&(n=this.values(),n[e]=i,a=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),a!==!1&&this.values(e,i,!0))):i!==this.value()&&(a=this._trigger("slide",t,{handle:this.handles[e],value:i}),a!==!1&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(e,i){var s,n,a;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),undefined;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),t.Widget.prototype._setOption.apply(this,arguments),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var e,i,s,n,a,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(i){var s,n,a,o,r=t(i.target).data("ui-slider-handle-index");switch(i.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(i.target).addClass("ui-state-active"),s=this._start(i,r),s===!1))return}switch(o=this.options.step,n=a=this.options.values&&this.options.values.length?this.values(r):this.value(),i.keyCode){case t.ui.keyCode.HOME:a=this._valueMin();break;case t.ui.keyCode.END:a=this._valueMax();break;case t.ui.keyCode.PAGE_UP:a=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.PAGE_DOWN:a=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(n===this._valueMax())return;a=this._trimAlignValue(n+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(n===this._valueMin())return;a=this._trimAlignValue(n-o)}this._slide(i,r,a)},click:function(t){t.preventDefault()},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}})})(jQuery);


;(function($){

	var pad = function(val, len){
        val = val + '';
        len = len || 2;
        while(val.length < len){
            val = "0" + val;
        }
        return val;
    }
    
    Date.prototype.format = function(mask){
        var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|"[^"]*"|'[^']*'/g;
        var date = this;
        var d = date.getDate(),
        D = date.getDay(),
        m = date.getMonth(),
        y = date.getFullYear(),
        H = date.getHours(),
        M = date.getMinutes(),
        s = date.getSeconds(),
        L = date.getTime(),
        flags = {
            d: d,
            dd: pad(d),
            m: m + 1,
            mm: pad(m+1),
            yy: String(y).slice(2),
            yyyy: y,
            H: H,
            M: M,
            S: s,
            L: pad(L,3)
        }

        return mask.replace(token, function($0){
            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });
    }
    
    Date.prototype._addMonths = function(M){
        var y = this.getFullYear(),
        m = this.getMonth();
        return new Date(y,m + M,1);
    }
    
    var parseDateInt = function(date){
    	/*if(typeof date == 'string'){
            date = date.toDate();
        }*/

        if(date){
            return parseInt(date.format('yyyymmdd'), 10);
        }
        
        return false;
    }
    var MASK = "yyyy-mm-dd", MKEYMASK = "yyyy-mm", TODAY = new Date(), TODAYINT = parseDateInt(TODAY);
    
    /**
     * 按月创建日历数据结构
     */
    var C = {
        __data: {},
        _create: function(date, key){
            var y = date.getFullYear(), m = date.getMonth(), arr = [], d = 1;
            var w = (new Date(y, m , 1)).getDay(),
            min = w - 1, max = w + (new Date(y, m + 1, 0).getDate());

            for(var i = 0; i < 42; i++){
                if(i > min && i < max){
                    var _day = i - min;
                    var _dstr = key + '-' + pad(_day); 
                    var obj = {
                        k: _dstr,
                       // i: parseDateInt(_dstr),
                        y: y,
                        m: m,
                        d: _day,
                        w: w
                    }
                    
                    w++;
                    if(w > 6){
                        w = 0;
                    }
                    arr.push(obj);
                }else{
                    arr.push({
                        k: false,
                        d: ''
                    })
                }
            }
            
            C.__data[key] = arr;
            
            return arr;
        },
        get: function(date, key){
            key = key || date.format(MKEYMASK);
            if(!C.__data[key]){
                C._create(date, key);
            }
            
            return C.__data[key];
        }
    }




	function iCalendar(el, options){
		this.options = {
            placeholder: null,
            // placeholder: '2013-05-08 05:24:56',
            type: 'date', // date/time/datetime
            targetTrigger: 'focus',
            dateSelectClose: true,
            autoClose: true,
            position: 'absolute',
            container: 'body',
            slideSpeed: 200,
            fixedTop: 0,
            zindex: 1100,
            showText: {
                today: '今天',
                prev: '上一月',
                next: '下一月',
                title: 'yyyy年mm月',
                week: ['日','一','二','三','四','五','六']
            },
            dateClass: {
                blank: 'blank',
                start: 'start',
                today: 'today',
                select: 'select'
            },
            event: {
                refer: null,
                init: null,
                date: null,
                prev: null,
                next: null
            },
            timePicker: [
                {
                    targetClass: 'icalendar-rangslider-h',
                    showClass: 'icalendar-rangslider-val-h',
                    title: '时：',
                    options: {
                        range: 'min',
                        min: 0,
                        max: 23,
                        slide: function( event, ui ) {
                            if( ui.value<10 ) ui.value = ('0'+ui.value).toString()
                            $( '.icalendar-rangslider-val-h' ).html( ui.value );
                        }
                    }
                },
                {
                    targetClass: 'icalendar-rangslider-m',
                    showClass: 'icalendar-rangslider-val-m',
                    title: '分：',
                    options: {
                        range: 'min',
                        min: 0,
                        max: 59,
                        step: 1,
                        slide: function( event, ui ) {
                            if( ui.value<10 ) ui.value = ('0'+ui.value).toString()
                            $( '.icalendar-rangslider-val-m' ).html( ui.value );
                        }
                    }
                },
                {
                    targetClass: 'icalendar-rangslider-s',
                    showClass: 'icalendar-rangslider-val-s',
                    title: '秒：',
                    options: {
                        range: 'min',
                        min: 0,
                        max: 59,
                        step: 1,
                        slide: function( event, ui ) {
                            if( ui.value<10 ) ui.value = ('0'+ui.value).toString()
                            $( '.icalendar-rangslider-val-s' ).html( ui.value );
                        }
                    }
                }
            ]
		};
		this._init(el, options);
	};

	$.fn.iCalendar = function(options) {
		var s = new iCalendar(this, options);
	};

    var elArr = []

	$(document).on('click',function(t) {
		// console.log( 0 )
		t = t || window.event;
		var target = t.target || t.srcElement;

    	for (var i = 0; i < elArr.length; i++) {
    		var a = elArr[i]
    		if( target != a['_el'][0] && a['_target'] ){
	    		a['_target'].remove()
	    		a['_showflag'] = false
	    	}
    	};
    })


	iCalendar.prototype = {
		
		_init: function(el, options){
            // console.log( this )
			$.extend(true, this.options, options);

            var that = this;
            that._el = el;

            if( !that.options.placeholder ){
                if(this.options.type==='date'){
                    that.options.placeholder = TODAY.format('yyyy-mm-dd')
                }
                else if(this.options.type==='time'){
                    that.options.placeholder = TODAY.format('00:00:00')
                }
                else if(this.options.type==='datetime'){
                    that.options.placeholder = TODAY.format('yyyy-mm-dd 00:00:00')
                }
            }

            that._placeholder();

            that._showflag = false

            elArr.push(that)

            el.bind(that.options.targetTrigger,function(e){
            	// console.log( 1 )
            	if( that._showflag ) return 
            	that._showflag = true

	            var id = 'icalendar-'+new Date().getTime()+(Math.random()*1e10).toFixed(0);

	            $(that.options.container).append('<div style="display:none" class="calendar icalendar" id="'+id+'"></div>');
	            that._target = $('#'+id);

	            if(typeof that.options.event.init==='function') {
	                that.options.event.init();
	            }

	            that._handle();
                    
                var a = $(document).width()
                var w = el[0].offsetWidth;
                var l = el.offset().left;
                var r = a - w - l;
                var t = el.offset().top+el[0].offsetHeight+2;

                if( that.options.position === 'fixed' ){
                    t = el[0].offsetHeight+2+that.options.fixedTop
                }

                var tarw = that._target.width()+parseInt(that._target.css('padding-left'))+parseInt(that._target.css('padding-right'))+parseInt(that._target.css('border-left-width'))*2;

                if( a-l<=tarw ){
                    l = 'auto'
                }else{
                    r = 'auto'
                }

                that._target.css({
                    'position': that.options.position,
                    'z-index': that.options.zindex,
                    'left': l,
                    'right': r,
                    'top': t,
                    'display': 'block'
                })

                that._week();
                that._tmpl();

                that._target.show()

                that._target.on('click',function(e){
					return false
				})

                return false
            })

		},

        _tmpl: function(){
            var that = this

            if(that.options.type==='date'){
                that._starttime = that.options.placeholder

                that._dateInit()

                that._target.html( that._dateTmplData() )
                that._dateTmpl()
            }
            else if(that.options.type==='time'){
                that._hourTime = that.options.placeholder.split(':')

                that._target.html( that._timeTmplData() )
                that._timeTmpl()
            }
            else if(that.options.type==='datetime'){
                that._starttime = that.options.placeholder.split(' ')[0]
                // console.log(that.options.placeholder);
                that._hourTime = that.options.placeholder.split(' ')[1].split(':')

                that._dateInit()

                that._target.html( that._dateTmplData() + that._timeTmplData() )
                that._dateTmpl()
                that._timeTmpl()
            }
        },

        _dateInit: function(){
            var that = this

            if(typeof that._starttime == 'string'){
                var arr = that._starttime.split('-');
                that._starttime = new Date(arr[0], arr[1]-1, arr[2]) || false;
            }

            that._months = [that._starttime._addMonths(-1), that._starttime, that._starttime._addMonths(1)];
            that._prevStarttime = that._starttime._addMonths(-2);
            that._nextStarttime = that._starttime._addMonths(2);

            that._todayFormat = TODAY.format('yyyy-mm-dd');
            that._selectDate = that._starttime.format('yyyy-mm-dd');
        },

        _dateTmplData: function(){
            var that = this

            var items = '';
            for (var i = 0; i < that._months.length; i++) {
                items += that._single(that._months[i])
            };

            return '<div class="calendar-wrap"><div class="calendar-inner">'+items+'</div></div><button data-type="prev" title="'+that.options.showText.prev+'" class="calendar-prev">&lt;</button><button data-type="next" title="'+that.options.showText.next+'" class="calendar-next">&gt;</button>';
        },

        _dateTmpl: function(){
            var that = this

            that._cInner = that._target.find('.calendar-inner:first');
            that._itemWidth = that._target.find('.calendar-item:first').width()+5;
            that._itemHeight = that._target.find('.calendar-item:first').height();

            that._cInner.css({
                'position': 'relative','overflow': 'visible','height': '210px','left': that._itemWidth*(-1)
            })

            that._target.find('.calendar-item').each(function(e){
                $(this).css({
                    'position': 'absolute','top': '0','left': that._itemWidth*e
                })
            })
        },

        _timeTmplData: function(){
            var that = this
            var picker = that.options.timePicker
            var targets = '', ids = '';

            for (var i = 0; i < picker.length; i++) {
                targets += ':<span class="'+picker[i].showClass+'"></span>'
                ids += '<li><span>'+picker[i].title+'</span><div class="'+picker[i].targetClass+'"></div></li>'
            }

            return '<div class="rangslider"><div class="rangslider-show"><span class="label label-info calendar-showtime">'+targets.substr(1)+'</span></div><ul class="unstyled rangslider-handle">'+ids+'</ul></div><div class="calendar-ctrl"><button data-type="submit" class="btn btn-primary btn-block">确定</button></div>';
        },

        _timeTmpl: function(){
            var that = this
            var picker = that.options.timePicker

            for (var i = 0; i < picker.length; i++) {
                picker[i].options['value'] = that._hourOffset(that._hourTime[i])
                that._target.find('.'+picker[i].targetClass).slider(picker[i].options);
                that._target.find('.'+picker[i].showClass).html( that._hourOffset(that._hourTime[i]) );
            }
        },

        _hourOffset: function(time){
            if( time.length===1 ){
                time = '0'+time
            }
            return time.toString()
        },

        _submit: function(){
            var that = this
            var picker = that.options.timePicker
            var values = '';

            for( var i in picker ){
                if( typeof picker[i] != 'function' ){
                    values += ':'+that._target.find('.'+picker[i].showClass).html()
                }
            }

            // console.log(values);
            that._selectTime = values.substr(1)

            if(that.options.type==='date'){
                that.options.placeholder = that._selectDate
            }
            else if(that.options.type==='time'){
                that.options.placeholder = that._selectTime;
            }
            else if(that.options.type==='datetime'){
                that.options.placeholder = that._selectDate + ' ' + that._selectTime;
            }

            // console.log( that.options.placeholder );

            that._placeholder()
            that._destroy()

            if(typeof that.options.event.refer==='function') {
                return that.options.event.refer({
                    placeholder: that.options.placeholder
                });
            }
            
        },

        _destroy: function(){
            this._target.remove();
            this._showflag = false
        },

        _week: function(){
            var weeks = '';
            for (var i = 0; i < this.options.showText.week.length; i++) {
                weeks += '<li>'+this.options.showText.week[i]+'</li>';
            }
            this._weektext = '<ul class="calendar-weeks">'+weeks+'</ul>'
        },

		_single: function(time, style){
            var that = this;
            var dayObj = C.get(time);
			var dates = '';
			for(var i in dayObj){
				if( dayObj[i]['k'] ){
                    var date = dayObj[i]['k'];
                    var text = dayObj[i]['d'];
                    var clas = '';
                    if( that._todayFormat===date ){
                        text = that.options.showText.today
                        clas += that.options.dateClass.today+' '
                    }
                    if( that._selectDate===date ){
                        clas += that.options.dateClass.start
                    }
					dates += '<li class="'+clas+'" data-type="date" data-date="'+date+'">'+text+'</li>';
				}else{
					dates += '<li class="'+that.options.dateClass.blank+'"></li>';
				}
			}
			return '<div class="calendar-item" style="'+style+'"><h5>'+time.format(that.options.showText.title)+'</h5>'+that._weektext+'<ul class="calendar-days">'+dates+'</ul></div>';
		},

		_handle: function(){
			var that = this;
			that._target.bind('click',function(e){
                if( that.options.autoClose ){
                    e.stopPropagation();
                }

				e = e || window.event;
				var target = e.target || e.srcElement;
				var type = $(target).attr('data-type');
				if( type==='prev' ){
					that._prev();
				}
                else if( type==='next' ){
                    that._next();
                }
                else if( type==='date' ){
                    that._date($(target));
                }
                else if( type==='submit' ){
                    that._submit();
                }
			})
		},

        

        _date: function(el){
            // console.log(el);
            var that = this;
            that._selectDate = el.attr('data-date');
            that._cInner.find('li').removeClass(that.options.dateClass.start);
            el.addClass(that.options.dateClass.start);

            if( that.options.type==='date' ){
                that.options.placeholder = that._selectDate
                that._placeholder()
            }
            
            if( that.options.dateSelectClose ){
                if( that.options.type!='datetime' ){
                    that._destroy()
                }
            }

            if( that.options.type==='date' && typeof that.options.event.date==='function' ){
                that.options.event.date({
                    element: el,
                    select: that._selectDate,
                    today: that._todayFormat
                });
            }
        },

        _placeholder: function(){
            var that = this;
            var data = that.options.placeholder;
            // console.log(data);
            that._el.attr('data-placeholder', data );
            if( 'value' in that._el[0] ){
                that._el.val( data );
            }else{
                 that._el.html( data );
            }
        },

        _prevFlag: false,
		_prev: function(){
            var that = this;

            if( that._prevFlag ) return;
            that._prevFlag = true;

            // console.log('prev');

			that._cInner.animate({
                'left': that._itemWidth + parseInt(that._cInner.css('left'))
            },that.options.slideSpeed)
            that._cInner.find('.calendar-item:last').remove();

            var leftpx = parseInt(that._target.find('.calendar-item:first').css('left')) + that._itemWidth*(-1)

            that._cInner.prepend( that._single(that._prevStarttime, 'position: absolute; top: 0px; left: '+leftpx+'px;') );

            that._prevStarttime = that._prevStarttime._addMonths(-1);
            that._nextStarttime = that._nextStarttime._addMonths(-1);

            if( typeof that.options.event.prev==='function' ){
                that.options.event.prev({
                    prevMonthTime: that._prevStarttime,
                    nextMonthTime: that._nextStarttime
                });
            }

            setTimeout(function(){
                that._prevFlag = false;
            },360)
		},

        _nextFlag: false,
        _next: function(){
            var that = this;

            if( that._nextFlag ) return;
            that._nextFlag = true;

            // console.log('next');

            this._cInner.animate({
                'left': this._itemWidth*(-1) + parseInt(this._cInner.css('left'))
            },this.options.slideSpeed)

            this._cInner.find('.calendar-item:first').remove();

            var leftpx = parseInt(this._target.find('.calendar-item:last').css('left')) + this._itemWidth

            this._cInner.append( this._single(this._nextStarttime, 'position: absolute; top: 0px; left: '+leftpx+'px;') );

            this._prevStarttime = this._prevStarttime._addMonths(1);
            this._nextStarttime = this._nextStarttime._addMonths(1);

            if( typeof that.options.event.next==='function' ){
                that.options.event.next({
                    prevMonthTime: that._prevStarttime,
                    nextMonthTime: that._nextStarttime
                });
            }

            setTimeout(function(){
                that._nextFlag = false;
            },360)
        }

	}

})(jQuery);