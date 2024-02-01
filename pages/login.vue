<template>
  <div class="flex flex-col justify-center h-full overflow-hidden">
    <div
      class="my-8 w-full p-6 m-auto bg-base-100 rounded-md shadow-md lg:max-w-lg"
    >
      <h1 class="text-2xl font-semibold text-content-base">
        Sign in to your account
      </h1>
      <hr class="my-4" />
      <form class="space-y-4">
        <div>
          <label class="label">
            <span class="text-base label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email Address"
            class="w-full input input-bordered"
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
