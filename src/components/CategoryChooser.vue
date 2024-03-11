<template>
  <div
    class="grid grid-cols-1 gap-8 p-4 sm:grid-cols-2 md:grid-cols-3 md:p-2 lg:grid-cols-3 xl:p-5"
  >
    <div
      v-for="category in categories"
      :key="category.id"
      class="max-w-sm rounded-lg border bg-base-200 p-6 shadow hover:border-primary"
    >
      <icon
        :name="category.icon!"
        class="mb-3 h-7 w-7 text-gray-500 dark:text-gray-400"
      ></icon>
      <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight">
          {{ category.name }}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
        Go to this step by step guideline process on how to certify for your
        weekly benefits:
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Category {
  id: number;
  name: string;
  icon?: string;
}

defineProps({
  categories: {
    type: Array as PropType<Category[]>,
    required: true,
  },
});
</script>
