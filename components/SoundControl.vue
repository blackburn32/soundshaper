<template>
  <div class="flex flex-row space-x-2">
    <Icon
      name="ph:wave-sine"
      size="32"
      class="shrink-0"
      :class="{
                'text-accent scale-125': shape.waveform === 'sine',
                'text-secondary-content': shape.waveform !== 'sine'
              }"
      @click="shape.waveform = 'sine'"
    />
    <Icon
      name="ph:wave-square"
      size="32"
      class="shrink-0"
      :class="{
                'text-accent scale-125': shape.waveform === 'square',
                'text-secondary-content': shape.waveform !== 'square'
              }"
      @click="shape.waveform = 'square'"
    />

    <Icon
      name="ph:wave-sawtooth"
      size="32"
      class="shrink-0"
      :class="{
                    'text-accent scale-125': shape.waveform === 'sawtooth',
                    'text-secondary-content': shape.waveform !== 'sawtooth'
                }"
      @click="shape.waveform = 'sawtooth'"
    />
    <div class="flex flex-row items-center">
      <div type="text" class="bg-secondary text-xl min-w-[3ch] max-w-[3ch] px-1 text-center">
        {{ note }}
      </div>
      <div class="flex flex-col space-y-2">
        <Icon class="cursor-pointer" name="ic:baseline-plus" size="14" @click="increaseNote" />
        <Icon class="cursor-pointer" name="ic:baseline-minus" size="14" @click="decreaseNote" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Shape } from "~/utils/utils";
import { defineProps } from "@vue/runtime-core";

const props = defineProps({
  shapeId: String
});
const nuxtApp = useNuxtApp();
const shape: Shape = nuxtApp.$getShape(props.shapeId);

const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const noteToFrequency = (note: string) => 440 * Math.pow(2, (notes.indexOf(note) - 9) / 12);
const frequencyToNote = (frequency: number) => {
  return notes[Math.round(12 * Math.log2(frequency / 440)) + 9] || "C";
};

const note = ref(frequencyToNote(shape.frequency));

const nextNote = () => {
  const index = notes.indexOf(note.value);
  if(index === notes.length - 1){
    return notes[0];
  }
  return notes[index + 1];
};

const previousNote = () => {
  const index = notes.indexOf(note.value);
  if(index === 0){
    return notes[notes.length - 1];
  }
  return notes[index - 1];
};

const increaseNote = () => {
  note.value = nextNote();
  shape.frequency = noteToFrequency(note.value);
};

const decreaseNote = () => {
  note.value = previousNote();
  shape.frequency = noteToFrequency(note.value);
};
</script>