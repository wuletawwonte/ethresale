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
  prefix?: string;
  suffix?: string;
  orientation?: "vertical" | "horizontal";
  id: string;
  required?: boolean;
}

const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
  label: "",
  sublabel: "",
  placeholder: "",
  prefix: "",
  suffix: "",
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
      <div class="join">
        <div
          v-if="prefix"
          class="join-item flex items-center border border-base-300 bg-base-100 px-4"
        >
          <span class="text-sm text-base-content"> {{ prefix }} </span>
        </div>

        <div>
          <input
            :type="type"
            :id="id"
            ref="inputRef"
            :name="name"
            class="input join-item input-bordered w-full appearance-none focus:outline-none"
            :value="props.modelValue"
            :placeholder="props.placeholder"
            @input="onInput"
          />
        </div>
        <div
          v-if="suffix"
          class="join-item flex items-center border border-base-300 bg-base-100 px-4"
        >
          <span class="text-sm text-base-content">{{ suffix }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
