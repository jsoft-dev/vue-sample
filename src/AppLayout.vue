<template>
  <div>
    <div class="w-full flex flex-col h-screen">
      <div class="w-full h-[50px] bg-blue-500 flex justify-end">
        <div>logout</div>
      </div>
      <div class="flex h-full">
        <div class="w-1/12 bg-green-500 flex flex-col">
          <div class="cursor-pointer">
            <router-link to="/students">students</router-link>
          </div>
          <div class="cursor-pointer">
            <router-link to="/cources">cources</router-link>
          </div>
        </div>
        <div class="w-11/12 bg-red-300">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>

</style>