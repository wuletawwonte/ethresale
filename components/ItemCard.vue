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
  <div class="card bg-base-100 shadow-lg glass max-w-[300px]">
    <figure class="h-[200px]">
      <img
        :src="item.image"
        :alt="item.name"
        class="object-cover w-full h-full rounded-t-lg"
      />
    </figure>
    <div class="card-body p-4">
      <h2 class="card-title">{{ item.name }}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary btn-sm">Buy Now</button>
      </div>
    </div>
  </div>
</template>
