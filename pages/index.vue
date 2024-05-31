<script lang="ts" setup>
useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content:
        '欢迎来到我的博客。希望我们能在这里共同进步。',
    },
  ],
  titleTemplate: 'Nebula\'s Blog - %s',
})

// Generate OG Image
defineOgImageComponent('About', {
  headline: 'Greetings 👋',
  title: 'GaoJunRan\'s Blog',
  description: '永远相信美好的事情即将发生。',
  link: '/riyad.jpg',
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <MainHero />
    <div class="mb-10"/>
    <MainRecent />
<!--    <MainTrending />-->
  </main>
</template>
