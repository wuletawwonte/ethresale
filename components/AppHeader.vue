<template>
  <header>
    <nuxt-link to="/">
      <img src="/logo.svg" alt="Nuxt Logo">
      <span>ethresale</span>
    </nuxt-link>
    <nav>
      <nuxt-link to="/">
        Home
      </nuxt-link> |
      <nuxt-link to="/about">
        About
      </nuxt-link> |
      <nuxt-link to="/contact">
        Contact
      </nuxt-link>
    </nav>
  </header>
</template>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 8rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-size: 1.1rem;
  }

  header > a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: #000;
  }

  img {
    width: 50px;
  }

  img:hover {
    transform: scale(1.08);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.5s ease-in-out;
    transition: box-shadow 0.5s ease-in-out;
  }

  nav {
    display: flex;
    gap: 1rem;
  }

  nav a {
    text-decoration: none;
    color: #000;
  }

  nav a:hover {
    color: var(--primary-color);
  }
</style>
