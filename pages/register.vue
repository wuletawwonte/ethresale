<script setup lang="ts">
const client = useSupabaseClient();
const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const errorMessage = ref('');
const successMessage = ref('');

const registerWithPassword = async () => {
  errorMessage.value = '';
  successMessage.value = '';
  try {
    const { error } = await client.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: { name: name.value },
      },
    });
    if (error) {
      throw error;
    }
    successMessage.value =
      'Registration successful. Check your inbox for a confirmation email.';
  } catch (error: any) {
    errorMessage.value = error.message;
  }
};

async function registerWithAuth() {
  errorMessage.value = '';
  try {
    const { error } = await client.auth.signInWithOAuth({
      provider: 'google',
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
  <div
    class="relative flex flex-col justify-center min-h-screen overflow-hidden py-8"
  >
    <div
      class="w-11/12 p-6 mx-auto bg-base-100 rounded-md shadow-md lg:max-w-xl"
    >
      <h1 class="text-2xl font-semibold text-center">Register</h1>
      <hr class="my-4" />

      <div v-if="errorMessage" role="alert" class="alert alert-error">
        <icon name="material-symbols:close" class="w-6 h-6" />
        <span>{{ errorMessage }}</span>
      </div>

      <div v-if="successMessage" role="alert" class="alert alert-success">
        <icon name="fa6-regular:circle-check" class="w-6 h-6" />
        <span>{{ successMessage }}</span>
      </div>

      <form class="space-y-4" @submit.prevent="registerWithPassword">
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text text-base">Name</span>
          </div>
          <input
            type="text"
            placeholder="Wuletaw Wonte"
            class="input input-bordered w-full"
            v-model="name"
          />
        </label>
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text text-base">Email address</span>
          </div>
          <input
            type="email"
            placeholder="Email address ..."
            class="input input-bordered w-full"
            v-model="email"
            required
          />
        </label>
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text text-base">Password</span>
          </div>
          <input
            type="password"
            placeholder="••••••••"
            class="input input-bordered w-full"
            v-model="password"
            required
          />
        </label>

        <label class="form-control w-full">
          <div class="label">
            <span class="label-text text-base">Confirm password</span>
          </div>
          <input
            type="password"
            placeholder="••••••••"
            class="input input-bordered w-full"
          />
        </label>

        <div>
          <button type="submit" class="btn btn-block btn-primary">
            Sign Up
          </button>
        </div>
        <div class="flex items-center space-x-2">
          <span class="h-px bg-gray-400 w-full"></span>
          <span class="text-sm text-gray-500">or</span>
          <span class="h-px bg-gray-400 w-full"></span>
        </div>
        <div>
          <button type="button" class="btn btn-block" @click="registerWithAuth">
            <icon name="logos:google-icon" size="1.2rem" />
            Login with Google
          </button>
        </div>

        <span class="text-sm text-center text-gray-600"
          >Already have an account ?
          <nuxt-link
            to="/login"
            class="text-blue-600 hover:text-blue-800 hover:underline"
            >Login
          </nuxt-link></span
        >
      </form>
    </div>
  </div>
</template>
