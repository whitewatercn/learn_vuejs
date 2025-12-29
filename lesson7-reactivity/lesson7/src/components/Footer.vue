<script setup>
	import { ref } from 'vue';
	const creator = ref('王白水');
	const year = ref(2025);
</script>

<template>
  <footer>
      <!-- Created by <span> 王白水 </span> &copy; {{ year }} -->

      Created by <span>{{ creator }}</span> &copy; {{ year }}
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
</style>