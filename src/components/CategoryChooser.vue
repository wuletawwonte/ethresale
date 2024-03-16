<template>
  <div
    class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:p-2 lg:grid-cols-4"
  >
    <input type="number" hidden v-model="category" />
    <div
      v-for="categoryItem in categories"
      :key="categoryItem.id"
      class="group max-w-sm cursor-pointer rounded-lg border-2 bg-base-200 p-6 hover:border-base-200 hover:shadow-lg"
      :class="
        categoryItem.id === category
          ? 'border-primary shadow-lg hover:border-primary'
          : 'border-base-100'
      "
      @click="onCategoryClick(categoryItem.id)"
    >
      <icon
        :name="categoryItem.icon!"
        class="mb-3 h-7 w-7 text-gray-500"
        :class="
          categoryItem.id === category
            ? 'text-primary'
            : 'text-gray-500 dark:text-gray-400'
        "
      ></icon>
      <span>
        <h5 class="mb-2 text-2xl font-semibold tracking-tight">
          {{ categoryItem.name }}
        </h5>
      </span>
      <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
        Go to this step by step guideline process.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Category } from "@/types";

const category = ref(null as number | null);
const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  categories: {
    type: Array as PropType<Category[]>,
    required: true,
  },
  selected: {
    type: Number,
    required: true,
    default: null,
  },
});

const onCategoryClick = (categoryId: number) => {
  category.value = categoryId;
  emit("update:modelValue", categoryId);
};

onMounted(() => {
  category.value = props.selected;
});
</script>
