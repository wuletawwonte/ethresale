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

<template>
  <div
    class="card glass card-bordered card-compact max-w-[600px] bg-base-100 hover:shadow-md"
  >
    <figure class="h-[150px]">
      <img
        :src="item.image"
        :alt="item.name"
        class="h-full w-full rounded-t-lg object-cover"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ item.name }}</h2>
      <p>{{ item.description }}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary btn-sm">Buy Now</button>
      </div>
    </div>
  </div>
</template>
