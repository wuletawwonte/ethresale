<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div
      class="drawer-content flex min-h-screen flex-col justify-between bg-base-200"
    >
      <slot></slot>
    </div>

    <div class="drawer-side z-10 md:hidden">
      <label
        for="my-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>

      <ul class="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
        <div v-if="user" class="flex items-center gap-3">
          <div class="avatar">
            <div class="mask mask-squircle h-12 w-12">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div class="font-bold">Hart Hagerty</div>
            <div class="text-sm opacity-50">United States</div>
          </div>
        </div>

        <div v-if="user" class="divider"></div>

        <li><nuxt-link to="/"> Home </nuxt-link></li>
        <li><nuxt-link to="/about"> About </nuxt-link></li>
        <li><nuxt-link to="/contact"> Contact </nuxt-link></li>
        <li><nuxt-link to="/my-items">My Items</nuxt-link></li>

        <div v-if="user" class="divider"></div>

        <div v-if="user">
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li>
            <a @click.prevent="logout">Logout</a>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const client = useSupabaseClient();
const user = useSupabaseUser();

const logout = async () => {
  const { error } = await client.auth.signOut();

  if (error) {
    console.log(error);
  }

  navigateTo("/login");
};
</script>
