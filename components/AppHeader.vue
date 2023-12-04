<template>
  <header>
    <div class="left">
      <nuxt-link to="/">
        <img src="/logo.svg" alt="Nuxt Logo">
        <span>ethresale</span>
      </nuxt-link>
      <nav>
        <nuxt-link to="/">
          Home
        </nuxt-link>
        <nuxt-link to="/about">
          About
        </nuxt-link>
        <nuxt-link to="/contact">
          Contact
        </nuxt-link>
      </nav>
    </div>
    <div class="right">
      <nuxt-link to="/register">
        Sign in
      </nuxt-link>
      <div>
        <nuxt-link to="/login">
          <button>Sign up for free</button>
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem var(--padding-x);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

    .left {
      display: flex;
      gap: 4rem;
      font-size: 1.1rem;
      align-items: center;

      > a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
        color: #000;

        img {
          width: 50px;

          &:hover {
            transform: scale(1.08);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            transition: transform 0.5s ease-in-out;
            transition: box-shadow 0.5s ease-in-out;
          }
        }

      }

      nav {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        a {
          text-decoration: none;
          color: #000;
          font-size: 1rem;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          color: var(--text-color);
        }

        a:hover {
          color: black;
          background-color: #eee;
        }
      }

    }

    .right {
      display: flex;
      align-items: center;
      gap: 1rem;

      > a {
        text-decoration: none;
        color: var(--text-color);
        font-size: 1rem;
        padding: 0.3rem 0.8rem;
        border-radius: var(--border-radius);

        &:hover {
          color: black;
          background-color: #eee;
        }
      }

      button {
        padding: 0.3rem 0.8rem;
        border-radius: var(--border-radius);
        border: none;
        background-color: black;
        color: #fff;
        font-size: 0.9rem;
        cursor: pointer;

        &:hover {
          outline: 1px solid var(--primary-color);
        }
      }
    }
  }

</style>
