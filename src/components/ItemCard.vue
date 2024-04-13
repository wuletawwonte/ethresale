<script>
export default {
  props: {
    item: {
      type: {
        name: String,
        description: String,
        image: String,
      },
      required: true,
    },
  },
};
</script>

<template>
  <div
    class="card card-bordered card-compact max-w-[600px] rounded-lg border-base-300 bg-base-100 shadow transition-transform duration-100 ease-in-out hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700"
  >
    <figure class="h-[150px]">
      <nuxt-img
        :src="item.image"
        :alt="item.name"
        class="h-full w-full rounded-t-lg object-cover"
        placeholder
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
