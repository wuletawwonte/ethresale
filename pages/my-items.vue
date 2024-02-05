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
      .eq('user_id', user.value.id)
      .order('created_at');
  },
  { transform: (result) => result.data }
);
</script>

<template>
  <div class="flex flex-col lg:px-[12%] my-4">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl font-normal">{{ $t('My Items') }}</h2>
      <button class="btn btn-ghost btn-sm btn-outline">
        <icon name="heroicons:plus-16-solid" size="1.3rem" />
        <span>{{ $t('Add Item') }}</span>
      </button>
    </div>

    <div class="flex h-24 my-4 bg-base-100 shadow-sm">
      <input
        type="text"
        placeholder="Type here"
        class="input input-bordered input-md w-full max-w-xs"
      />
    </div>

    <div v-if="myItems">
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
    </div>
  </div>
</template>
