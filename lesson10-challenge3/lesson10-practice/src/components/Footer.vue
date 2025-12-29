<script setup>
  import { ref } from 'vue';
  const href = ref('https://vuejs.org/');
  // 目标：
  // 将vuejs.org链接改成动态响应
  // 最好使用简化版本
</script>

<template>
  <footer>
      <p>Learn more about me at <a target="_blank" v-bind:href="href">vuejs.org</a></p>
  </footer>
</template>

<style scoped>
  footer {
    margin-top: 35px;
    font-size: 0.8rem;
  }
  a {
    color: #40b883;
  }
</style>