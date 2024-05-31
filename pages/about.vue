<script setup lang="ts">
defineOgImageComponent('About', {
  headline: 'Greetings 👋',
  title: 'Nebula',
  description: 'Nebula\'s Blog',
})
</script>

<template>
  <div class="py-5">
    <div class="sm:grid grid-cols-8 px-6 py-5 sm:py-9 gap-5 container max-w-5xl  mx-auto">
      <div class="col-span-5  max-w-md">
        <div class="flex justify-between">
          <div>
            <h1 class="text-3xl md:text-4xl  pb-4 font-bold ">
              高浚然
            </h1>
            <Icons></Icons>
          </div>
          <div class="sm:hidden block col-span-3 pb-5 dark:text-[#F1F2F4]">
            <NuxtImg
              src="/template.png"
              width="125"
              height="115"
              quality="50"
              class="rounded-md"
            />
          </div>
        </div>
        <h3 class="md:text-3xl text-2xl font-semibold md:pb-7 pt-12 pb-12">
           在读学生 / 开发者
        </h3>
        <div class="flex flex-col gap-2">
          <p>重庆邮电大学 软件工程专业在读的 大一学生。</p>
          <p>正在学习和使用Python、Java/Kotlin、JavaScript/TypeScript；</p>
          <p>熟悉全栈Web开发、多平台开发和数据分析。</p>
          <p></p>
        </div>
      </div>
      <div class="hidden sm:block col-span-3">
        <NuxtImg
          src="/template.png"
          width="300"
          height="300"
          quality="50"
          class="rounded-md"
        />
      </div>
    </div>
  </div>
</template>
