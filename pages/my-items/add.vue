<script setup lang="ts"></script>

<template>
  <div class="flex flex-col lg:px-[12%] my-4">
    <div class="flex justify-between items-center px-4">
      <h2 class="text-2xl font-normal">{{ $t('Add Item') }}</h2>
      <nuxt-link to="/my-items/add" class="btn btn-primary btn-sm">
        <icon name="mdi:content-save" size="1.3rem" />
        <span>{{ $t('Save') }}</span>
      </nuxt-link>
    </div>

    <div class="flex flex-col my-4 gap-4 shadow-sm p-4 rounded-xl bg-base-100">
      <div class="text-gray-700 md:flex md:items-center">
        <div class="mb-1 md:mb-0 md:w-1/3">
          <label>Full name</label>
        </div>
        <div class="md:w-2/3 md:flex-grow">
          <input
            class="input input-bordered w-full h-10 px-3 text-base"
            type="text"
            placeholder="Regular input"
          />
        </div>
      </div>

      <div class="join">
        <div>
          <div>
            <input
              class="input input-bordered join-item rounded-full w-80"
              placeholder="Search by City, Name or Description..."
            />
          </div>
        </div>
        <select class="select select-bordered join-item">
          <option disabled selected>Filter</option>
          <option>Active</option>
          <option>Pending</option>
          <option>Sold</option>
        </select>
        <div class="indicator">
          <button class="btn join-item rounded-full">Search</button>
        </div>
      </div>
    </div>
  </div>
</template>
