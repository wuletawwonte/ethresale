<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <div class="drawer">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div
        class="drawer-content flex min-h-screen flex-col justify-between bg-base-200"
      >
        <div>
          <Header />
          <NuxtPage />
        </div>
        <Footer />
      </div>

      <div class="drawer-side">
        <label
          for="my-drawer"
          aria-label="close sidebar"
          class="drawer-overlay"
        ></label>
        <ul class="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
          <!-- Sidebar content here -->
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      </div>
    </div>
  </NuxtLayout>
</template>
