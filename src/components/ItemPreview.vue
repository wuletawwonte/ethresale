<template>
  <div class="mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="-mx-4 flex flex-col md:flex-row">
      <div class="px-4 md:flex-1">
        <div>
          <div class="mb-4 h-64 rounded-lg bg-gray-100 md:h-80">
            <div
              v-show="image === 1"
              class="mb-4 flex h-64 items-center justify-center rounded-lg bg-gray-100 md:h-80"
            >
              <span class="text-5xl">1</span>
            </div>

            <div
              v-show="image === 2"
              class="mb-4 flex h-64 items-center justify-center rounded-lg bg-gray-100 md:h-80"
            >
              <span class="text-5xl">2</span>
            </div>
          </div>

          <div class="-mx-2 mb-4 flex">
            <template v-for="i in 4">
              <div class="flex-1 px-2">
                <button
                  @click="image = i"
                  :class="{ 'ring-2 ring-inset ring-indigo-300': image === i }"
                  class="flex h-24 w-full items-center justify-center rounded-lg bg-gray-100 focus:outline-none md:h-32"
                >
                  <span v-text="i" class="text-2xl"></span>
                </button>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="px-4 md:flex-1">
        <h2
          class="mb-2 text-2xl font-bold leading-tight tracking-tight md:text-3xl"
        >
          {{ item.title }}
        </h2>
        <div class="avatar placeholder online">
          <div class="w-8 rounded-full bg-neutral text-neutral-content">
            <span class="text-xs">DI</span>
          </div>
        </div>

        <div class="my-4 flex items-center space-x-4">
          <div>
            <div class="flex rounded-lg bg-gray-100 px-3 py-2">
              <span class="text-3xl font-bold text-indigo-600">25</span>
              <span class="ml-1 mt-1 text-indigo-400">ETB</span>
            </div>
          </div>
          <div class="flex-1">
            <p class="text-xl font-semibold text-green-500">Save 12%</p>
            <p class="text-sm text-gray-400">Inclusive of all Taxes.</p>
          </div>
        </div>

        <p class="text-gray-500">
          Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae
          exercitationem porro saepe ea harum corrupti vero id laudantium enim,
          libero blanditiis expedita cupiditate a est.
        </p>

        <div class="flex space-x-4 py-4">
          <div class="relative">
            <div
              class="absolute left-0 right-0 block pt-2 text-center text-xs font-semibold uppercase tracking-wide text-gray-400"
            >
              Qty
            </div>
            <select
              class="flex h-14 cursor-pointer appearance-none items-end rounded-xl border border-gray-200 pb-1 pl-4 pr-8"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

            <svg
              class="absolute bottom-0 right-0 mb-2 mr-2 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </svg>
          </div>

          <button
            type="button"
            class="h-14 rounded-xl bg-indigo-600 px-6 py-2 font-semibold text-white hover:bg-indigo-500"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ItemModel } from "@/types";

const image = ref(1);

const { item } = defineProps({
  item: {
    type: Object as PropType<ItemModel>,
    required: true,
  },
});

console.log(item);
// console.log(item)
</script>
