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
      .limit(9)
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
    class="flex min-h-72 flex-col bg-base-200 px-4 md:flex-row lg:px-[12%]"
  >
    <div
      class="prose flex flex-col items-start gap-4 py-5 pl-0 pr-0 md:basis-1/2 md:pr-4"
    >
      <h3 class="text-base-content">
        {{ $t("Buy and Sell Second Hand or Used Products") }}
      </h3>
      <form action="" class="flex w-full rounded-md bg-base-300 p-4">
        <select class="select select-bordered select-sm mr-2 w-full max-w-xs">
          <option disabled selected>{{ $t("City") }} ...</option>
          <option v-for="city in cities" :key="city.id">{{ city.name }}</option>
        </select>
        <input
          type="search"
          :placeholder="$t('Search') + ' ...'"
          class="input input-sm input-bordered w-full max-w-xs rounded-e-none"
        />
        <button class="btn btn-sm rounded-e-full rounded-s-none">
          <Icon name="fa-solid:search" size="1rem" />
        </button>
      </form>
      <button
        class="btn btn-sm btn-block flex flex-nowrap items-center justify-start bg-base-100"
      >
        <Icon name="material-symbols:box-edit-outline" size="1.2rem" />
        <span>{{ $t("Post Ad to Sell Used Second Hand Product") }}</span>
      </button>
      <button
        class="btn btn-sm btn-block flex flex-nowrap items-center justify-start bg-base-100"
      >
        <Icon name="material-symbols:list-rounded" size="1.3rem" />
        <span>{{ $t("Find and Buy All Second Hand Products for Sale") }}</span>
      </button>
    </div>
    <div class="prose flex flex-col gap-4 py-5 pr-0 md:basis-1/2 md:pl-4">
      <p>{{ $t("Main Second Hand Product Categories") }}</p>
      <div class="xs:grid-cols-2 grid grid-cols-3 gap-2">
        <div
          v-if="pending"
          v-for="key in 8"
          class="skeleton h-8 w-full rounded-lg"
        ></div>
        <button
          v-else
          v-for="category in categories!"
          :key="category.id"
          class="btn btn-outline btn-sm btn-block inline-flex flex-nowrap items-center justify-start pr-0"
        >
          <Icon :name="category.icon!" size="1rem" />
          <span>{{ category.name }}</span>
        </button>
      </div>
    </div>
  </section>
</template>
