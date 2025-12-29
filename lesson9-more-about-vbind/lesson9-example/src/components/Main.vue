<script setup>
	import { ref } from 'vue'
	const quote = ref('First, solve the problem. Then, write the code.')
	const author = ref('doggie')
    const href = ref('https://forum.beginner.center/u/doggie/')
    // 设置按钮禁用状态的变量
    const disabled = ref(true)
</script>

<template>
  <main>
      <section>
          <p>{{ quote }}</p>
        <!-- v-bind如果传递的值和它的名称相同，还可以简化成直接使用这个值 -->
          <!-- <a target="_blank" :href><span>{{ author }}</span></a> -->
      </section>
      <section id = 'buttons'>
        <!-- 给按钮绑定禁用状态 -->
        <!-- <button >Share Me!</button> -->

        <!-- <button v-bind:disabled="isButtonDisabled">Share Me!</button> -->
    

        <!-- 
        v-bind:disabled="isButtonDisabled"
        可以简写成
        :disabled="isButtonDisabled"
         -->
        <button :disabled>Share Me!</button>

        <!-- <button :disabled="isButtonDisabled">Share Me!</button> -->



        <button>Another!</button>
      </section>
  </main>
</template>

<style scoped>
  main {
    background: #CCD6D9;
    max-width:90%;
    border-radius:0 15px 0 15px;
    padding:35px;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:10px;
  }

  section {
      display: flex;
      width:100%;
      flex-direction:column;
      gap:10px;
      margin-bottom:25px;
  }

  p {
      font-weight:bold;
      font-style: italic;
      font-size:2rem;
      text-align:left;
  }

  p::before {
      content: '"'
  }

  p::after {
      content: '"'
  }

  span {
      align-self:end;
      color: #406473;
  }

  span::before {
      content: "- "
  }

  button {
      background:#406473;
      color: white;
      padding:10px;
      border: 0;
      font-size:1.2rem;
      border-radius:0 5px 0 5px;
      font-weight:bold;
      margin-top:20px;
      cursor:pointer;
      transition: transform 0.2s;
  }
  button:hover{
      transform: scale(1.05);
  }
  /* 设置禁用状态的按钮样式 */
  button:disabled {
      background: grey;
      cursor: not-allowed;
      opacity: 0.5;
  }
</style>