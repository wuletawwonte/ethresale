<script setup lang="ts">
const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
</script>

<template>
  <label class="btn btn-circle btn-sm btn-ghost swap swap-rotate">
    <input
      type="checkbox"
      :checked="colorMode.value === 'dark'"
      @change="toggleTheme"
    />

    <icon name="fa-solid:sun" size="1.1rem" class="swap-on" />
    <icon name="fa-solid:moon" size="1.1rem" class="swap-off" />
  </label>
</template>
