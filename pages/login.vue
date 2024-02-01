<template>
  <div class="flex flex-col justify-center h-full overflow-hidden">
    <div
      class="my-8 w-full p-6 m-auto bg-base-200 rounded-md shadow-md lg:max-w-lg"
    >
      <h1 class="text-3xl font-semibold text-center text-gray-700">Login</h1>
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
            placeholder="Enter Password"
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
      </form>
    </div>
  </div>
</template>
