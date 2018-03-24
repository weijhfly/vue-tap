# vue-tap [![npm](https://img.shields.io/npm/v/vue-js-tap.svg)](https://www.npmjs.com/package/vue-js-tap)
> a tap plugin of vue
# Install
```js
$ npm install --save vue-js-tap
```
# Usage
```js
import vueTap from 'vue-js-tap';
Vue.use(vueTap);

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
