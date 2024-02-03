<script setup lang="ts">
const client = useSupabaseClient();

const { data: items } = await useAsyncData(
  'items',
  async () => await client.from('items').select().order('created_at'),
  { transform: (result) => result.data }
);
</script>

<template>
  <div class="flex-grow flex flex-col">
    <HeroSection />
    <div
      class="flex-grow grid grid-cols-4 gap-4 py-4 px-4 bg-base-100 lg:px-[12%]"
    >
      <ItemCard v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>
