<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);

interface InputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  type?: string;
  orientation?: "vertical" | "horizontal";
  id: string;
}

const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
  label: "",
  value: "",
  placeholder: "",
  orientation: "horizontal",
});

function onInput(e: Event) {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", target.value);
}
</script>

<template>
  <div
    :class="['prose max-w-none', { 'md:flex': orientation === 'horizontal' }]"
  >
    <div class="mb-1 md:mb-0 md:w-1/3" v-if="props.label">
      <label :for="id">
        {{ props.label }}
      </label>
    </div>
    <div :class="['flex-grow', { 'md:w-2/3': orientation === 'horizontal' }]">
      <input
        :type="type"
        :id="id"
        class="input input-bordered w-full"
        :value="props.value"
        :placeholder="props.placeholder"
        @input="onInput"
      />
    </div>
  </div>
</template>
