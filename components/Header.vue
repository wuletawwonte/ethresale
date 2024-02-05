<script setup lang="ts">
const client = useSupabaseClient();
const user = useSupabaseUser();

const logout = async () => {
  const { error } = await client.auth.signOut();

  if (error) {
    console.log(error);
  }

  navigateTo('/login');
};
</script>

<template>
  <header class="navbar bg-base-100 shadow lg:px-[12%]">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <icon name="heroicons:bars-3-center-left-16-solid" size="1.3rem" />
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><nuxt-link to="/"> Home </nuxt-link></li>
          <li><nuxt-link to="/about"> About </nuxt-link></li>
          <li><nuxt-link to="/contact"> Contact </nuxt-link></li>
          <li>
            <a>Parent</a>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <nuxt-link to="/" class="btn btn-ghost text-xl">
        <img src="/logo.svg" alt="Nuxt Logo" class="w-8" />
        <span class="hidden lg:flex">{{ $t('ethresale') }}</span>
      </nuxt-link>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li>
          <nuxt-link to="/about"> {{ $t('about_title') }} </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact"> {{ $t('contact_title') }} </nuxt-link>
        </li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
    <div class="navbar-end gap-2">
      <button class="btn btn-sm btn-ghost btn-circle">
        <icon name="ph:magnifying-glass-bold" size="1.3rem" />
      </button>
      <ThemeSwitcher />
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-sm btn-ghost btn-circle">
          <div class="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span class="badge badge-sm indicator-item">8</span>
          </div>
        </div>
        <div
          tabindex="0"
          class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          <div class="card-body">
            <span class="font-bold text-lg">8 Items</span>
            <span class="text-info">Subtotal: $999</span>
            <div class="card-actions">
              <button class="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div>

      <nuxt-link v-if="!user" to="/login" class="btn btn-sm">
        {{ $t('Sign in') }}
      </nuxt-link>
      <LangSwitcher />
      <div v-if="user" class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <ul
          tabindex="0"
          class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li>
            <a @click.prevent="logout">{{ $t('Logout') }}</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
