<script setup lang="ts"></script>

<template>
  <div class="flex flex-col lg:px-[12%] my-4 mx-4 lg:mx-0">
    <div class="flex justify-between items-center px-4">
      <h2 class="text-2xl font-normal">{{ $t('Add Item') }}</h2>
    </div>

    <div class="flex flex-col my-4 gap-6 shadow-sm p-4 rounded-xl bg-base-100">
      <div class="text-gray-700 md:flex">
        <div class="mb-1 md:mb-0 md:w-1/3 prose">
          <label>Product Photos</label>
        </div>
        <div class="md:w-2/3 md:flex-grow">
          <button class="btn">Add a Picture</button>
        </div>
      </div>

      <hr class="border-base-200" />

      <div class="text-gray-700 md:flex">
        <div class="mb-1 md:mb-0 md:w-1/3 prose">
          <label>Product Name</label>
        </div>
        <div class="md:w-2/3 md:flex-grow">
          <input
            class="input input-bordered w-full text-base"
            type="text"
            placeholder="Product name"
          />
        </div>
      </div>

      <div class="text-gray-700 md:flex">
        <div class="mb-1 md:mb-0 md:w-1/3 prose">
          <label>Description</label>
        </div>
        <div class="md:w-2/3 md:flex-grow">
          <textarea
            placeholder="Description"
            class="textarea textarea-bordered w-full"
          ></textarea>
        </div>
      </div>

      <div class="text-gray-700 md:flex">
        <div class="mb-1 md:mb-0 md:w-1/3 prose">
          <label>Category</label>
        </div>
        <div class="md:w-2/3 md:flex-grow">
          <select class="select select-bordered join-item">
            <option disabled selected>Category</option>
            <option>Active</option>
            <option>Pending</option>
            <option>Sold</option>
          </select>
        </div>
      </div>

      <div class="text-gray-700 md:flex">
        <div class="mb-1 md:mb-0 md:w-1/3 prose">
          <label>Price</label>
        </div>
        <div class="md:w-2/3 md:flex-grow">
          <div class="join">
            <div>
              <div>
                <input
                  type="number"
                  class="input input-bordered join-item w-80"
                  placeholder="Price"
                />
              </div>
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
            >Where is your Product?</label
          >
        </div>
        <div class="md:w-2/3 md:flex-grow">
          <div class="join">
            <div>
              <select class="select select-bordered join-item">
                <option disabled selected>City</option>
                <option>Active</option>
                <option>Pending</option>
                <option>Sold</option>
              </select>
            </div>
            <button class="btn join-item">Use Geo Location</button>
          </div>
        </div>
      </div>

      <div class="text-gray-700 md:flex">
        <div class="mb-1 md:mb-0 md:w-1/3"></div>
        <div class="md:w-2/3 md:flex-grow flex gap-4">
          <button class="btn btn-primary">Publish now</button>
          <button class="btn">Save Draft</button>
        </div>
      </div>
    </div>
  </div>
</template>
