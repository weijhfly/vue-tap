/*!
 * vue-tap.js
 * by weijianhua  https://github.com/weijhfly/tap
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
			el.exec = function (e) {
				var data = binding.value;
				data[0].apply(this, data.slice(1));
			};
			if (isTouch) {
				//touchstart
				el.addEventListener('touchstart', function (e) {
					binding.modifiers.stop && (e.stopPropagation());
					var t = e.touches[0];
					el.startX = t.clientX;
					el.startY = t.clientY;
					el.sTime = + new Date;
				});
				//touchend
				el.addEventListener('touchend', function (e) {
					binding.modifiers.stop && (e.stopPropagation());
					var t = e.changedTouches[0];
					el.endX = t.clientX;
					el.endY = t.clientY;
					if((+ new Date)-el.sTime<300){
						if(Math.abs(el.endX-el.startX)+Math.abs(el.endY-el.startY)<20){
							e.preventDefault();
							el.exec();
						}
					}
				});
			}else {
				//click
				el.addEventListener('click', function (e) {
				  binding.modifiers.stop && (e.stopPropagation());
				  el.exec();
				});

			}
		},
		componentUpdated : function(el,binding) {
			el.exec = function () {
				var data = binding.value;
				data[0].apply(this, data.slice(1));
			};
		},
		unbind: function (el) {
			el.exec = null;
		}
   },
   install:function(){
	   Vue.directive('tap', this.master);
   }
}))
