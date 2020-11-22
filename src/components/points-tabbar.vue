<template>
<div>
  {{active}}
    <ul>

      <router-link tag="li" to="/home">111</router-link>
      <router-link tag="li" to="/mine">222</router-link>
      <router-link tag="li" to="/ref">reftest</router-link>
    </ul>
</div>
</template>

<script>
import { onMounted, toRefs, reactive } from "vue";
export default {
  name:'points-tabbar',
  setup() {
    const state = reactive({
     active: 0,
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      }
    })
    const handleCheckTab = (index) => {
      console.log(this.active)

      // onChange(index) {
      Notify({ type: 'primary', message: index });
    // }
    }
    
    return{
      ...toRefs(state),
      handleCheckTab
    }
  },
};
</script>

<style scoped>
</style>