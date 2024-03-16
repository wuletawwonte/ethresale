<template>
  <div class="mx-4 my-4 flex flex-col lg:mx-0 lg:px-[12%]">
    <div class="flex items-center justify-between px-4">
      <h2 class="text-2xl font-normal">{{ $t("Add Item") }}</h2>
    </div>

    <form @submit.prevent="saveItem">
      <div
        class="my-4 flex flex-col gap-6 rounded-b-xl bg-base-100 p-4 shadow-sm"
      >
        <ul class="steps">
          <li :class="['step', { 'step-primary': step >= 1 }]">Category</li>
          <li :class="['step', { 'step-primary': step >= 2 }]">Details</li>
          <li :class="['step', { 'step-primary': step >= 3 }]">Photos</li>
          <li :class="['step', { 'step-primary': step >= 4 }]">Purchase</li>
        </ul>

        <section v-if="step === 1" class="flex flex-col gap-6 lg:px-4">
          <div class="flex flex-col items-center">
            <h2 class="text-xl font-normal">Category</h2>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Choose the category that best suits your item type. This will
              activate the next step.
            </p>
          </div>
          <div>
            <CategoryChooser
              :categories="categories"
              v-model="itemModel.category"
              :selected="itemModel.category"
            />
          </div>
        </section>

        <section v-else-if="step === 2" class="flex flex-col gap-6 lg:px-4">
          <div class="flex flex-col items-center">
            <h2 class="text-xl font-normal">Details</h2>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Choose the plan that best suits your needs
            </p>
          </div>
          <VueInput
            type="text"
            id="title"
            value=""
            placeholder="Item Title"
            label="Title"
            name="title"
            v-model="itemModel.title"
          />

          <VueTextarea
            id="description"
            label="Description"
            placeholder="Description ..."
            name="description"
            v-model="itemModel.description"
          />

          <div class="md:flex">
            <div class="prose mb-1 md:mb-0 md:w-1/3">
              <label>Price</label>
            </div>
            <div class="md:w-2/3 md:flex-grow">
              <div class="join">
                <div>
                  <VeeField
                    name="price"
                    type="number"
                    class="input join-item input-bordered w-80 appearance-none focus:outline-none"
                    placeholder="Price"
                    v-model="itemModel.price"
                  />
                </div>
                <div
                  class="join-item flex items-center border border-base-300 bg-base-100 px-4"
                >
                  <span class="text-sm text-base-content">ETB</span>
                </div>
              </div>
            </div>
          </div>

          <div class="md:flex">
            <div class="prose mb-1 flex flex-col md:mb-0 md:w-1/3">
              <label>City</label>
              <label class="text-xs opacity-60 hover:opacity-80"
                >Where are you located?{{ itemModel.city }}</label
              >
            </div>
            <div class="md:w-2/3 md:flex-grow">
              <div class="join">
                <div>
                  <VeeField
                    as="select"
                    name="city"
                    class="join-item select select-bordered"
                    placeholder="City"
                  >
                    <option value="" selected>City</option>
                    <option value="Arbaminch">Arbaminch</option>
                    <option value="Hawassa">Hawassa</option>
                    <option value="Soddo">Soddo</option>
                  </VeeField>
                </div>
                <button class="btn join-item">Use Geo Location</button>
              </div>
            </div>
          </div>
        </section>

        <section v-else-if="step === 3" class="flex flex-col gap-6 lg:px-4">
          <div class="flex flex-col items-center">
            <h2 class="text-xl font-normal">Photos</h2>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              You can add upto 10 photos
            </p>
          </div>
          <VueFileUploader v-model="itemModel.selectedFiles" />
        </section>

        <div class="text-gray-700 md:flex">
          <div class="mb-1 md:mb-0 md:w-1/3"></div>
          <div class="flex gap-4 md:w-2/3 md:flex-grow">
            <button
              type="button"
              class="btn btn-sm"
              @click="previousStep"
              :disabled="step === 1"
            >
              Previous
            </button>
            <button type="button" class="btn btn-sm">Save Draft</button>
            <button
              type="button"
              class="btn btn-sm"
              @click="nextStep"
              :disabled="step === 4 || itemModel.category === 0"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import type { Category } from "@/types";
import type { ItemModel } from "@/types";

const itemModel = ref<ItemModel>({
  title: "",
  description: "",
  category: 0,
  price: 0,
  city: "",
  selectedFiles: [],
});

const step = ref<number>(1);
const categories = ref<Category[]>([
  { name: "Electronics", id: 1, icon: "map:electronics-store" },
  { name: "Furniture", id: 2, icon: "map:furniture-store" },
  { name: "Clothing", id: 3, icon: "map:clothing-store" },
  { name: "Books", id: 4, icon: "map:book-store" },
  { name: "Other", id: 6, icon: "map:store" },
]);

function nextStep() {
  if (step.value === 1) {
    if (itemModel.value.category === 0) {
      return;
    }
  }

  step.value += 1;
}

function previousStep() {
  step.value -= 1;
}

// saves the item to the database
function saveItem() {
  console.log("Save Item", itemModel.value);
}
</script>
