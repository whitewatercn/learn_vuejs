<!-- 通过这个app.vue，我们通过Vue component实现了lesson2里的html -->

<!-- script放置函数 -->
<script setup>
  import {ref} from 'vue'
  const name = ref('doctor')
  import Header from './Header.vue'
</script>


<template>
  <!-- 改为使用从Header.vue导入的Header组件 -->
  <Header/>

  <main>
    <h1>hello, {{ name }}</h1>
    <p>let's learn vuejs</p>
  </main>

  <footer>
    <p>&copy; 2025 beginner
    </p>
  </footer>
</template>

<!-- style用来设置样式 -->
<style scoped>
  main h1{
    display:block;
  }

  main p{
    /* color:beige; */
  }

  footer p{
    font-size:0.8rem;
    color:red;
  }
</style>
