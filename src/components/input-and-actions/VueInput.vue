<script setup lang="ts">
interface InputEmits {
  (event: "update:modelValue", value: string): void;
  (event: "blur", e: FocusEvent): void;
}

const emit = defineEmits<InputEmits>();

interface InputProps {
  label?: string;
  sublabel?: string;
  modelValue: string | number;
  placeholder?: string;
  type?: string;
  name?: string;
  orientation?: "vertical" | "horizontal";
  id: string;
  required?: boolean;
}

const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
  label: "",
  sublabel: "",
  placeholder: "",
  orientation: "horizontal",
  name: "",
  required: false,
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
    <Label
      v-if="props.label"
      :for="id"
      :required="required"
      :sublabel="sublabel"
    >
      {{ props.label }}
    </Label>
    <div :class="['flex-grow', { 'md:w-2/3': orientation === 'horizontal' }]">
      <input
        :type="type"
        :id="id"
        ref="inputRef"
        :name="name"
        class="input input-bordered w-full"
        :value="props.modelValue"
        :placeholder="props.placeholder"
        @input="onInput"
      />
    </div>
  </div>
</template>
