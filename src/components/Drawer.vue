<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div
      class="drawer-content flex min-h-screen flex-col justify-between bg-base-200"
    >
      <slot></slot>
    </div>

    <div class="drawer-side z-10 md:hidden">
      <label
        for="my-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>

      <ul class="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
        <div class="flex items-center gap-3">
          <div class="avatar">
            <div class="mask mask-squircle h-12 w-12">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div class="font-bold">Hart Hagerty</div>
            <div class="text-sm opacity-50">United States</div>
          </div>
        </div>

        <div class="divider"></div>

        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
</template>
