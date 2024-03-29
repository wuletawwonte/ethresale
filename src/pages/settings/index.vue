<template>
  <div class="p-4">
    <div
      class="w-full max-w-md rounded-lg border border-gray-200 bg-base-100 p-4 shadow dark:border-gray-700 sm:p-8"
    >
      <div class="mb-4 flex items-center justify-between">
        <h5
          class="text-xl font-bold leading-none text-gray-900 dark:text-white"
        >
          Display settings
        </h5>
      </div>
      <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
          <li class="py-3 sm:py-4">
            <div class="flex items-center">
              <div class="min-w-0 flex-1">
                <p
                  class="truncate text-sm font-medium text-gray-900 dark:text-white"
                >
                  Dark theme
                </p>
                <p class="truncate text-sm text-gray-500 dark:text-gray-400">
                  Turn on dark mode
                </p>
              </div>
              <div
                class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
              >
                <input
                  type="checkbox"
                  class="toggle"
                  :checked="colorMode.value === 'dark'"
                  @change="toggleTheme"
                />
              </div>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div class="flex items-center">
              <div class="min-w-0 flex-1">
                <p
                  class="truncate text-sm font-medium text-gray-900 dark:text-white"
                >
                  Interface language
                </p>
                <p class="truncate text-sm text-gray-500 dark:text-gray-400">
                  Select your preferred language
                </p>
              </div>
              <div
                class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
              >
                <LangSwitcher />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};
</script>
