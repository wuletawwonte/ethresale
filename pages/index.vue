<template>
  <div>
    <HeroSection />
    <div class="items">
      <ItemCard v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue'
import ItemCard from '@/components/ItemCard.vue'

export default {
  components: {
    HeroSection,
    ItemCard
  },
  data () {
    return {
      items: [
        {
          id: 1,
          name: 'Samsung Galaxy S21 Ultra',
          price: 'Rs 1,39,999',
          image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-ultra-5g-1.jpg'
        },
        {
          id: 2,
          name: 'Samsung Galaxy S21',
          price: 'Rs 1,05,999',
          image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-5g-1.jpg'
        },
        {
          id: 3,
          name: 'Samsung Galaxy S21+',
          price: 'Rs 1,15,999',
          image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-plus-5g-1.jpg'
        },
        {
          id: 4,
          name: 'Samsung Galaxy S20 FE',
          price: 'Rs 47,999',
          image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-fe-5g-1.jpg'
        },
        {
          id: 5,
          name: 'Samsung Galaxy S20',
          price: 'Rs 70,499',
          image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-5g-r1.jpg'
        },
        {
          id: 6,
          name: 'Samsung Galaxy S20+',
          price: 'Rs 77,999',
          image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-plus-5g-r1.jpg'
        },
        {
          id: 7,
          name: 'Samsung Galaxy S20 Ultra',
          price: 'Rs 97,999',
          image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-ultra-5g-r1.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem var(--padding-x);
}
</style>
