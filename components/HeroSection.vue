<template>
  <section class="hero">
    <div class="hero__form">
      <h3>Buy and Sell Second Hand Used Products | EthResale</h3>
      <form action="">
        <input type="text" placeholder="Name" >
        <input type="email" placeholder="Email" >
        <textarea name="message" id="message" placeholder="Message"></textarea>
        <button>Send</button>
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
      border: 1px solid #fff;

      h3 {
        font-size: 1rem;
        color: var(--text-color);
        margin-bottom: 1rem;
      }
    }

    &__categories {
      flex-basis: 50%;
      border: 1px solid red;
    }
  }
</style>
