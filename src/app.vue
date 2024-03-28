<template>
  <VitePwaManifest />
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <Drawer>
      <div>
        <Header />
        <NuxtPage />
      </div>
      <Footer />
    </Drawer>
  </NuxtLayout>
</template>

<style>
/* Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
