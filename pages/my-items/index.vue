<script setup lang="ts">
import type { Database } from '~/types/supabase';
const user = useSupabaseUser();
const client = useSupabaseClient<Database>();

const { data: myItems } = await useAsyncData(
  'myItems',
  async () => {
    return await client
      .from('items')
      .select()

      .eq('user_id', user.value!.id)
      .order('created_at');
  },
  { transform: (result) => result.data }
);
</script>

<template>
  <div class="flex flex-col lg:px-[12%] my-4">
    <div class="flex justify-between items-center px-4">
      <h2 class="text-2xl font-normal">{{ $t('My Items') }}</h2>
      <nuxt-link to="/my-items/add" class="btn btn-ghost btn-sm btn-outline">
        <icon name="heroicons:plus-16-solid" size="1.3rem" />
        <span>{{ $t('Add Item') }}</span>
      </nuxt-link>
    </div>

    <div
      class="flex flex-row-reverse justify-between my-4 shadow-sm p-4 rounded-t-xl bg-base-100"
    >
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

      <div class="flex items-center gap-4">
        <div class="select select-bordered">
          <select>
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
        </div>
        <div class="text-sm text-opacity-50">
          {{ $t('Items per page') }}
        </div>
      </div>
    </div>

    <div v-if="myItems" class="bg-base-100 rounded-b-xl">
      <div v-if="myItems.length > 0" class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in myItems" :key="item.id">
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>
                <div class="flex items-center gap-3">
                  <div class="avatar">
                    <div class="mask w-12 h-12">
                      <img :src="item.image || ''" :alt="item.name || ''" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">{{ item.name }}</div>
                    <div class="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span class="badge badge-ghost badge-sm"
                  >Desktop Support Technician</span
                >
              </td>
              <td>Purple</td>
              <th>
                <button class="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
          <!-- foot -->
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>

      <div v-else class="flex justify-center items-center h-48">
        <div class="text-2xl text-opacity-50">
          {{ $t('No items found') }}
        </div>
      </div>
    </div>
  </div>
</template>
