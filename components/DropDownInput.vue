<script setup lang="ts">
import { ref } from 'vue';

const active = ref(false);
const cities = ref([
  { id: 1, name: 'Mumbai' },
  { id: 2, name: 'Delhi' },
  { id: 3, name: 'Bangalore' },
  { id: 4, name: 'Hyderabad' },
  { id: 5, name: 'Ahmedabad' },
  { id: 6, name: 'Chennai' },
  { id: 7, name: 'Kolkata' },
  { id: 8, name: 'Surat' },
  { id: 9, name: 'Pune' },
]);
function mounted() {
  document.addEventListener('click', closeDropDown);
}

function beforeUnmount() {
  document.removeEventListener('click', closeDropDown);
}
function toggleDropDown() {
  active.value = !active.value;
}

function closeDropDown(e: Event) {
  if (!this.$el.contains(e.target)) {
    active.value = false;
  }
}
</script>

<template>
  <div class="dropdowncontainer">
    <input
      type="text"
      placeholder="City ..."
      :class="{ dropdownactive: active }"
      @click="toggleDropDown"
    />
    <div v-if="active" class="dropdown">
      <ul>
        <li v-for="city in cities" :key="city.id">
          {{ city.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
