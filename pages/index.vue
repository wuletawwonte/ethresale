<script setup lang="ts">
import { ref } from 'vue';
import HeroSection from '@/components/HeroSection.vue';
import ItemCard from '@/components/ItemCard.vue';

const items = ref([
  {
    id: 1,
    name: 'Samsung Galaxy S21 Ultra',
    price: 'Rs 1,39,999',
    image:
      'https://mediacontent3.rebuydeal.com/products/1701788312-25222640.jpg',
  },
  {
    id: 2,
    name: 'Samsung Galaxy S21',
    price: 'Rs 1,05,999',
    image:
      'https://mediacontent3.rebuydeal.com/products/1700994322-31704866.jpg',
  },
  {
    id: 3,
    name: 'Samsung Galaxy S21+',
    price: 'Rs 1,15,999',
    image:
      'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-plus-5g-1.jpg',
  },
  {
    id: 4,
    name: 'Samsung Galaxy S20 FE',
    price: 'Rs 47,999',
    image:
      'https://mediacontent3.rebuydeal.com/products/1701009405-64275758.jpg',
  },
  {
    id: 5,
    name: 'Samsung Galaxy S20',
    price: 'Rs 70,499',
    image:
      'https://mediacontent3.rebuydeal.com/products/1701061054-92407660.jpg',
  },
  {
    id: 6,
    name: 'Samsung Galaxy S20+',
    price: 'Rs 77,999',
    image:
      'https://mediacontent3.rebuydeal.com/products/1701592786-88731735.jpg',
  },
  {
    id: 7,
    name: 'Samsung Galaxy S20 Ultra',
    price: 'Rs 97,999',
    image:
      'https://cdn1.ecomtreasure.com/wp-content/uploads/2022/10/3563300002095-600x600.jpg',
  },
]);
</script>

<template>
  <div>
    <HeroSection />
    <div class="grid grid-cols-4 gap-8 py-4 px-52 mb-8">
      <ItemCard v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>
