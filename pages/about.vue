<script setup lang="ts">
defineOgImageComponent('About', {
  headline: 'Greetings 👋',
  title: 'Riyad\'s Blog',
  description: 'Dive into web development with me and learn Js, Ts, Vue, Nuxt, Docker, k8s',
  link: '/riyad.jpg',
})
</script>

<template>
  <div class="py-5">
    <div class="sm:grid grid-cols-8 px-6 py-5 sm:py-9 gap-5 container max-w-5xl  mx-auto">
      <div class="col-span-5  max-w-md">
        <div class="flex justify-between">
          <div>
            <h1 class="text-3xl md:text-4xl  pb-2 font-bold ">
              高浚然
            </h1>

            <div class="my-3 space-x-2 md:space-x-3 pb-10">
              <NuxtLink
                to="https://github.com/nurRiyad"
                target="_blank"
                class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="Github"
              >
                <Icon name="fa:github" size="1em"/>
              </NuxtLink>
              <NuxtLink
                to="https://www.linkedin.com/in/nur-riyad/"
                target="_blank"
                class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="LinkedIn"
              >
                <Icon name="fa:linkedin-square" size="1em"/>
              </NuxtLink>
              <NuxtLink
                to="https://twitter.com/qdnvubp"
                target="_blank"
                class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="Twitter"
              >
                <Icon name="fa:twitter-square" size="1em"/>
              </NuxtLink>
              <NuxtLink
                to="https://stackoverflow.com/users/16781395/nur-riyad"
                target="_blank"
                class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="StackOverflow"
              >
                <Icon name="fa:stack-overflow" size="1em"/>
              </NuxtLink>
            </div>
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
        <h3 class="md:text-3xl text-2xl font-semibold md:pb-7 pb-12">
           在读学生 / 全栈开发者
        </h3>
        <div class="flex flex-col gap-2">
          <p>重庆邮电大学 软件工程专业在读的 大一学生。</p>
          <p>精通Python；</p>
          <p>熟悉Java/Kotlin、JavaScript/TypeScript、Vue；</p>
          <p>了解C++、C#、React。</p>
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
