<template>
  <div class="item">
    <img :src="item.image" alt="item.name">
    <h2>{{ item.name }}</h2>
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
    padding: 1rem;
    max-width: 300px;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    transition: transform 0.5s ease-in-out;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    img {
      width: 100%;
      max-width: 300px;
      border-radius: var(--border-radius);
    }

    h2 {
      font-size: 1.2rem;
      font-weight: 100;
      color: var(--primary-color);
    }
  }
</style>
