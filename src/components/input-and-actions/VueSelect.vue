<script setup lang="ts">
interface InputEmits {
  (event: "update:modelValue", value: string): void;
  (event: "blur", e: FocusEvent): void;
}

const emit = defineEmits<InputEmits>();

interface InputProps {
  label?: string;
  sublabel?: string;
  placeholder?: string;
  name?: string;
  orientation?: "vertical" | "horizontal";
  id: string;
  required?: boolean;
}

const props = withDefaults(defineProps<InputProps>(), {
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
      <select
        :id="id"
        :name="name"
        class="select select-bordered w-full max-w-xs"
      >
        <option disabled selected>Who shot first?</option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
    </div>
  </div>
</template>
