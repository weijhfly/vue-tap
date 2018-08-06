## vue-tap [![npm](https://img.shields.io/npm/v/vue-js-tap.svg)](https://www.npmjs.com/package/vue-js-tap)
> vue自定义指令v-tap，只支持vue2.0
## 使用方式
### es6
```js
import vueTap from 'vue-js-tap';
Vue.use(vueTap);
```
### require.js
```js
require(['vue','vue-tap'],function(Vue,vueTap){
  vue.use(vueTap);
})
```
### browser
```js
//浏览器中直接引入
//<script src="vue.js"></script>
//<script src="vue-tap.js"></script>
```
## 相关参数
```js
//调用方式：
v-tap="[tap，arg,arg2...]"

//获取参数:
methods:{
   tap:function(arg,arg2...){
      console.log(arg,arg2...);
    }
}

//阻止冒泡：
v-tap.stop

//阻止默认动作：
v-tap.prevent

//获取当前dom节点
v-tap="[tap，'$el']"

//获取当前事件
v-tap="[tap，'$event']"
```