<template>
  <div class="prose mb-1 md:mb-0 md:w-1/3">
    <label :for="props.for"><slot /></label>
    <span v-if="props.required" class="text-sm text-red-500">*</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  for: String,
  required: {
    type: Boolean,
    default: false,
  },
});
</script>
