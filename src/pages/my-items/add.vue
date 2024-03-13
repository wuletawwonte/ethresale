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
          <li :class="['step', { 'step-primary': step >= 2 }]">Choose plan</li>
          <li :class="['step', { 'step-primary': step >= 3 }]">Purchase</li>
        </ul>

        <section v-if="step === 1" class="flex flex-col gap-6">
          <div class="flex flex-col items-center">
            <h2 class="text-xl font-normal">Category</h2>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Choose the category that best suits your item
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

        <section v-else-if="step === 2" class="flex flex-col gap-6">
          <div class="flex flex-col items-center">
            <h2 class="text-xl font-normal">Choose Plan</h2>
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
          <div class="text-gray-700 md:flex">
            <Label>Product Photos</Label>

            <div class="flex flex-col gap-4 md:w-2/3 md:flex-grow">
              <div class="flex w-full items-center justify-center">
                <label
                  for="dropzone-file"
                  class="h-34 dark:hover:bg-bray-800 flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div class="flex flex-col items-center justify-center py-4">
                    <icon
                      name="octicon:cloud-upload"
                      size="3rem"
                      class="text-gray-400 dark:text-gray-500"
                    ></icon>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      JPG or PNG (MAX. 800x400px)
                    </p>
                  </div>
                  <VeeField
                    name="files"
                    id="dropzone-file"
                    type="file"
                    accept="image/jpeg, image/png"
                    multiple
                    class="hidden"
                    @change="onFileChange"
                  />
                </label>
              </div>
              <div
                v-if="itemModel.selectedFiles"
                class="mt-4 grid grid-cols-2 gap-4 md:grid-cols-6"
              >
                <div
                  v-for="imageItem in itemModel.selectedFiles"
                  :key="imageItem.name"
                  class="relative flex cursor-pointer select-none flex-col items-center overflow-hidden rounded border border-base-300 text-center hover:border-base-200 hover:shadow md:h-24"
                >
                  <button
                    class="btn btn-circle btn-xs absolute right-1 top-1 z-50 bg-base-100"
                    type="button"
                    @click="removeImage(imageItem.name)"
                  >
                    <icon
                      name="octicon:x"
                      size="1rem"
                      class="text-red-500"
                    ></icon>
                  </button>
                  <img
                    class="inset-0 z-0 h-full w-full border-4 border-base-100 object-cover"
                    :src="loadItemImage(imageItem)"
                  />
                  <span
                    class="absolute bottom-0 z-50 bg-base-100 bg-opacity-80 p-1 text-xs text-base-content dark:text-gray-400"
                  >
                    {{ imageItem.name.substring(0, 15) }}
                  </span>
                </div>
              </div>
              <VeeErrorMessage name="files" />
            </div>
          </div>

          <hr class="border-base-200" />

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
              :disabled="step === 3"
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
  console.log(itemModel.value);
  step.value += 1;
}

function previousStep() {
  console.log(itemModel.value);
  step.value -= 1;
}

// saves the item to the database
function saveItem() {
  console.log("Save Item", itemModel.value);
}

// adds the image to the selectedFiles array
function onFileChange(event: Event) {
  const { files } = event.target as HTMLInputElement;
  if (
    files !== null &&
    files!.length > 0 &&
    itemModel.value.selectedFiles.length < 6
  ) {
    for (let i = 0; i < files.length; i++) {
      const currFile: File = files.item(i)!;

      const isDuplicate = itemModel.value.selectedFiles.some(
        (file: File) => file.name === currFile.name,
      );

      if (!isDuplicate) {
        itemModel.value.selectedFiles.push(currFile);
      }
    }
  }
}

// removes the image from the selectedFiles array
function removeImage(index: string) {
  if (itemModel.value.selectedFiles) {
    const newFiles = [...itemModel.value.selectedFiles!].filter(
      (file: File) => file.name !== index,
    );
    itemModel.value.selectedFiles = newFiles;
  }
}

// loads the image from the file input and display it in the UI
function loadItemImage(imageItem: File): string {
  return URL.createObjectURL(imageItem);
}
</script>
