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
    max-width: 300px;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    transition: all 0.5s ease-in-out;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    &:hover &__body h2 {
      text-decoration: underline;
    }

    &:hover &__image img {
      transform: scale(1.1);
      transition: all 0.1s ease-in-out;
    }

    &__image {
      height: 250px;
      width: 100%;
      overflow: hidden;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-top-right-radius: var(--border-radius);
        border-top-left-radius: var(--border-radius);
      }
    }

    &__body {
      padding: 1rem;

      h2 {
        font-size: 1rem;
        font-weight: 100;
        color: var(--text-color);
      }

      h2:hover {
        text-decoration: underline;
      }
    }
  }

</style>
