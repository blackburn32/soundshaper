<template>
  <div class="flex flex-col justify-center items-center w-screen h-screen bg-base-100 space-y-4">
      <div class="text-4xl bg-base">
          Soundshaper
      </div>
      <div class="flex flex-col items-center rounded-xl shadow-xl p-4 bg-neutral artboard artboard-horizontal phone-5">
          <div class="flex flex-row w-full h-full">
              <ShapeList class="basis-1/2"/>
              <div class="flex flex-col basis-1/2 w-full h-full">
                  <ShapeSpinner/>
                  <MasterControl/>
              </div>
          </div>
      </div>
      <div class="absolute flex flex-row bottom-0 right-0 p-4 items-center space-x-2">
          <select class="select max-w-xs" data-choose-theme>
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
    "dark",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "pastel",
    "dracula",
    "night",
    "coffee",
];

</script>