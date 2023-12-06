<template>
  <section class="hero">
    <div class="hero__form">
      <h3>Buy and Sell Second Hand Used Products | EthResale</h3>
      <form action="">
        <DropDownInput />
        <input type="search" placeholder="Name">
        <button><Icon name="fa-solid:search" size="1.1rem" /></button>
      </form>
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
      padding-top: 2rem;

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

      h3 {
        font-size: 1rem;
        color: var(--text-color);
        margin-bottom: 1rem;
      }
    }

    &__categories {
      flex-basis: 50%;
    }
  }
</style>
