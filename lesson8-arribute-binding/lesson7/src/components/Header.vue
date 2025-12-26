<script setup>
	import { ref } from 'vue';
	const title = ref('Quote generator');
// 你可以直接改变title的值，新的变量会覆盖旧的变量，vuejs会自动解析最新的ref.value
	// title.value = "hello world";
</script>

<template>
  <header>
      <h1>{{ title }}</h1>
  </header>
</template>

<style scoped>
  header {
      color:#CCD6D9;
      margin-bottom:25px;
  }
</style>
