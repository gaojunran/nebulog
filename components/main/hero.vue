<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 items-center">
      <div class="px-5">
        <h1 class="text-black dark:text-zinc-300 font-semibold leading-tight text-3xl md:text-4xl my-5">
          欢迎来到我的个人博客
        </h1>
        <p class="dark:text-zinc-300  ">
          在这里，和我一起探讨前端、后端、爬虫、数据分析......
        </p>
        <p class="dark:text-zinc-300 pt-2 ">
          与代码相关的一切。
        </p>
      </div>
      <div class="px-6 justify-self-center">
        <NuxtImg
          src="/template.png"
          quality="50"
          class="rounded-md mt-10 sm:w-[200px] sm:h-[200px] w-[100px] h-[100px] sm:block hidden"
        />
      </div>
    </div>
  </div>
</template>
