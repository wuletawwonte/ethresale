<template>
  <footer class="footer items-center bg-base-300 p-4 text-base-content">
    <aside class="grid-flow-col items-center">
      <icon name="heroicons:hashtag-16-solid" size="2.5rem" />
      <p>
        {{ $t("Copyright") }} © {{ new Date().getFullYear() }} -
        {{ $t("All rights reserved") }}
      </p>
    </aside>
    <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <nuxt-link
        href="https://twitter.com/wuletaww"
        target="_blank"
        aria-label="twitter link"
      >
        <icon name="fa-brands:twitter" size="1.5rem" />
      </nuxt-link>
      <nuxt-link
        href="https://www.linkedin.com/in/wuletaw-wonte"
        target="_blank"
        aria-label="linkedin link"
      >
        <icon name="fa-brands:linkedin" size="1.5rem" />
      </nuxt-link>
      <nuxt-link
        href="https://github.com/wuletawwonte"
        target="_blank"
        aria-label="github link"
      >
        <icon name="fa-brands:github" size="1.5rem" />
      </nuxt-link>
    </nav>
  </footer>
</template>
