<script setup lang="ts">
import { ref } from 'vue';

const categories = ref([
  {
    id: 1,
    name: 'Mobile Phones',
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
  { id: 5, name: 'TV-Video-Audio', link: 'categories/tv', icon: 'fa-solid:tv' },
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
  <section class="hero">
    <div class="hero__form">
      <h3>Buy and Sell Second Hand or Used Products</h3>
      <form action="">
        <DropDownInput />
        <input type="search" placeholder="Name" />
        <button><Icon name="fa-solid:search" size="1.1rem" /></button>
      </form>
      <button>
        <Icon name="material-symbols:box-edit-outline" size="1.2rem" />
        <span>Post Ad to Sell Used Second Hand Product</span>
      </button>
      <button>
        <Icon name="material-symbols:list-rounded" size="1.3rem" />
        <span>Find and Buy All Second Hand Products for Sale</span>
      </button>
    </div>
    <div class="hero__categories">
      <p>Main Second Hand Products Categories</p>
      <div class="hero__categories__wrapper">
        <NuxtLink
          v-for="category in categories"
          :key="category.id"
          :to="category.link"
        >
          <Icon :name="category.icon" size="1.7rem" />
          <span>{{ category.name }}</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
