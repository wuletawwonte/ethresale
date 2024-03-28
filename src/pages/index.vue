<script setup lang="ts">
import type { Database } from "~/types/supabase";
const client = useSupabaseClient<Database>();

const { data: items, pending } = await useAsyncData(
  "items",
  async () => await client.from("items").select().order("created_at"),
  {
    transform: (result) =>
      result.data?.map((item) => {
        return {
          id: item.id,
          name: item.name,
          description: item.description,
          image: item.image,
          price: item.price,
          created_at: item.created_at,
        };
      }),
    lazy: true,
  },
);
</script>

<template>
  <div class="flex flex-grow flex-col">
    <HeroSection />
    <div class="bg-base-100 px-4 lg:px-[12%]">
      <h3 class="mt-4 hidden text-xl font-bold md:block">
        {{ $t("Latest Used Items Ad & Second Hand Products") }}
      </h3>
      <div
        class="xs:grid-cols-grid1 grid flex-grow gap-4 py-4 sm:grid-cols-grid2 md:grid-cols-grid3 lg:grid-cols-grid4"
      >
        <div
          v-if="pending"
          v-for="n in 5"
          class="flex max-w-[600px] flex-col gap-4"
        >
          <div class="skeleton h-36 w-full"></div>
          <div class="skeleton h-4 w-28"></div>
          <div class="skeleton h-4 w-full"></div>
          <div class="skeleton h-4 w-full"></div>
          <div class="skeleton h-4 w-full"></div>
        </div>
        <ItemCard v-else v-for="item in items" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>
