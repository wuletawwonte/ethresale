<template>
  <div class="dropdowncontainer">
    <input type="text" placeholder="Choose City" class="dropdowninput" @click="toggleDropDown">
    <div v-if="active" class="dropdown">
      <ul>
        <li v-for="city in cities" :key="city.id">
          {{ city.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: false,
      cities: [
        { id: 1, name: 'Mumbai' },
        { id: 2, name: 'Delhi' },
        { id: 3, name: 'Bangalore' },
        { id: 4, name: 'Hyderabad' },
        { id: 5, name: 'Ahmedabad' },
        { id: 6, name: 'Chennai' },
        { id: 7, name: 'Kolkata' },
        { id: 8, name: 'Surat' },
        { id: 9, name: 'Pune' }
      ]
    }
  },
  mounted () {
    document.addEventListener('click', this.closeDropDown)
  },
  methods: {
    toggleDropDown () {
      this.active = !this.active
    },
    closeDropDown (e) {
      if (!this.$el.contains(e.target)) {
        this.active = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdowncontainer {
  position: relative;
  width: 100%;
  min-width: 120px;

  .dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #fff;
    border-radius:  0 0 var(--border-radius) var(--border-radius);
    border: var(--input-border);
    box-shadow: var(--box-shadow);
    z-index: 1;
    max-height: 200px;
    overflow-y: scroll;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        padding: 0.6rem;
        font-size: 1rem;
        font-weight: 500;
        color: var(--text-color);
        cursor: pointer;
        overflow: hidden;

        &:hover {
          background-color: #eee;
        }
      }
    }
  }
}
</style>
