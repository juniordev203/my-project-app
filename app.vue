<template>
  <div v-loading.fullscreen.lock="loadingApp" class="w-full overflow-hidden flex flex-col"
    :style="{ height: `calc(var(--vh, 1vh) * 100)` }">
    <!-- SPLASH -->
    <div v-if="!appReady" class="w-full h-full relative flex flex-col gap-4 justify-center items-center bg-gradient-to-b from-blue-700 to-violet-500">
      <img src="~/assets/images/logo.png" class="w-[150px]" alt="logo-circle">
      <p class="text-4xl font-semibold text-white">EasyLingua</p>
      <p class="text-xs text-white absolute bottom-4">@junior</p>
    </div>
    <NuxtLayout v-else>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useMyBaseStore } from './stores/myBaseStore';

const router = useRouter();
const { loadingApp, appReady } = storeToRefs(useMyBaseStore()); // Truy cập vào trạng thái appReady từ store

const updateVh = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

// LIFE CYCLE HOOK
onMounted(async () => {
  updateVh();

  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000); 
  });

  appReady.value = true;
});
</script>

<style scoped></style>
