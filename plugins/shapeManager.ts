import { Ref } from "@vue/reactivity";
import { DEFAULT_SHAPE, Shape } from "~/utils/utils";
import { nanoid } from "nanoid";
import useAudio from "~/composables/useAudio";

export default defineNuxtPlugin(nuxtApp => {
  const shapes: Ref<Shape[]> = ref([]);
  const {
    audioContext,
    outputNode,
    mainVolume
  } = useAudio();
  const speed: Ref<number> = ref(0);
  
  const lastColor = ref<number | undefined>(undefined);
  
  const addShape = () => {
    const shape = DEFAULT_SHAPE(nanoid(), lastColor.value);
    lastColor.value = shape.color;
    startPingsForShape(shape);
    shapes.value.push(shape);
  };
  
  const deleteShape = (id: string) => {
    const shape = getShape(id);
    if(!shape) return;
    stopPingsForShape(shape);
    shapes.value = shapes.value.filter(shape => shape.id !== id);
  };
  
  const updateShape = (id: string, shape: Shape) => {
    shapes.value = shapes.value.map(s => s.id === id ? shape : s);
  };
  
  const getShape = (id: string) => {
    return shapes.value.find(shape => shape.id === id);
  };
  
  const pingsForShape: Record<string, { start: () => void, stop: () => void }> = {};
  
  const startPingsForShape = (shape: Shape) => {
    shape.pings = usePings(audioContext.value, outputNode, shape, speed);
  };
  
  const stopPingsForShape = (shape: Shape) => {
    pingsForShape[shape.id]?.stop();
  };
  
  watch(speed, (newSpeed, oldSpeed) => {
    if(newSpeed && !oldSpeed){
      shapes.value.forEach(startPingsForShape);
    } else if(newSpeed == 0){
      shapes.value.forEach(stopPingsForShape);
    }
  });
  
  watch(() => shapes.value.map(shape => shape.corners), () => {
    shapes.value.forEach(startPingsForShape);
  });
  
  nuxtApp.provide("mainVolume", mainVolume);
  nuxtApp.provide("audioOutputNode", outputNode);
  nuxtApp.provide("speed", speed);
  nuxtApp.provide("shapes", shapes);
  nuxtApp.provide("addShape", addShape);
  nuxtApp.provide("deleteShape", deleteShape);
  nuxtApp.provide("updateShape", updateShape);
  nuxtApp.provide("getShape", getShape);
});