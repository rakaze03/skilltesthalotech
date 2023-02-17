<script>
export default {
    name: "NavBar"
}
</script>
<template>
     <nav class="bg-gray-100 rounded shadow-lg">
    <div class="max-w-6xl mx-auto">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <div class="flex items-center space-x-3">
            <span class="font-bold">RS Halotec</span>
          </div>
        </div>
        <div class="hidden md:flex items-center space-x-3">
          <RouterLink to="/" class="py-4 px-3 text-gray-700 hover:bg-amber-200"
            >Home</RouterLink
          >
          <RouterLink
            to="/patients"
            class="py-4 px-3 text-gray-700 hover:bg-amber-200"
            >Patients</RouterLink
          >
          <RouterLink
            to="/babies"
            class="py-2 px-3 text-gray-700 hover:bg-amber-200"
            >Birth Histories</RouterLink
          >
        </div>
      </div>
    </div>
  </nav>
</template>