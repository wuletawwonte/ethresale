<template>
  <div class="dropdowncontainer">
    <input type="text" placeholder="Choose City" class="dropdowninput">
    <div class="dropdown">
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
  }
}
</script>

<style lang="scss" scoped>
.dropdowncontainer {
  position: relative;
  width: 100%;

  > input {
    width: 100%;
    padding: 0.6rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    outline: none;
    font-size: 1rem;
    font-weight: 500;
    color: var(--text-color);
  }

  .dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    z-index: 1;

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

        &:hover {
          background-color: #eee;
        }
      }
    }
  }
}
</style>
