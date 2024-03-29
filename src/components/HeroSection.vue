<script setup lang="ts">
import type { Database } from "~/types/supabase";
import type { Category } from "~/types";

const client = useSupabaseClient<Database>();

const { data: categories, pending } = await useAsyncData(
  "categories",
  async () => {
    const { data } = await client
      .from("categories")
      .select("name, icon, id")
      .limit(8)
      .returns<Category[]>();
    return data;
  },
  {
    transform: (result) => {
      return result?.map((category) => ({
        id: category.id,
        name: category.name,
        icon: category.icon,
      }));
    },
    lazy: true,
  },
);

const { data: cities } = await useAsyncData(
  "cities",
  async () => {
    return await client.from("cities").select("name, id");
  },
  {
    transform: (result) => {
      return result.data?.map((city) => ({
        id: city.id,
        name: city.name,
      }));
    },
    lazy: true,
  },
);
</script>

<template>
  <section
    class="flex flex-col bg-base-300 pt-0 md:min-h-64 md:flex-row lg:px-[12%]"
  >
    <div
      class="prose flex max-w-none flex-col items-start gap-4 p-4 py-5 md:basis-1/2"
    >
      <h3 class="hidden text-base-content md:block">
        {{ $t("Buy and Sell Second Hand or Used Products") }}
      </h3>
      <form action="" class="flex w-full rounded-md">
        <!-- <select
          class="select-bordered select-sm mr-2 hidden w-full max-w-xs md:block"
        >
          <option disabled selected>{{ $t("City") }} ...</option>
          <option v-for="city in cities" :key="city.id">{{ city.name }}</option>
        </select> -->
        <div class="join w-full">
          <label
            class="input join-item input-bordered flex shrink grow items-center gap-2"
          >
            <icon name="ep:search" class="h-4 w-4 opacity-70" />
            <input type="text" class="grow" placeholder="Search..." />
          </label>

          <button class="btn btn-primary join-item">
            <icon name="mingcute:settings-2-line" class="h-6 w-6" />
          </button>
        </div>
      </form>
      <button
        class="btn btn-sm btn-block hidden flex-nowrap items-center justify-start bg-base-100 md:flex"
      >
        <Icon name="material-symbols:box-edit-outline" size="1.2rem" />
        <span>{{ $t("Post Ad to Sell Used Second Hand Product") }}</span>
      </button>
      <button
        class="btn btn-sm btn-block hidden flex-nowrap items-center justify-start bg-base-100 md:flex"
      >
        <Icon name="material-symbols:list-rounded" size="1.3rem" />
        <span>{{ $t("Find and Buy All Second Hand Products for Sale") }}</span>
      </button>
    </div>
    <div
      class="prose flex max-w-none flex-col pb-4 md:basis-1/2 md:self-center md:px-4"
    >
      <p class="hidden md:block">
        {{ $t("Main Second Hand Product Categories") }}
      </p>
      <div
        class="no-scrollbar flex overflow-x-auto md:grid md:grid-cols-3 md:gap-2"
      >
        <div
          v-if="pending"
          v-for="key in 6"
          class="skeleton ml-4 h-8 min-w-28 overflow-hidden rounded-full bg-base-200"
        ></div>
        <template v-else>
          <button
            class="btn btn-outline btn-active btn-sm ml-2 inline-flex flex-nowrap items-center justify-start rounded-full md:btn-block md:m-0 md:pr-0"
          >
            <span>All Items</span>
          </button>
          <button
            v-for="category in categories!"
            :key="category.id"
            class="btn btn-outline btn-sm ml-2 inline-flex flex-nowrap items-center justify-start rounded-full md:btn-block md:m-0 md:pr-0"
          >
            <Icon :name="category.icon!" size="1rem" />
            <span>{{ category.name }}</span>
          </button>
        </template>
      </div>
    </div>
  </section>
</template>
