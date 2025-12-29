<script setup>
	import { ref } from 'vue';
	const title = ref('Quote generator');
// title是一个ref对象，这个ref有很多属性，比如值value
// 你可以直接改变title这个ref的值，新的变量会覆盖旧的变量，vuejs会自动解析最新的ref.value
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
