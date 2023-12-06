<template>
  <div class="item">
    <div class="item__image">
      <img :src="item.image" :alt="item.name">
    </div>
    <div class="item__body">
      <h2 class="title">
        {{ item.name }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 300px;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    transition: transform 0.5s ease-in-out;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    &__image {
      height: 250px;
      width: 100%;
      overflow: hidden;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: var(--border-radius);
      }
    }

    &__body {
      padding: 0 1rem;
      text-align: center;

      h2 {
        font-size: 1.2rem;
        font-weight: 100;
        color: var(--primary-color);
      }
    }
  }
</style>
