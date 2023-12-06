<template>
  <section class="hero">
    <div class="hero__form">
      <h3>Buy and Sell Second Hand or Used Products</h3>
      <form action="">
        <DropDownInput />
        <input type="search" placeholder="Name">
        <button><Icon name="fa-solid:search" size="1.1rem" /></button>
      </form>
      <button>
        <Icon name="material-symbols:box-edit-outline" size="1.2rem" />
        <span>Post Ad to Sell Used Second Hand Product</span>
      </button>
      <button>
        <Icon name="material-symbols:list-rounded" size="1.3rem" />
        <span>Find and Buy All Second Hand Products for Sale</span>
      </button>
    </div>
    <div class="hero__categories">
      <p>Main Second Hand Products Categories</p>
      <div class="hero__categories__wrapper">
        <NuxtLink v-for="category in categories" :key="category.id" :to="category.link">
          <Icon :name="category.icon" size="1.7rem" />
          <span>{{ category.name }}</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      categories: [
        { id: 1, name: 'Mobile Phones', link: 'categories/mobilephones', icon: 'fa-solid:mobile' },
        { id: 2, name: 'Cars', link: 'categories/cars', icon: 'fa-solid:car' },
        { id: 3, name: 'Motorcycles', link: 'categories/motorcycles', icon: 'fa-solid:motorcycle' },
        { id: 4, name: 'Houses', link: 'categories/houses', icon: 'fa-solid:home' },
        { id: 5, name: 'TV-Video-Audio', link: 'categories/tv', icon: 'fa-solid:tv' },
        { id: 6, name: 'Tablets', link: 'categories/tablets', icon: 'fa-solid:tablet' },
        { id: 7, name: 'Land & Plots', link: 'categories/landandplots', icon: 'fa6-solid:landmark' },
        { id: 8, name: 'Games', link: 'categories/videogames', icon: 'fa-solid:gamepad' },
        { id: 18, name: 'Computers', link: 'categories/computers', icon: 'fa-solid:desktop' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .hero {
    display: flex;
    min-height: 45vh;
    background-color: #eee;
    color: #fff;
    font-weight: 700;
    padding: 0 var(--padding-x);

    &__form {
      flex-basis: 50%;
      align-items: flex-start;
      border-radius: 5px;
      padding: 2rem 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h3 {
        font-size: 1.3rem;
        font-weight: 100;
        color: var(--primary-color);
      }

      form {
        display: flex;
        width: 100%;
        padding: 1rem;
        background-color: var(--primary-color);
        border-radius: var(--border-radius);

        div {
          flex-basis: 20%;
        }

        input {
          flex-basis: 65%;
          border-top-right-radius: 0px;
          border-bottom-right-radius: 0px;
          margin-left: 0.6rem;
        }

        button {
          flex-basis: 15%;
          border-radius: 0 50px 50px 0;
          background-color: var(--primary-color);
          border: var(--input-border);
          border-left: none;
          color: #fff;

          &:hover {
            background-color: var(--secondary-color);
            border-color: var(--secondary-color);
          }
        }
      }

      > button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background-color: var(--secondary-color);
        border: var(--input-border);
        border-radius: var(--border-radius);
        padding: 0.5rem 1rem;
        color: #fff;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;

        &:hover {
          background-color: var(--primary-color);
          border-color: var(--primary-color);
        }
      }
    }

    &__categories {
      flex-basis: 50%;
      display: flex;
      gap: 1rem;
      flex-direction: column;
      padding: 3rem 1rem 1rem 1rem;

      p {
        font-size: 1rem;
        font-weight: 100;
        color: var(--text-color);
      }

      &__wrapper {
        display: grid;
        // grid-template-columns: repeat(3, 1fr);
        // display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));

        gap: 0.5rem;

        a {
          padding: 0.3rem;
          font-size: 0.8rem;
          font-weight: 200;
          text-decoration: none;
          color: var(--text-color);
          border: var(--input-border);
          border-radius: var(--border-radius);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          min-width: 120px;
          transition: all 0.2s ease-in-out;

          &:hover {
            background-color: var(--primary-color);
            color: #fff;
            padding-left: 0.5rem;
          }
        }
      }
    }
  }
</style>
