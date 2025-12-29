<script setup>
  import { ref } from 'vue';
  const dict = ref([
    {
      title: "Lightweight",
      description: "I am incredibly small and fast! My core library is only around 30KB, so I won't slow you down."
    },
    {
      title: "Approachable",
      description: "Easy to learn and use, even for beginners. I have a gentle learning curve, clear documentation, and a supportive community."
    },
    {
      title: "Versatile",
      description: "I can handle everything from simple interactive elements to complex single-page applications. I'm great for small projects and large-scale applications alike."
    }
  ]);
  // 目标
  // 把写死的main里面的内容改成动态响应，以数组形式完成
</script>

<template>
  <main>
      <section>
          <h2>
              I'm <span class="highlight">{{ dict[0].title }}</span>
          </h2>
          <p>
              {{ dict[0].description }}
          </p>
      </section>
      <section>
          <h2>
              I'm <span class="highlight">{{ dict[1].title }}</span>
          </h2>
          <p>
              {{ dict[1].description }}
          </p>
      </section>
      <section>
          <h2>
          I'm <span class="highlight">{{ dict[2].title }}</span>
          </h2>
          <p>
              {{ dict[2].description }}
          </p>
      </section>
  </main>
</template>

<style scoped>
  main {
    margin-top: 15px;
  }

  section {
    margin-top: 25px;
  }

  h2 {
    font-size: 1.3rem;
    color: #34495e;
    margin-bottom: 3px;
  }

  p {
    font-size: 0.9rem;
    color: #555;
  }
</style>