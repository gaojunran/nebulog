<script setup lang="ts">
const links = [
  {name: "Github", link: "https://github.com/gaojunran", icon: "fa:github", pic: ""},
  {name: "Bilibili", link: "https://space.bilibili.com/456066643", icon: "ri:bilibili-fill", pic: ""},
  {name: "WeChat", link: "", icon: "ic:baseline-wechat", pic: "my/wechat.png"},
  {name: "QQ", link: "", icon: "mdi:qqchat", pic: "my/qqchat.jpg"},
]

const isOpen = ref(false)
const nowPic = ref("");
const toggle = (picSrc: string) => {
  isOpen.value = true;
  nowPic.value = picSrc;
}
</script>

<template>
  <div class="my-3 space-x-3 pb-3">
    <div v-for="link in links" :key="link.name" class="inline">
      <NuxtLink
        :to="link.link"
        target="_blank"
        class="p-2 bg-gray-300 text-gray-800 rounded-md dark:bg-sky-700 dark:text-[#F1F2F4]"
        :aria-label="link.name"
        @click="link.pic !== '' && toggle(link.pic)"
      >
        <Icon :name="link.icon" size="1em"/>
      </NuxtLink>
    </div>
  </div>
  <UModal v-model="isOpen">
    <div class="p-4">
      <img :src="nowPic" class="w-full"  alt=""/>
    </div>
  </UModal>
</template>

<style scoped>

</style>

