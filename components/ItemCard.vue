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
    class="card card-compact bg-base-100 hover:shadow-md glass max-w-[300px] card-bordered"
  >
    <figure class="h-[150px]">
      <img
        :src="item.image"
        :alt="item.name"
        class="object-cover w-full h-full rounded-t-lg"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ item.name }}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary btn-sm">Buy Now</button>
      </div>
    </div>
  </div>
</template>
