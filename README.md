# vue-tap [![npm](https://img.shields.io/npm/v/vue-js-tap.svg)](https://www.npmjs.com/package/vue-js-tap) [![npm](https://img.shields.io/npm/dm/vue-js-tap.svg)](https://www.npmjs.com/package/vue-js-tap)
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
```
## Update
### 2018.1.22(Update)

> * 增加阻止默认动作v-tap.prevent
> * 其他一些小调整
### 2018.1.18(publish)

> * 发布至github及npm(vue-js-tap)
> * 包含方法调用，阻止冒泡功能
> * 只支持vue2.0+
