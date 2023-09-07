<template>
  <div class="flex flex-col justify-center items-center bg-neutral md:bg-base-100 space-y-4 md:h-screen">
      <div class="text-4xl">
          Soundshaper
      </div>
      <div class="flex flex-col items-center rounded-xl md:shadow-xl p-4 bg-neutral w-full max-w-[451px] md:max-w-4xl">
          <div class="flex flex-col-reverse md:flex-row w-full h-full">
              <ShapeList class="basis-1/2 min-h-[376px] max-h-[376px] mt-4 md:mt-0"/>
              <div class="flex flex-col basis-1/2 w-full h-full space-y-2">
                  <ShapeSpinner/>
                  <MasterControl/>
              </div>
          </div>
      </div>
      <div class="md:absolute flex flex-row w-full bottom-0 right-0 p-4 items-center justify-end space-x-2">
          <select class="select bg-neutral md:bg-base-100 max-w-xs" data-choose-theme>
              <option v-for="theme in themes" :key="theme" :value="theme">{{capetelizeFirstLetter(theme)}}</option>
          </select>
          <NuxtLink to="https://github.com/blackburn32/soundshaper">
                <Icon name="mdi:github" size="32"/>
          </NuxtLink>
      </div>
  </div>
</template>
<script setup lang="ts">
import {themeChange} from 'theme-change';

onMounted(() => {
    themeChange(false)
});

const capetelizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const themes = [
    "aqua",
    "pastel",
    "dracula",
    "night",
    "coffee",
];

</script>