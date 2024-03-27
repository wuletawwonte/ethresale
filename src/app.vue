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
