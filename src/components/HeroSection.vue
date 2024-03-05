<script setup lang="ts">
const categories = ref([
  {
    id: 1,
    name: 'Phones',
    link: 'categories/mobilephones',
    icon: 'fa-solid:mobile',
  },
  { id: 2, name: 'Cars', link: 'categories/cars', icon: 'fa-solid:car' },
  {
    id: 3,
    name: 'Motorcycles',
    link: 'categories/motorcycles',
    icon: 'fa-solid:motorcycle',
  },
  { id: 4, name: 'Houses', link: 'categories/houses', icon: 'fa-solid:home' },
  { id: 5, name: 'Television', link: 'categories/tv', icon: 'fa-solid:tv' },
  {
    id: 6,
    name: 'Tablets',
    link: 'categories/tablets',
    icon: 'fa-solid:tablet',
  },
  {
    id: 7,
    name: 'Land & Plots',
    link: 'categories/landandplots',
    icon: 'fa6-solid:landmark',
  },
  {
    id: 8,
    name: 'Games',
    link: 'categories/videogames',
    icon: 'fa-solid:gamepad',
  },
  {
    id: 18,
    name: 'Computers',
    link: 'categories/computers',
    icon: 'fa-solid:desktop',
  },
]);
</script>

<template>
  <section
    class="bg-base-200 px-4 flex flex-col min-h-72 lg:px-[12%] md:flex-row"
  >
    <div
      class="basis-1/2 flex flex-col items-start gap-4 pl-0 pr-0 md:pr-4 py-5 prose"
    >
      <h3 class="text-sky-700">
        {{ $t('Buy and Sell Second Hand or Used Products') }}
      </h3>
      <form action="" class="flex w-full p-4 bg-sky-600 rounded-md">
        <select class="select select-bordered select-sm w-full max-w-xs mr-2">
          <option disabled selected>{{ $t('City') }} ...</option>
          <option>Arbaminch</option>
          <option>Hawassa</option>
        </select>
        <input
          type="search"
          :placeholder="$t('Search') + ' ...'"
          class="input input-bordered input-sm w-full max-w-xs rounded-e-none"
        />
        <button class="btn btn-sm rounded-s-none rounded-e-full">
          <Icon name="fa-solid:search" size="1rem" />
        </button>
      </form>
      <button
        class="btn btn-sm btn-block flex justify-start items-center bg-base-100"
      >
        <Icon name="material-symbols:box-edit-outline" size="1.2rem" />
        <span>{{ $t('Post Ad to Sell Used Second Hand Product') }}</span>
      </button>
      <button
        class="btn btn-sm btn-block flex justify-start items-center bg-base-100"
      >
        <Icon name="material-symbols:list-rounded" size="1.3rem" />
        <span>{{ $t('Find and Buy All Second Hand Products for Sale') }}</span>
      </button>
    </div>
    <div class="basis-1/2 flex flex-col gap-4 py-5 pl-4 pr-0 prose">
      <p>{{ $t('Main Second Hand Product Categories') }}</p>
      <div class="grid grid-cols-3 gap-2">
        <NuxtLink
          v-for="category in categories"
          :key="category.id"
          class="btn btn-block btn-sm btn-outline flex justify-start items-center"
        >
          <Icon :name="category.icon" size="1rem" />
          <span>{{ category.name }}</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>