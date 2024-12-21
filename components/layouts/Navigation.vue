<template>
  <div class="shadow-md border-t-[1px]" :style="{
      paddingBottom: safeArea.bottom + 'px',
      paddingLeft: safeArea.left + 'px',
      paddingRight: safeArea.right + 'px',
    }">
    <div class="grid grid-cols-5 p-2">
      <router-link :to="{ name: 'home' }" class="flex flex-col justify-center gap-2 items-center"
        :class="{ 'menu-active': route.name?.toString().startsWith('home') || !route.name }">
        <svg class="w-[30px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#D9D9D9" fill-rule="evenodd" clip-rule="evenodd" d="M15.1581 16.885H9.34306C8.92906 16.885 8.59306 16.549 8.59306 16.135C8.59306 15.721 8.92906 15.385 9.34306 15.385H15.1581C15.5721 15.385 15.9081 15.721 15.9081 16.135C15.9081 16.549 15.5721 16.885 15.1581 16.885ZM19.4991 6.158C19.1361 5.838 18.7231 5.476 18.2311 5.021C18.0081 4.841 17.7641 4.635 17.5051 4.417C16.0451 3.186 14.0451 1.5 12.2221 1.5C10.4201 1.5 8.54906 3.092 7.04606 4.371C6.76806 4.607 6.50806 4.829 6.24306 5.044C5.77706 5.476 5.36406 5.839 5.00006 6.16C2.61306 8.261 2.16406 8.812 2.16406 13.713C2.16406 22.5 4.70506 22.5 12.2501 22.5C19.7941 22.5 22.3361 22.5 22.3361 13.713C22.3361 8.811 21.8871 8.26 19.4991 6.158Z"></path>
        </svg>
        <span class="text-sm text-[#d9d9d9]">{{ $t('lang_core_trang_chu') }}</span>
      </router-link>
      <router-link :to="{ name: 'testing' }" class="flex flex-col justify-center gap-2 items-center"
        :class="{ 'menu-active': route.name?.toString().startsWith('testing') }">
        <svg class="w-[30px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#D9D9D9" fill-rule="evenodd" clip-rule="evenodd" d="M16.284 14.401C16.144 14.636 15.895 14.767 15.639 14.767C15.509 14.767 15.376 14.733 15.256 14.662L11.865 12.639C11.638 12.504 11.499 12.258 11.499 11.995V7.633C11.499 7.219 11.835 6.883 12.249 6.883C12.663 6.883 12.999 7.219 12.999 7.633V11.569L16.024 13.373C16.38 13.586 16.496 14.046 16.284 14.401ZM12.25 2.25C5.051 2.25 2.5 4.801 2.5 12C2.5 19.198 5.051 21.75 12.25 21.75C19.449 21.75 22 19.198 22 12C22 4.801 19.449 2.25 12.25 2.25Z"></path>
        </svg>
        <span class="text-sm text-[#d9d9d9]">{{ $t('lang_core_thi_thu') }}</span>
      </router-link>
      <router-link :to="{ name: 'learning' }" class="flex flex-col justify-center gap-2 items-center"
        :class="{ 'menu-active': route.name?.toString().startsWith('learning') }">
        <svg class="w-[30px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#D9D9D9" fill-rule="evenodd" clip-rule="evenodd" d="M12.26 13.573C10.681 13.573 9.397 12.289 9.397 10.71C9.397 9.131 10.681 7.847 12.26 7.847C13.839 7.847 15.124 9.131 15.124 10.71C15.124 12.289 13.839 13.573 12.26 13.573ZM12.25 2.5C7.839 2.5 4.25 6.133 4.25 10.599C4.25 16.007 8.904 21.5 12.25 21.5C15.595 21.5 20.25 16.007 20.25 10.599C20.25 6.133 16.661 2.5 12.25 2.5Z"></path>
        </svg>
        <span class="text-sm text-[#d9d9d9]">{{ $t('lang_core_lo_trinh') }}</span>
      </router-link>
      <router-link :to="{ name: 'upgrade' }" class="flex flex-col justify-center gap-2 items-center"
        :class="{ 'menu-active': route.name?.toString().startsWith('upgrade') }">
        <svg class="w-[30px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#D9D9D9" fill-rule="evenodd" clip-rule="evenodd" d="M18.01 13.852C18.01 14.266 17.674 14.602 17.26 14.602C16.846 14.602 16.51 14.266 16.51 13.852V12.75H15.182V13.852C15.182 14.266 14.846 14.602 14.432 14.602C14.018 14.602 13.682 14.266 13.682 13.852V12.75H11.566C11.242 13.818 10.259 14.602 9.087 14.602C7.653 14.602 6.486 13.435 6.486 12C6.486 10.566 7.653 9.399 9.087 9.399C10.261 9.4 11.242 10.184 11.566 11.25H17.26C17.674 11.25 18.01 11.586 18.01 12V13.852ZM12.25 2.25C5.052 2.25 2.5 4.802 2.5 12C2.5 19.199 5.052 21.75 12.25 21.75C19.448 21.75 22 19.199 22 12C22 4.802 19.448 2.25 12.25 2.25Z"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.08911 10.8988C8.48011 10.8988 7.98511 11.3928 7.98511 12.0008C7.98511 12.6078 8.48011 13.1018 9.08711 13.1018C9.69511 13.1018 10.1901 12.6078 10.1901 12.0008C10.1901 11.3938 9.69611 10.8998 9.08911 10.8988Z" fill="#e0e0e0"></path>
        </svg>
        <span class="text-sm text-[#d9d9d9]">{{ $t('lang_core_nang_cap') }}</span>
      </router-link>
      <router-link :to="{ name: 'user' }" class="flex flex-col justify-center gap-2 items-center"
        :class="{ 'menu-active': route.name?.toString().startsWith('user') }">
        <svg class="w-[30px]" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Iconly/Bold/Profile" stroke="none" stroke-width="1.5" fill="none" fill-rule="evenodd">
                <g transform="translate(4.000000, 2.000000)" fill="#D9D9D9" fill-rule="nonzero">
                    <path d="M8,13.1739317 C12.338627,13.1739317 16,13.8789388 16,16.598966 C16,19.3199932 12.314618,20 8,20 C3.66237339,20 5.68434189e-14,19.2949929 5.68434189e-14,16.5749657 C5.68434189e-14,13.8539385 3.68538202,13.1739317 8,13.1739317 Z M8,-6.03961325e-14 C10.9391022,-6.03961325e-14 13.2939852,2.35402354 13.2939852,5.29105291 C13.2939852,8.22808228 10.9391022,10.5831058 8,10.5831058 C5.06189821,10.5831058 2.70601476,8.22808228 2.70601476,5.29105291 C2.70601476,2.35402354 5.06189821,-6.03961325e-14 8,-6.03961325e-14 Z"></path>
                </g>
            </g>
        </svg>
        <span class="text-sm text-[#d9d9d9]">{{ $t('lang_core_ca_nhan') }}</span>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const safeArea = ref(defaultSafeAreaInsets());

onMounted(async () => {
  safeArea.value = await getSafeAreaInsets();
});
</script>

<style scoped>
.menu-active, .menu-active .text-sm {
  color: var(--primary) !important;
}

.menu-active svg * {
  fill: var(--primary) !important;
}
</style>