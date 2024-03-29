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
              <nuxt-img
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

        <ul class="menu w-full rounded-box bg-base-200 p-0">
          <li>
            <nuxt-link to="/" :class="{ active: $route.path === '/' }">
              <icon name="fa-solid:home" class="h-5 w-5" />
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/my-items"
              :class="{ active: $route.path === '/my-items' }"
            >
              <icon name="material-symbols:lists" class="h-5 w-5" />
              My items
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/my-items/add"
              :class="{ active: $route.path === '/my-items/add' }"
            >
              <icon name="ic:outline-plus" class="h-5 w-5" />
              Add item
            </nuxt-link>
          </li>

          <li>
            <nuxt-link
              to="/about"
              :class="{ active: $route.path === '/about' }"
            >
              About
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/contact"
              :class="{ active: $route.path === '/contact' }"
            >
              Contact
            </nuxt-link>
          </li>
        </ul>

        <div v-if="user" class="divider"></div>

        <div v-if="user">
          <li>
            <nuxt-link to="#">
              <icon name="material-symbols:account-circle" class="h-5 w-5" />
              Profile
              <span class="badge">New</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/settings">
              <icon
                name="material-symbols-light:settings-rounded"
                class="h-5 w-5"
              />
              Settings
            </nuxt-link>
          </li>
          <li>
            <nuxt-link @click.prevent="logout">
              <icon name="tabler:logout-2" class="h-5 w-5" />
              Logout
            </nuxt-link>
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
