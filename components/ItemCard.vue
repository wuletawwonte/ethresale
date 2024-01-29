<template>
  <div class="item">
    <div class="item__image">
      <img :src="item.image" :alt="item.name" />
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
      required: true,
    },
  },
};
</script>
