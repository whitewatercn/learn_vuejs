<!-- 通过这个app.vue，我们通过Vue component实现了lesson2里的html -->

<!-- script放置函数 -->
<script setup>
  import Main from './Main.vue'
  import Header from './Header.vue'
  import Footer from './Footer.vue'
</script>


<template>
  <!-- 改为使用从Header.vue导入的Header组件 -->
  <Header/>
  <Main/>
  <Footer/>
</template>

<!-- style用来设置样式 -->
<style scoped>
</style>

<!-- 
任务
1.把main和footer也拆分成单独的组件，并在App.vue中导入使用
2.安装vueinit插件 https://forum.beginner.center/t/topic/2546
-->