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

<template>
  <header class="navbar bg-base-100 pr-4 shadow lg:px-[12%]">
    <div class="navbar-start">
      <label
        for="my-drawer"
        class="btn btn-ghost drawer-button md:hidden"
        aria-label="toggle drawer"
      >
        <icon name="heroicons:bars-3-center-left-16-solid" size="1.3rem" />
      </label>
      <div class="hidden md:dropdown">
        <div
          tabindex="0"
          role="button"
          aria-label="toggle menu"
          class="btn btn-ghost lg:hidden"
        >
          <icon name="heroicons:bars-3-center-left-16-solid" size="1.3rem" />
        </div>
        <ul
          tabindex="0"
          class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
        >
          <li><nuxt-link to="/"> Home </nuxt-link></li>
          <li><nuxt-link to="/about"> About </nuxt-link></li>
          <li><nuxt-link to="/contact"> Contact </nuxt-link></li>
          <li><nuxt-link to="/my-items">My Items</nuxt-link></li>
        </ul>
      </div>
      <nuxt-link to="/" class="btn btn-ghost text-xl">
        <nuxt-img src="/logo.svg" alt="Nuxt Logo" width="32px" class="w-8" />
        <span class="hidden lg:flex">{{ $t("ethresale") }}</span>
      </nuxt-link>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal gap-2 px-1">
        <li>
          <nuxt-link to="/about"> {{ $t("about_title") }} </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact"> {{ $t("contact_title") }} </nuxt-link>
        </li>
        <li v-if="user"><nuxt-link to="/my-items">My Items</nuxt-link></li>
      </ul>
    </div>
    <div class="navbar-end gap-2">
      <ThemeSwitcher />
      <div class="dropdown dropdown-end h-8">
        <div tabindex="0" role="button" class="btn btn-circle btn-ghost btn-sm">
          <div class="indicator">
            <icon name="mdi:cart-outline" class="h-5 w-5" />
            <span class="badge indicator-item badge-accent badge-sm">8</span>
          </div>
        </div>
        <div
          tabindex="0"
          class="card dropdown-content card-compact z-[1] mt-3 w-52 bg-base-100 shadow"
        >
          <div class="card-body">
            <span class="text-lg font-bold">8 Items</span>
            <span class="text-info">Subtotal: $999</span>
            <div class="card-actions">
              <button class="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div>

      <nuxt-link v-if="!user" to="/login" class="btn btn-sm">
        {{ $t("Sign in") }}
      </nuxt-link>
      <LangSwitcher class="hidden md:block" />
      <div v-if="user" class="dropdown-end hidden md:dropdown">
        <div tabindex="0" role="button" class="avatar btn btn-circle btn-ghost">
          <div class="w-10 rounded-full">
            <nuxt-img
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <ul
          tabindex="0"
          class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
        >
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><nuxt-link to="/settings">Settings</nuxt-link></li>
          <li>
            <a @click.prevent="logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
