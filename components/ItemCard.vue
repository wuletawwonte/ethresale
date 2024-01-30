<template>
  <div class="flex flex-col max-w-[300px] rounded-lg shadow cursor-pointer">
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
