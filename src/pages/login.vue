<script setup lang="ts">
const client = useSupabaseClient();
const email = ref("");
const password = ref("");

const errorMessage = ref("");

async function loginWithPassword() {
  errorMessage.value = "";
  try {
    const { error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) {
      throw error;
    }

    navigateTo("/");
  } catch (error: any) {
    errorMessage.value = error.message;
  }
}

async function loginWithAuth() {
  errorMessage.value = "";
  try {
    const { error } = await client.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      throw error;
    }
  } catch (error: any) {
    errorMessage.value = error.message;
  }
}
</script>

<template>
  <div class="flex h-full flex-col justify-center overflow-hidden">
    <div
      class="m-auto my-8 w-11/12 rounded-md bg-base-100 p-6 shadow-md lg:max-w-lg"
    >
      <h1 class="text-content-base text-2xl font-semibold">
        {{ $t("Sign in to your account") }}
      </h1>
      <hr class="my-4" />

      <div v-if="errorMessage" role="alert" class="alert alert-error">
        <icon name="material-symbols:close" class="h-6 w-6" />
        <span>{{ errorMessage }}</span>
      </div>
      <form @submit.prevent="loginWithPassword" class="space-y-4">
        <div>
          <label class="label">
            <span class="label-text text-base">{{ $t("Email") }}</span>
          </label>
          <input
            type="email"
            :placeholder="$t('Email Address')"
            class="input input-bordered w-full"
            v-model="email"
            required
          />
        </div>
        <div>
          <label class="label">
            <span class="label-text text-base">{{ $t("Password") }}</span>
          </label>
          <input
            type="password"
            placeholder="••••••••"
            class="input input-bordered w-full"
            v-model="password"
            required
          />
        </div>
        <a
          href="#"
          class="text-xs text-gray-600 hover:text-blue-600 hover:underline"
          >{{ $t("Forget Password?") }}</a
        >
        <div>
          <button class="btn btn-primary btn-block">{{ $t("Login") }}</button>
        </div>
        <div class="flex items-center space-x-2">
          <span class="h-px w-full bg-gray-400"></span>
          <span class="text-sm text-gray-500">{{ $t("or") }}</span>
          <span class="h-px w-full bg-gray-400"></span>
        </div>
        <div>
          <button class="btn btn-block" @click="loginWithAuth">
            <icon name="logos:google-icon" size="1.2rem" />
            {{ $t("Login with Google") }}
          </button>
        </div>

        <span class="text-center text-sm text-gray-600"
          >{{ $t("Don't have an account yet?") }}
          <nuxt-link
            to="/register"
            class="text-blue-600 hover:text-blue-800 hover:underline"
          >
            {{ $t("Register") }}
          </nuxt-link></span
        >
      </form>
    </div>
  </div>
</template>
