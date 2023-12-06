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
      <ul>
        <li>
          <a href="https://www.facebook.com/">
            <i class="fab fa-facebook">Facebook</i>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .hero {
    display: flex;
    height: 45vh;
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
    }
  }
</style>
