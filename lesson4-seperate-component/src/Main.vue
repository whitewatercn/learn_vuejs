<script setup>
	import {ref} from 'vue'
	const name = ref('doctor')
</script>

<template>
  <main>
    <h1>hello, {{ name }}</h1>
    <p>let's learn vuejs</p>
  </main> 
</template>

<style>
  main h1{
    display:block;
  }

  main p{
    /* color:beige; */
  }
</style>