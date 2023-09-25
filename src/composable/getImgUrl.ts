import { computed } from 'vue';
export default function useImageUrl(path: string) {
  const images = import.meta.glob('/src/assets/**/*.*');
  const imageUrl = computed(() => {
    const imageKeys = Object.keys(images);
    const imageKey = imageKeys.find((key) => key.includes(path));
    return imageKey;
  });
  return imageUrl;
}
