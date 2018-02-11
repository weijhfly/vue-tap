/*!
 * vue-tap.js v1.1.3
 *  By 雾空 https://github.com/weijhfly/vue-tap
 * Time:2018/1/18
*/
;(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(function(){return factory;});
	}else if (typeof exports == "object") {
		module.exports = factory;
	}else{
		Vue.use(factory);
	}
}({
   master:{
		bind: function (el, binding) {
			var isTouch = "ontouchend" in document;
			el.exec = function () {
				var data = binding.value;

				if(!data && el.href && !binding.modifiers.prevent){return window.location = el.href;}
				if(el.tagName == 'INPUT' || el.tagName == 'TEXTAREA'){
		          return el.focus();
		        }
				data[0].apply(this, data.slice(1));
			};
			if (isTouch) {
				//touchstart
				el.addEventListener('touchstart', function (e) {
					binding.modifiers.stop && (e.stopPropagation());
					binding.modifiers.prevent && (e.preventDefault());
					var t = e.touches[0];
					el.startX = t.pageX;
					el.startY = t.pageY;
					el.sTime = + new Date;
				});
				//touchend
				el.addEventListener('touchend', function (e) {
					e.preventDefault();
					binding.modifiers.stop && (e.stopPropagation());
					var t = e.changedTouches[0];
					el.endX = t.pageX;
					el.endY = t.pageY;
					if((+ new Date)-el.sTime<300){
						if(Math.abs(el.endX-el.startX)+Math.abs(el.endY-el.startY)<20){
							el.exec();
						}
					}
				});
			}else {
				//click
				el.addEventListener('click', function (e) {
				  binding.modifiers.stop && (e.stopPropagation());
				  binding.modifiers.prevent && (e.preventDefault());
				  el.exec();
				});

			}
		},
		componentUpdated : function(el,binding) {
			el.exec = function () {
				var data = binding.value;
				if(!data && el.href && !binding.modifiers.prevent){return window.location = el.href;}
				data[0].apply(this, data.slice(1));
			};
		},
		unbind: function (el) {
			el.exec = null;
		}
   },
   install:function(Vue){
	   Vue.directive('tap', this.master);
   }
}))
