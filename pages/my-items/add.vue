<script setup lang="ts">
import { required } from '@vee-validate/rules';

const selectedFiles = ref([] as File[]);
const name = ref('');
const description = ref('');
const category = ref('');
const price = ref('');
const city = ref('');

// saves the item to the database
function saveItem(values: any) {
  console.log('Save Item', values);
}

// adds the image to the selectedFiles array
function onFileChange(event: Event) {
  const { files } = event.target as HTMLInputElement;
  if (files !== null && files!.length > 0 && selectedFiles.value.length < 6) {
    for (let i = 0; i < files.length; i++) {
      const currFile: File = files.item(i)!;

      const isDuplicate = selectedFiles.value.some(
        (file: File) => file.name === currFile.name
      );

      if (!isDuplicate) {
        selectedFiles.value.push(currFile);
      }
    }
  }
}

// removes the image from the selectedFiles array
function removeImage(index: string) {
  if (selectedFiles) {
    const newFiles = [...selectedFiles.value!].filter(
      (file: File) => file.name !== index
    );
    selectedFiles.value = newFiles;
  }
}

// loads the image from the file input and display it in the UI
function loadItemImage(imageItem: File): string {
  return URL.createObjectURL(imageItem);
}
</script>

<template>
  <div class="flex flex-col lg:px-[12%] my-4 mx-4 lg:mx-0">
    <div class="flex justify-between items-center px-4">
      <h2 class="text-2xl font-normal">{{ $t('Add Item') }}</h2>
    </div>

    <VeeForm @submit="saveItem">
      <div
        class="flex flex-col my-4 gap-6 shadow-sm p-4 rounded-xl bg-base-100"
      >
        <div class="text-gray-700 md:flex">
          <div class="mb-1 md:mb-0 md:w-1/3 prose">
            <label>Product Photos</label>
          </div>

          <div class="md:w-2/3 md:flex-grow flex flex-col gap-4">
            <div class="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-34 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
              v-if="selectedFiles"
              class="grid grid-cols-2 gap-4 mt-4 md:grid-cols-6"
            >
              <div
                v-for="imageItem in selectedFiles"
                :key="imageItem.name"
                class="relative md:h-24 flex flex-col items-center overflow-hidden text-center border border-base-300 rounded cursor-pointer select-none hover:shadow hover:border-base-200"
              >
                <button
                  class="btn btn-circle btn-xs absolute top-1 right-1 z-50 bg-base-100"
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
                  class="inset-0 z-0 object-cover w-full h-full border-4 border-base-100"
                  :src="loadItemImage(imageItem)"
                />
                <span
                  class="absolute bg-base-100 p-1 bg-opacity-80 bottom-0 z-50 text-xs text-base-content dark:text-gray-400"
                >
                  {{ imageItem.name.substring(0, 15) }}
                </span>
              </div>
            </div>
            <VeeErrorMessage name="files" />
          </div>
        </div>

        <hr class="border-base-200" />

        <div class="text-gray-700 md:flex">
          <div class="mb-1 md:mb-0 md:w-1/3 prose">
            <label>Product Name</label>
          </div>
          <div class="md:w-2/3 md:flex-grow">
            <VeeField
              class="input input-bordered w-full text-base"
              type="text"
              placeholder="Product name"
              name="name"
              :rules="required"
            />
            <VeeErrorMessage name="name" class="error" />
          </div>
        </div>

        <div class="text-gray-700 md:flex">
          <div class="mb-1 md:mb-0 md:w-1/3 prose">
            <label>Description</label>
          </div>
          <div class="md:w-2/3 md:flex-grow">
            <VeeField
              as="textarea"
              placeholder="Description ..."
              class="textarea textarea-bordered w-full"
              name="description"
            ></VeeField>
          </div>
        </div>

        <div class="text-gray-700 md:flex">
          <div class="mb-1 md:mb-0 md:w-1/3">
            <label>Category</label>
          </div>
          <div class="md:w-2/3 md:flex-grow">
            <VeeField
              as="select"
              class="select select-bordered"
              name="category"
            >
              <option value="" selected>Category</option>
              <option value="Arbaminch">Arbaminch</option>
              <option value="Hawassa">Hawassa</option>
              <option value="Soddo">Soddo</option>
            </VeeField>
          </div>
        </div>

        <div class="md:flex">
          <div class="mb-1 md:mb-0 md:w-1/3 prose">
            <label>Price</label>
          </div>
          <div class="md:w-2/3 md:flex-grow">
            <div class="join">
              <div>
                <VeeField
                  name="price"
                  type="number"
                  class="input input-bordered join-item w-80 focus:outline-none appearance-none"
                  placeholder="Price"
                  v-model="price"
                />
              </div>
              <div
                class="join-item border border-base-300 flex items-center px-4 bg-base-100"
              >
                <span class="text-base-content text-sm">ETB</span>
              </div>
            </div>
          </div>
        </div>

        <div class="text-gray-700 md:flex">
          <div class="mb-1 md:mb-0 md:w-1/3 flex flex-col prose">
            <label>City</label>
            <label class="text-xs opacity-60 hover:opacity-80"
              >Where are you located?{{ city }}</label
            >
          </div>
          <div class="md:w-2/3 md:flex-grow">
            <div class="join">
              <div>
                <VeeField
                  as="select"
                  name="city"
                  class="select select-bordered join-item"
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

        <div class="text-gray-700 md:flex">
          <div class="mb-1 md:mb-0 md:w-1/3"></div>
          <div class="md:w-2/3 md:flex-grow flex gap-4">
            <button type="submit" class="btn btn-primary">Publish now</button>
            <button class="btn">Save Draft</button>
            <button type="reset" class="btn btn-secondary">Reset</button>
          </div>
        </div>
      </div>
    </VeeForm>
  </div>
</template>
