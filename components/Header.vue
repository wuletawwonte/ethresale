<script setup lang="ts">
const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
</script>

<template>
  <header class="navbar bg-base-100 shadow lg:px-48">
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
          <li>
            <a>Parent</a>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><nuxt-link to="/about"> About </nuxt-link></li>
          <li><nuxt-link to="/contact"> Contact </nuxt-link></li>
        </ul>
      </div>
      <nuxt-link to="/" class="btn btn-ghost text-xl">
        <img src="/logo.svg" alt="Nuxt Logo" class="w-8" />
        <span>ethresale</span>
      </nuxt-link>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><nuxt-link to="/"> Home </nuxt-link></li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li><nuxt-link to="/about"> About </nuxt-link></li>
        <li><nuxt-link to="/contact"> Contact </nuxt-link></li>
      </ul>
    </div>
    <div class="navbar-end gap-4">
      <label class="swap swap-rotate">
        <input
          type="checkbox"
          :checked="colorMode.value === 'dark'"
          @change="toggleTheme"
        />

        <icon name="fa-solid:sun" size="1.2rem" class="swap-on" />
        <icon name="fa-solid:moon" size="1.2rem" class="swap-off" />
      </label>
      <nuxt-link class="btn btn-sm"> Sign in </nuxt-link>
      <nuxt-link class="btn btn-sm btn-ghost"> Register to sell </nuxt-link>
    </div>
  </header>
</template>
