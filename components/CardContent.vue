<template>
   <div class="w-6/12  mt-10">
      <label for="MRI " class="text-dis text-sm"><slot/></label>
      <button id="MRI" data-dropdown-toggle="dropdownDivider" class="w-full flex justify-between text-dis border-dis border-2  rounded-lg px-4 py-2.5" type="button">*Specify
        <ClientOnly>
          <font-awesome-icon icon="fa-solid fa-chevron-down" disabled/>
        </ClientOnly>
      </button>
    </div>
</template>
