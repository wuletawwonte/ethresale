<template>
  <footer class="footer items-center p-4 bg-base-300 text-base-content">
    <aside class="items-center grid-flow-col">
      <icon name="heroicons:hashtag-16-solid" size="2.5rem" />
      <p>Copyright © {{ new Date().getFullYear() }} - All right reserved</p>
    </aside>
    <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <nuxt-link>
        <icon name="fa-brands:twitter" size="1.5rem" />
      </nuxt-link>
      <nuxt-link>
        <icon name="fa-brands:linkedin" size="1.5rem" />
      </nuxt-link>
      <nuxt-link>
        <icon name="fa-brands:github" size="1.5rem" />
      </nuxt-link>
    </nav>
  </footer>
</template>
