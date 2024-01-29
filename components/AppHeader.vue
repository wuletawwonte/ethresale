<template>
  <header>
    <div class="left">
      <nuxt-link to="/">
        <img src="/logo.svg" alt="Nuxt Logo" />
        <span>ethresale</span>
      </nuxt-link>
      <nav>
        <nuxt-link to="/"> Home </nuxt-link>
        <nuxt-link to="/about"> About </nuxt-link>
        <nuxt-link to="/contact"> Contact </nuxt-link>
      </nav>
    </div>
    <div class="right">
      <nuxt-link to="/register"> Sign in </nuxt-link>
      <div>
        <nuxt-link to="/login">
          <button>Sign up for free</button>
        </nuxt-link>
      </div>
    </div>
  </header>
</template>
