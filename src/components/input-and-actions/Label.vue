<template>
  <div class="prose mb-1 flex flex-col md:mb-0 md:w-1/3">
    <label :for="props.for"
      ><slot />
      <span v-if="props.required" class="text-sm text-red-500">*</span>
    </label>
    <label
      :for="props.for"
      v-if="props.sublabel"
      class="text-xs opacity-60 hover:opacity-80"
      >{{ sublabel }}</label
    >
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  for: String,
  sublabel: String,
  required: {
    type: Boolean,
    default: false,
  },
});
</script>
