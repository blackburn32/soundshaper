<template>
  <div class="flex flex-row items-center justify-between w-full">

    <div class="flex flex-row items-center">
      <Icon :name="iconName" size="32" class="shrink-0" />
      <input
        ref="cornersInput"
        type="text"
        class="input input-sm input-secondary bg-secondary text-xl max-w-[3ch] px-1 text-center"
        v-model="shape.corners"
        maxlength="2"
      />
      <div class="flex flex-col space-y-2">
        <Icon class="cursor-pointer" name="ic:baseline-plus" size="14" @click="increaseCorners(1)" />
        <Icon class="cursor-pointer" name="ic:baseline-minus" size="14" @click="increaseCorners(-1)" />
      </div>
    </div>

    <color-picker
      :hue="shape.color"
      :initially-collapsed="true"
      @input="(color) => shape.color = color"
      class="shrink-0"
    />

    <sound-control :shape-id="shape.id" />

    <div class="flex flex-row items-center">
      <Icon class="cursor-pointer" :name="muteIcon" @click="shape.muted = !shape.muted" size="32" />
      <Icon class="cursor-pointer" name="ic:baseline-delete" size="32" @click="nuxtApp.$deleteShape(shapeId)" />
    </div>

  </div>
</template>
<script setup lang="ts">
import { getIconName, Shape } from "~/utils/utils";
import ColorPicker from "@radial-color-picker/vue-color-picker";

const props = defineProps({
  shapeId: String
});
const nuxtApp = useNuxtApp();
const shape: Shape = nuxtApp.$getShape(props.shapeId);
const iconName = computed(() => getIconName(shape.corners));
const muteIcon = computed(() => shape.muted ? "material-symbols:volume-off" : "material-symbols:volume-up");

const increaseCorners = (amount: number) => {
  shape.corners = Math.min(99, Number.parseInt("" + shape.corners || "1") + amount);
  shape.corners = Math.max(1, shape.corners);
};

const digitRegex = new RegExp("^[0-9]+$");
const cornersInput = ref<HTMLInputElement | null>(null);
onMounted(() => {
  if(cornersInput.value){
    cornersInput.value.addEventListener("beforeinput", (event) => {
      if(event.data && !digitRegex.test(event.data)){
        event.preventDefault();
      }
    });
    cornersInput.value.addEventListener("input", (event) => {
      if(Number.parseInt(shape.corners)){
        increaseCorners(0);
      }
    });
  }
});
</script>