/*!
 * vue-tap.js v1.2.4
 * By 雾空 https://github.com/weijhfly/vue-tap
 * Date:2018/1/18
*/
;(function (factory) {
	if (typeof exports == "object") {
		module.exports = factory;
	}else{
		if(Vue){
			Vue.use(factory)
		}else{
			window.vueTap = factory;
		}
	}
}({
   master:{
		bind: function (el, binding) {
			var isTouch = "ontouchend" in document;
			
			el.execFun = function (binding) {
				return function(e){
					var data = binding.value;
					
					if(!data){
						if(el.href && !binding.modifiers.prevent){
							return window.location = el.href;
							
						}else if(el.tagName == 'INPUT' || el.tagName == 'TEXTAREA'){
							return el.focus();
						}else{
							return;
						}
					}
					var	getEl = data.indexOf('$el'),
						getEvent = data.indexOf('$event');

					getEl != -1 && (data[getEl] = el);
					getEvent != -1 && (data[getEvent] = e);
					
					data[0].apply(this, data.slice(1));
				}
			};
			el.exec = el.execFun(binding);
			el.tapInfo = {};
			
			if (isTouch) {
				//touchstart
				el.addEventListener('touchstart', function (e) {
					var t = e.touches[0];
					
					el.tapInfo.startX = t.pageX;
					el.tapInfo.startY = t.pageY;
					el.tapInfo.sTime = + new Date;
					binding.modifiers.stop && (e.stopPropagation());
					binding.modifiers.prevent && (e.preventDefault());
				});
				//touchend
				el.addEventListener('touchend', function (e) {
					var t = e.changedTouches[0];
					
					el.tapInfo.endX = t.pageX;
					el.tapInfo.endY = t.pageY;
					if((+ new Date) - el.tapInfo.sTime<300){
						if(Math.abs(el.tapInfo.endX - el.tapInfo.startX) + Math.abs(el.tapInfo.endY - el.tapInfo.startY)<20){
							binding.modifiers.stop && (e.stopPropagation());
							e.preventDefault();
							el.exec(e);
						}
					}
				});
			}else {
				//click
				el.addEventListener('click', function (e) {
				  binding.modifiers.stop && (e.stopPropagation());
				  binding.modifiers.prevent && (e.preventDefault());
				  el.exec(e);
				});

			}
		},
		componentUpdated : function(el,binding) {
			el.exec = el.execFun(binding);
		},
		unbind: function (el) {
			el.execFun = el.exec = el.tapInfo = null;
		}
   },
   install:function(Vue){
	   Vue.directive('tap', this.master);
   }
}))
