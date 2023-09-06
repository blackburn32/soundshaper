<template>
  <div class="flex flex-col w-full space-y-2 px-2">
    <div class="flex flex-row justify-between items-center">
      <Icon
        id="volume-off"
        class="text-neutral-content cursor-pointer"
        name="material-symbols:volume-off"
        size="32"
        @click="volume = 0"
      />
      <input
        v-model="volume"
        class="range range-accent mx-4"
        max="1"
        min="0"
        step="0.01"
        type="range"
      />
      <Icon
        id="volume-up"
        class="text-neutral-content cursor-pointer"
        name="material-symbols:volume-up"
        size="32"
        @click="volume = 1"
      />
    </div>
    <div class="flex flex-row justify-between items-center">
      <Icon
        class="text-neutral-content cursor-pointer"
        name="mdi:tortoise"
        size="32"
        @click="setMinSpeed"
      />
      <input
        type="range"
        v-model="speedPosition"
        class="range range-accent mx-4"
        @input="speed = logSlider(speedPosition)"
        min="0"
        max="100"
        step="0.01"
      />
      <Icon
        class="text-neutral-content cursor-pointer"
        name="mdi:rabbit"
        size="32"
        @click="setMaxSpeed"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const nuxtApp = useNuxtApp();

const volume = nuxtApp.$mainVolume;
const speed = nuxtApp.$speed;
const speedPosition = ref(0);
const minSpeedPosition = 0;
const maxSpeedPosition = 100;
const minSpeed = Math.log(0.1);
const maxSpeed = Math.log(10);
const speedScale = (maxSpeed - minSpeed) / (maxSpeedPosition - minSpeedPosition);

const setMinSpeed = () => {
  speedPosition.value = minSpeedPosition;
  speed.value = 0;
};

const setMaxSpeed = () => {
  speedPosition.value = maxSpeedPosition;
  speed.value = logSlider(maxSpeedPosition);
};
const logSlider = (position: number) => position == 0 ? 0 : Math.exp(minSpeed + speedScale * (position - maxSpeed));
</script>