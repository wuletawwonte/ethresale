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
    class="flex flex-col bg-base-200 pt-0 md:min-h-72 md:flex-row lg:px-[12%]"
  >
    <div class="prose flex flex-col items-start gap-4 p-4 py-5 md:basis-1/2">
      <h3 class="hidden text-base-content md:block">
        {{ $t("Buy and Sell Second Hand or Used Products") }}
      </h3>
      <form
        action=""
        class="flex w-full gap-4 rounded-md md:bg-base-300 md:p-4"
      >
        <!-- <select
          class="select-bordered select-sm mr-2 hidden w-full max-w-xs md:block"
        >
          <option disabled selected>{{ $t("City") }} ...</option>
          <option v-for="city in cities" :key="city.id">{{ city.name }}</option>
        </select> -->
        <div class="join w-full">
          <input
            class="input join-item input-bordered shrink grow"
            placeholder="Search..."
          />
          <button class="btn btn-primary join-item">
            <icon name="mingcute:settings-2-line" class="h-5 w-5" />
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
    <div class="prose flex flex-col gap-4 pb-4 md:basis-1/2 md:px-4">
      <p class="hidden md:block">
        {{ $t("Main Second Hand Product Categories") }}
      </p>
      <div class="no-scrollbar flex overflow-x-auto md:grid md:grid-cols-3">
        <div
          v-if="pending"
          v-for="key in 8"
          class="skeleton ml-4 h-8 w-full rounded-lg"
        ></div>
        <button
          v-else
          v-for="category in categories!"
          :key="category.id"
          class="btn btn-outline btn-sm ml-2 inline-flex flex-nowrap items-center justify-start md:btn-block md:pr-0"
        >
          <Icon :name="category.icon!" size="1rem" />
          <span>{{ category.name }}</span>
        </button>
      </div>
    </div>
  </section>
</template>
