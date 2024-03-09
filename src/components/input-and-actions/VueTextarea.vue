<script setup lang="ts">
interface TextareaEmits {
  (event: "update:modelValue", value: string): void;
  (event: "blur", e: FocusEvent): void;
}

const emit = defineEmits<TextareaEmits>();

interface TextareaProps {
  label?: string;
  modelValue: string | number;
  placeholder?: string;
  name?: string;
  orientation?: "vertical" | "horizontal";
  id: string;
  required?: boolean;
}

const props = withDefaults(defineProps<TextareaProps>(), {
  type: "text",
  label: "",
  placeholder: "",
  orientation: "horizontal",
  required: false,
});

const onInput = (e: Event) => {
  const inputValue = (e.target as HTMLTextAreaElement).value;
  emit("update:modelValue", inputValue);
};
</script>

<template>
  <div
    :class="['prose max-w-none', { 'md:flex': orientation === 'horizontal' }]"
  >
    <Label v-if="props.label" :for="id" :required="required">
      {{ props.label }}
    </Label>
    <div :class="['flex-grow', { 'md:w-2/3': orientation === 'horizontal' }]">
      <textarea
        :id="id"
        ref="inputRef"
        :name="name"
        class="textarea textarea-bordered w-full"
        :value="props.modelValue"
        :placeholder="props.placeholder"
        @input="onInput"
      ></textarea>
    </div>
  </div>
</template>
