<script setup>
	import { ref } from 'vue';
	const creator = ref('Beginner Center');
	const year = ref(2025);
  const href = ref('https://forum.beginner.center/')
</script>

<template>
  <footer>
    <!-- 
    通过v-bind来实现超链接功能 
    mustache{{  }} 语法只会渲染为文本内容，不能改变html属性值
    v-bind:属性名="变量名"
    
    -->
      Created by <a :href><span>{{ creator }}</span></a> &copy; {{ year }}
      <!-- Created by <a :href="href"><span>{{ creator }}</span></a> &copy; {{ year }} -->
      <!-- Created by <a v-bind:href="href"><span>{{ creator }}</span></a> &copy; {{ year }} -->
      <!-- Created by <a href="{{href}}"><span>{{ creator }}</span></a> &copy; {{ year }} -->

  </footer>
</template>

<style scoped>
  footer {
    position:fixed;
    margin: 0 auto;
    bottom:0;
    text-align:center;
    color:#CCD6D9;
    padding-bottom:20px;
  }

  span{
      font-family: cursive;
  }
  a{
      color:#64FFDA;
      /* text-decoration:none; */
  }
</style>