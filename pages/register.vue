<template>
  <div
    class="relative flex flex-col justify-center min-h-screen overflow-hidden py-8"
  >
    <div
      class="w-full p-6 mx-auto bg-base-100 rounded-md shadow-md lg:max-w-xl"
    >
      <h1 class="text-2xl font-semibold text-center">Register</h1>
      <hr class="my-4" />
      <form class="space-y-4">
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text text-base">First name</span>
          </div>
          <input
            type="text"
            placeholder="First name ..."
            class="input input-bordered w-full"
          />
        </label>
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text text-base">Last name</span>
          </div>
          <input
            type="text"
            placeholder="Last name ..."
            class="input input-bordered w-full"
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
          <button class="btn btn-block btn-primary">Sign Up</button>
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
