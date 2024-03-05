<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <div class="flex flex-col min-h-screen justify-between bg-base-200">
      <div>
        <Header />
        <NuxtPage />
      </div>
      <Footer />
    </div>
  </NuxtLayout>
</template>
