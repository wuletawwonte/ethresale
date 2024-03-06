<script setup lang="ts">
interface InputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  id: string;
}

const props = withDefaults(defineProps<InputProps>(), {
  label: "",
  value: "",
  placeholder: "",
});
</script>

<template>
  <div class="prose max-w-none md:flex">
    <div class="mb-1 md:mb-0 md:w-1/3" v-if="props.label">
      <label :for="id">
        {{ props.label }}
      </label>
    </div>
    <div class="md:w-2/3 md:flex-grow">
      <input
        type="text"
        :id="id"
        class="input input-bordered w-full"
        :value="props.value"
        :placeholder="props.placeholder"
      />
    </div>
  </div>
</template>
