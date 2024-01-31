export const useThemeStore = defineStore('theme', () => {
  const theme = ref('light');
  const colorMode = useColorMode();

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light';
  };

  return {
    theme,
    toggleTheme,
  };
});
