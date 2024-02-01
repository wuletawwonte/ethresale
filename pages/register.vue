<script setup lang="ts">
const client = useSupabaseClient();
const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const errorMessage = ref();

const register = async () => {
  errorMessage.value = '';
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
  } catch (error: any) {
    errorMessage.value = error.message;
  }
};
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
        <span>{{ errorMessage.value }}</span>
      </div>

      <form class="space-y-4" @submit.prevent="register">
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
