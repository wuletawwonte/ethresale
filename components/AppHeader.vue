<template>
  <header class="navbar bg-base-100 shadow-lg">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
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
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
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
    <div class="navbar-end">
      <nuxt-link to="/register" class="btn"> Sign in </nuxt-link>
    </div>
  </header>
</template>
