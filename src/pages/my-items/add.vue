<template>
  <div class="mx-4 my-4 flex flex-col lg:mx-0 lg:px-[12%]">
    <div class="flex items-center justify-between px-4">
      <h2 class="text-2xl font-normal">{{ $t("Add Item") }}</h2>
    </div>

    <form @submit.prevent="saveItem">
      <div
        class="my-4 flex flex-col gap-6 rounded-b-xl bg-base-100 p-4 shadow-sm"
      >
        <VueInput
          type="text"
          id="title"
          value=""
          placeholder="Item Title"
          label="Title"
          name="title"
          v-model="model.title"
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
              v-if="model.selectedFiles"
              class="mt-4 grid grid-cols-2 gap-4 md:grid-cols-6"
            >
              <div
                v-for="imageItem in model.selectedFiles"
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

        <div class="text-gray-700 md:flex">
          <div class="prose mb-1 md:mb-0 md:w-1/3">
            <label>Description</label>
          </div>
          <div class="md:w-2/3 md:flex-grow">
            <textarea
              as="textarea"
              placeholder="Description ..."
              class="textarea textarea-bordered w-full"
              name="description"
              v-model="model.description"
            ></textarea>
          </div>
        </div>

        <div class="md:flex">
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
                  v-model="model.price"
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
              >Where are you located?{{ model.city }}</label
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

        <div class="text-gray-700 md:flex">
          <div class="mb-1 md:mb-0 md:w-1/3"></div>
          <div class="flex gap-4 md:w-2/3 md:flex-grow">
            <button type="submit" class="btn btn-primary">Publish now</button>
            <button class="btn">Save Draft</button>
            <button type="reset" class="btn btn-secondary">Reset</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
interface ItemModel {
  title: string;
  description: string;
  category: string;
  price: number;
  city: string;
  selectedFiles: File[];
}

const model = ref<ItemModel>({
  title: "",
  description: "",
  category: "",
  price: 0,
  city: "",
  selectedFiles: [],
});

// saves the item to the database
function saveItem(values: any) {
  console.log("Save Item", values);
}

// adds the image to the selectedFiles array
function onFileChange(event: Event) {
  const { files } = event.target as HTMLInputElement;
  if (
    files !== null &&
    files!.length > 0 &&
    model.value.selectedFiles.length < 6
  ) {
    for (let i = 0; i < files.length; i++) {
      const currFile: File = files.item(i)!;

      const isDuplicate = model.value.selectedFiles.some(
        (file: File) => file.name === currFile.name,
      );

      if (!isDuplicate) {
        model.value.selectedFiles.push(currFile);
      }
    }
  }
}

// removes the image from the selectedFiles array
function removeImage(index: string) {
  if (model.value.selectedFiles) {
    const newFiles = [...model.value.selectedFiles!].filter(
      (file: File) => file.name !== index,
    );
    model.value.selectedFiles = newFiles;
  }
}

// loads the image from the file input and display it in the UI
function loadItemImage(imageItem: File): string {
  return URL.createObjectURL(imageItem);
}

// Form validation rules

function isRequired(value: string) {
  if (!value) {
    return "This field is required";
  }

  return true;
}

function notEmpty(value: string) {
  if (value.trim() === "") {
    return "This field is required";
  }

  return true;
}
</script>
