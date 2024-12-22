export const defaultSafeAreaInsets = () => {
  return {top: 0, left: 0, right: 0, bottom: 0}
}

export const getSafeAreaInsets = async (): Promise<{top: number, left: number, right: number, bottom: number}> => {
  const { $CapSafeArea } = useNuxtApp();
  return await ($CapSafeArea as any).SafeArea.getSafeAreaInsets();
}