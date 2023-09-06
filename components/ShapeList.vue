<template>
  <div class="flex flex-col items-center justify-between bg-secondary rounded-xl shadow-xl p-4 space-y-4 w-full h-full">
    <div class="bg-secondary text-secondary-content w-full overflow-y-auto overflow-x-hidden space-y-2">
      <ShapeControl v-for="shape in shapes" :key="shape.id" class="w-full" :shape-id="shape.id" />
    </div>
    <div class="btn btn-accent w-full" @click="addShape">
      Add shape
    </div>
  </div>

</template>
<script setup lang="ts">
const nuxtApp = useNuxtApp();

const shapes = nuxtApp.$shapes;
const addShape = nuxtApp.$addShape;
</script>