<template>
  <div class="p-0 m-0 min-h-screen min-w-full flex box-border">
    <div class="h-screen w-3/12 fixed bg-white">
      <div class="mt-36 overflow-auto h-4/5">
        <nav class="pl-7">
          <NuxtLink to="/"  class="flex fill-menuText text-menuText font-bold pl-10 py-7" activeClass="bg-buttonColor !text-white !fill-white" >
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-5" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="25" height="25" viewBox="0 0 256 256" xml:space="preserve">
              <defs>
              </defs>
              <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                <path d="M 35.813 54.013 H 4.514 C 2.025 54.013 0 51.987 0 49.498 V 4.514 C 0 2.025 2.025 0 4.514 0 h 31.299 c 2.489 0 4.514 2.025 4.514 4.514 v 44.984 C 40.328 51.987 38.303 54.013 35.813 54.013 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                <path d="M 35.813 90 H 4.514 C 2.025 90 0 87.975 0 85.485 V 69.741 c 0 -2.489 2.025 -4.515 4.514 -4.515 h 31.299 c 2.489 0 4.514 2.025 4.514 4.515 v 15.744 C 40.328 87.975 38.303 90 35.813 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                <path d="M 85.485 90 H 54.187 c -2.489 0 -4.515 -2.025 -4.515 -4.515 V 40.501 c 0 -2.489 2.025 -4.514 4.515 -4.514 h 31.299 c 2.489 0 4.515 2.025 4.515 4.514 v 44.984 C 90 87.975 87.975 90 85.485 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                <path d="M 85.485 24.773 H 54.187 c -2.489 0 -4.515 -2.025 -4.515 -4.515 V 4.514 C 49.672 2.025 51.697 0 54.187 0 h 31.299 C 87.975 0 90 2.025 90 4.514 v 15.745 C 90 22.748 87.975 24.773 85.485 24.773 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
              </g>
            </svg>
            Dashboard
          </NuxtLink>
          <NuxtLink activeClass="bg-buttonColor !text-white !fill-white" class="text-menuText font-bold pl-10 py-7 flex" to="/profile">
            <ClientOnly>
              <div>
                <font-awesome-icon icon="fa-solid fa-user" class="mr-5"/>
              </div>
              Profile
            </ClientOnly>
          </NuxtLink>
          <NuxtLink activeClass="bg-buttonColor !text-white"  class="text-menuText font-bold pl-10 py-7 flex" to="/services">
            <ClientOnly>
              <div class="flex justify-center items-center">
                <font-awesome-icon icon="fa-solid fa-box" class="mr-5"/>
              </div>
              <p>Services</p>
            </ClientOnly>
          </NuxtLink>
          <NuxtLink activeClass="bg-buttonColor !text-white" class="text-menuText font-bold pl-10 py-7 flex" to="/records">
            <ClientOnly>
            <div class="flex justify-center items-center">
              <font-awesome-icon icon="fa-solid fa-clipboard" class="mr-5"/>
            </div>
            Medical Records
            </ClientOnly>
          </NuxtLink>
          <NuxtLink activeClass="bg-buttonColor !text-white" class="text-menuText font-bold pl-10 py-7 flex" to="/wallet">
            <ClientOnly>
              <div class="flex justify-center items-center">
                <font-awesome-icon icon="fa-solid fa-wallet" class="mr-5"/>
              </div>
                Care Wallet
            </ClientOnly>
          </NuxtLink>
          <NuxtLink activeClass="bg-buttonColor !text-white" class="text-menuText font-bold pl-10 py-7 flex" to="/messages">
            <ClientOnly>
            <div class="flex justify-center items-center">
              <font-awesome-icon icon="fa-solid fa-message" class="mr-5"/>
            </div>
            Messages
            </ClientOnly>
          </NuxtLink>
          <NuxtLink activeClass="bg-buttonColor !text-white" class="text-menuText font-bold pl-10 py-7 flex" to="/resources">
            <ClientOnly>
              <div class="flex justify-center items-center">
                <font-awesome-icon icon="fa-solid fa-book" class="mr-5"/>
              </div>
              Resources
            </ClientOnly>
          </NuxtLink>
        </nav>
      
        <hr/>

        <ul class="pl-7">
          <li class="text-menuText font-bold pl-10 py-7 flex">
            <div class="flex justify-center items-center">
              <ClientOnly>
                <font-awesome-icon class="mr-5 h-full"  icon="fa-solid fa-gear" />
              </ClientOnly>
              </div>
              Account settings
          </li>
          <li class="text-menuText font-bold pl-10 py-7 flex">
           <ClientOnly>
            <div class="flex justify-center items-center">
              <font-awesome-icon icon="fa-solid fa-circle-info" class="mr-5" />
            </div>
            Contact support
           </ClientOnly>
          </li>
          <li class="text-menuText font-bold pl-10 py-7 flex">
            <ClientOnly>
              <div class="flex justify-center items-center">
                <font-awesome-icon icon="fa-solid fa-right-from-bracket" class="mr-5" />
              </div>
              Log out
            </ClientOnly>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full bg-mainBg py-10 pr-10 pl-[27%]">
      <div class="w-full flex justify-end mb-8">
       <div class="flex w-72 justify-between">
          <p class="h-auto flex items-center justify-center text-customTxt font-bold opacity-60">Take a tour</p>
          <div class="text-2xl relative flex items-center justify-center text-customTxt">
            <div class="bg-red-500 h-[10px] w-[10px] rounded-xl border-mainBg border-2 absolute top-[7px] right-[-1px]"></div>
            <ClientOnly>
              <font-awesome-icon icon="fa-solid fa-envelope"/>
            </ClientOnly>
          </div>
          <div class="text-2xl flex items-center justify-center text-customTxt opacity-60">
            <ClientOnly>
              <font-awesome-icon icon="fa-solid fa-bell" />
            </ClientOnly>
          </div>
          <div>
            <img src="/img/model.png" height="40" width="40" alt="Doctor" />
          </div>
       </div>
      </div>

      <!-- slot -->
      <slot />
      <!-- slot -->

    </div>
  </div>
</template>

<style>

.NuxtLink-active {
   color: white;
}

</style>