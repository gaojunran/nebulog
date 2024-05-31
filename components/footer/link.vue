<script setup>
const links = [
  {name: "CQUPT", link: "https://www.cqupt.edu.cn/"},
  {name: ""}
]


</script>


<template>
  <div class="flex flex-col dark:text-zinc-300   my-5 md:my-0 md:pl-16">
    <p class="text-black dark:text-zinc-300  text-base font-semibold">
      友情链接
    </p>
    <div class="space-y-2 mt-2">
      <NuxtLink v-for="link in links" :key="link.name" :href="link.link" class="hover:underline">
        {{ link.name }}
      </NuxtLink>
    </div>
  </div>
</template>
