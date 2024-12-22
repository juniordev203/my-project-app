import { defineStore } from 'pinia';

export const useMyBaseStore = defineStore('myBaseStore', {
  state: () => ({
    appReady: false,
    loadingApp: true,
  }),
  actions: {
    setAppReady() {
      this.appReady = true;
    },
    setLoadingApp(loading: boolean) {
      this.loadingApp = loading;
    },
  },
});
