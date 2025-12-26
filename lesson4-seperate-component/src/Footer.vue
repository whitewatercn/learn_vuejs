<script setup>
	import {ref} from 'vue'
	const year = ref('2026')
</script>

<template>
  <footer>
    <p>&copy; {{ year }} beginner
    </p>
  </footer>
</template>

<style>
  footer p{
    font-size:0.8rem;
    color:red;
  }
</style>