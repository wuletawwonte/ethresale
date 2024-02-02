<script setup lang="ts">
const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
</script>

<template>
  <label class="swap swap-rotate">
    <input
      type="checkbox"
      :checked="colorMode.value === 'dark'"
      @change="toggleTheme"
    />

    <icon name="fa-solid:sun" size="1.2rem" class="swap-on" />
    <icon name="fa-solid:moon" size="1.2rem" class="swap-off" />
  </label>
</template>
