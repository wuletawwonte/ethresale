<script setup lang="ts">
import type { Database } from '~/types/supabase';
const client = useSupabaseClient<Database>();

const { data: items } = await useAsyncData(
  'items',
  async () => await client.from('items').select().order('created_at'),
  { transform: (result) => result.data }
);
</script>

<template>
  <div class="flex-grow flex flex-col">
    <HeroSection />
    <div class="bg-base-100 px-4 lg:px-[12%]">
      <h3 class="text-xl font-bold mt-4">
        {{ $t('Latest Used Items Ad & Second Hand Products') }}
      </h3>
      <div
        class="flex-grow grid grid-cols-grid2 md:grid-cols-grid3 lg:grid-cols-grid4 gap-4 py-4"
      >
        <ItemCard v-for="item in items" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>
