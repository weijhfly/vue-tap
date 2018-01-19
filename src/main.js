var Vue = require('./vue.js');
var VueTap = require('../vue-tap.js');
Vue.use(VueTap);

new Vue({
		el:'#app',
		data:{
			list:['a','b','c','e','f']
		},
		methods:{
			tap:function(i,k){
				console.log(i,k);
			},
			test:function(i){
				console.log(i);
			}
		}
	})
if(window.innerWidth < 768){
	document.getElementsByTagName('body')[0].style.padding = 0;
}