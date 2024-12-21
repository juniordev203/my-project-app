<template>
  <div :style="{
    paddingBottom: safeArea.bottom + 'px',
    paddingLeft: safeArea.left + 'px',
    paddingRight: safeArea.right + 'px',
  }">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
const safeArea = ref(defaultSafeAreaInsets());

onMounted(asynv () => {
    safeArea.value = await getSafeAreaInsets();
})
</script>

<style>

</style>