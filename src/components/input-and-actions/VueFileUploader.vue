<template>
  <div class="text-gray-700">
    <div class="flex flex-col gap-4 md:flex-grow">
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
              <span class="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              JPG or PNG (MAX. 800x400px)
            </p>
          </div>
          <input
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
          class="group relative flex select-none flex-col items-center overflow-hidden rounded border border-base-300 text-center hover:border-base-200 hover:shadow md:h-24"
        >
          <button
            class="btn btn-circle btn-xs absolute right-2 top-2 z-50 hidden bg-base-100 group-hover:block"
            type="button"
            @click="removeImage(imageItem.name)"
          >
            <icon name="octicon:x" size="1rem" class="text-red-500"></icon>
          </button>
          <img
            class="inset-0 z-0 h-full w-full border-4 border-base-100 object-cover"
            :src="loadItemImage(imageItem)"
          />
          <span
            class="absolute bottom-0 z-50 hidden bg-base-100 bg-opacity-80 p-1 text-xs text-base-content group-hover:block dark:text-gray-400"
          >
            {{ imageItem.name.substring(0, 15) }}
          </span>
        </div>
      </div>
      <VeeErrorMessage name="files" />
    </div>
  </div>
</template>

<script setup lang="ts">
const itemModel = ref({
  selectedFiles: [] as File[],
});
const emit = defineEmits(["update:modelValue"]);

// adds the image to the selectedFiles array
function onFileChange(event: Event) {
  const { files } = event.target as HTMLInputElement;
  if (
    files !== null &&
    files!.length > 0 &&
    itemModel.value.selectedFiles.length < 10
  ) {
    for (let i = 0; i < files.length; i++) {
      const currFile: File = files.item(i)!;

      const isDuplicate = itemModel.value.selectedFiles.some(
        (file: File) => file.name === currFile.name,
      );

      if (!isDuplicate) {
        itemModel.value.selectedFiles.push(currFile);
        emit("update:modelValue", itemModel.value.selectedFiles);
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
