<script setup lang="ts">
const client = useSupabaseClient();
const router = useRouter();
const email = ref('');
const password = ref('');

const errorMessage = ref('');

async function loginHandler() {
  errorMessage.value = '';
  try {
    const { error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) {
      throw error;
    }

    navigateTo('/');
  } catch (error: any) {
    errorMessage.value = error.message;
  }
}
</script>

<template>
  <div class="flex flex-col justify-center h-full overflow-hidden">
    <div
      class="my-8 w-11/12 p-6 m-auto bg-base-100 rounded-md shadow-md lg:max-w-lg"
    >
      <h1 class="text-2xl font-semibold text-content-base">
        Sign in to your account
      </h1>
      <hr class="my-4" />

      <div v-if="errorMessage" role="alert" class="alert alert-error">
        <icon name="material-symbols:close" class="w-6 h-6" />
        <span>{{ errorMessage }}</span>
      </div>
      <form @submit.prevent="loginHandler" class="space-y-4">
        <div>
          <label class="label">
            <span class="text-base label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email Address"
            class="w-full input input-bordered"
            v-model="email"
            required
          />
        </div>
        <div>
          <label class="label">
            <span class="text-base label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="••••••••"
            class="w-full input input-bordered"
            v-model="password"
            required
          />
        </div>
        <a
          href="#"
          class="text-xs text-gray-600 hover:underline hover:text-blue-600"
          >Forget Password?</a
        >
        <div>
          <button class="btn btn-block btn-primary">Login</button>
        </div>
        <div class="flex items-center space-x-2">
          <span class="h-px bg-gray-400 w-full"></span>
          <span class="text-sm text-gray-500">or</span>
          <span class="h-px bg-gray-400 w-full"></span>
        </div>
        <div>
          <button class="btn btn-block">
            <icon name="logos:google-icon" size="1.2rem" />
            Login with Google
          </button>
        </div>

        <span class="text-sm text-center text-gray-600"
          >Don’t have an account yet?
          <nuxt-link
            to="/register"
            class="text-blue-600 hover:text-blue-800 hover:underline"
            >Register
          </nuxt-link></span
        >
      </form>
    </div>
  </div>
</template>
