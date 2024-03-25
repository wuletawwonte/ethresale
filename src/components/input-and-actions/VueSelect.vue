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
  selected?: number;
  name?: string;
  orientation?: "vertical" | "horizontal";
  id: string;
  required?: boolean;
  options: [{ id: number; name: string }];
}

const props = withDefaults(defineProps<InputProps>(), {
  label: "",
  sublabel: "",
  placeholder: "",
  selected: 0,
  orientation: "horizontal",
  name: "",
  required: false,
});

const onChange = (e: Event) => {
  const inputValue = (e.target as HTMLSelectElement).value;
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
        @change="onChange"
      >
        <option disabled :selected="selected === 0">{{ placeholder }}</option>
        <option
          v-for="option in options"
          :key="option.id"
          :selected="option.id === selected"
          :value="option.id"
        >
          {{ option.name }}
        </option>
      </select>
    </div>
  </div>
</template>
