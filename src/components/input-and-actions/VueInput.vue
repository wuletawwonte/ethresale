<script setup lang="ts">
interface InputEmits {
  (event: "update:modelValue", value: string): void;
  (event: "blur", e: FocusEvent): void;
}

const emit = defineEmits<InputEmits>();

interface InputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  type?: string;
  name?: string;
  orientation?: "vertical" | "horizontal";
  id: string;
}

const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
  label: "",
  value: "",
  placeholder: "",
  orientation: "horizontal",
  name: "",
});

const onInput = (e: Event) => {
  const inputValue = (e.target as HTMLInputElement).value;
  emit("update:modelValue", inputValue);
};
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
        ref="inputRef"
        :name="name"
        class="input input-bordered w-full"
        :value="props.value"
        :placeholder="props.placeholder"
        @input="onInput"
      />
    </div>
  </div>
</template>
