<script setup lang="js">
const { locale, locales, setLocale } = useI18n();
</script>

<template>
  <div title="Change Language" class="dropdown dropdown-end">
    <div
      tabindex="0"
      role="button"
      class="btn btn-ghost btn-sm"
      aria-label="Language"
    >
      <icon name="ion:language" size="1.2rem" />
      <icon name="mdi:chevron-down" />
    </div>
    <div
      tabindex="0"
      class="dropdown-content bg-base-200 text-base-content rounded-box top-px mt-16 max-h-[calc(100vh-10rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5"
    >
      <ul class="menu menu-sm gap-1">
        <li v-for="lang in locales" :key="lang.key">
          <button
            @click="setLocale(lang.code)"
            :class="lang.code === locale ? 'active' : ''"
          >
            <span
              class="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50 uppercase"
              >{{ lang.code }}</span
            >
            <span class="font-[sans-serif]">{{ lang.name }}</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
