<template>
  <div class="card w-72 bg-base-100 shadow-lg glass">
    <figure>
      <img :src="item.image" :alt="item.name" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ item.name }}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>

  <!-- <div class="flex flex-col max-w-[300px] rounded-lg shadow cursor-pointer">
    <div class="h-[250px] w-full overflow-hidden">
      <img
        :src="item.image"
        :alt="item.name"
        class="object-cover w-full h-full rounded-t-lg"
      />
    </div>
    <div class="p-4 prose">
      <h3 class="title hover:underline">
        {{ item.name }}
      </h3>
    </div>
  </div> -->
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
