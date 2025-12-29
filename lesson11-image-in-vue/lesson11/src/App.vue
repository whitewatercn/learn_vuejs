<script setup>
  import logo from '@/assets/logo.svg';
</script>

<template>
  <section>
    <img src = '/favicon.ico' alt="Vue logo"/>
    <img src = '/logo.svg' alt="Vue logo"/>
  </section>

  <section>
    <img src = '@/assets/logo.svg' alt="Vue logo"/>
  </section>
  
  <section>
    <img v-bind:src="logo" alt = "Vue logo"/>
  </section>
</template>

<style scoped>
  section {
    display:grid;
    grid-template-columns:1fr 1fr;
    padding:10px;
    background:white;
    border-radius:10px;
  }
  img{
    width:100%;
  }
</style>
