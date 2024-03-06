<script setup lang="ts">
interface InputProps {
  label?: string;
  value?: string;
}

const props = withDefaults(defineProps<InputProps>(), {
  label: "TestLabel",
  value: "TestValue",
});
</script>

<template>
  <label>
    {{ props.label }}
  </label>
  <div>
    <input type="text" :value="props.value" />
  </div>
</template>
