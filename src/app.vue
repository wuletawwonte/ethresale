<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <div class="drawer flex min-h-screen flex-col justify-between bg-base-200">
      <div>
        <Header />
        <NuxtPage />
      </div>
      <Footer />
    </div>
  </NuxtLayout>
</template>
