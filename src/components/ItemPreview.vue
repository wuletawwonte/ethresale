<template>
  <div>Hello</div>
</template>

<script setup lang="ts">
import type { ItemModel } from "@/types";

const { item } = defineProps({
  item: Object as PropType<ItemModel>,
});

console.log(item);
// console.log(item)
</script>
