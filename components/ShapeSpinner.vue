<template>
  <div class="flex flex-row w-full h-full justify-between">
    <div class="w-[40px]" />
    <canvas class="z-10 rounded-xl bg-base-100 w-[300px] h-[300px]" ref="canvas" />
    <div class="flex flex-col items-center space-y-2 my-2 w-[40px]">
      <Icon class="shrink-0 text-neutral-content" name="ic:outline-zoom-in" size="32" />
      <input min="-5" :max="maxDepth" step="0.01" v-model="zoom" type="range" class="range-vertical h-full" />
      <Icon class="shrink-0 text-neutral-content" name="ic:outline-zoom-out" size="32" />
    </div>
  </div>
</template>
<script setup lang="ts">
import * as THREE from "three";
import { Vector2, Vector3 } from "three";
import { Shape } from "~/utils/utils";
import { Ref } from "@vue/reactivity";
import { MeshLineGeometry, MeshLineMaterial } from "@lume/three-meshline";

const canvas = ref<HTMLCanvasElement | undefined>(undefined);
const nuxt = useNuxtApp();
const shapes: Ref<Shape[]> = nuxt.$shapes;
const zStep = 3;
const maxDepth = computed(() => shapes.value.length * zStep * 2);
const zoom = ref(0);

const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
camera.position.z = -7;
camera.lookAt(0, 0, 0);

const centerDot = new THREE.Mesh(
  new THREE.SphereGeometry(0.1, 32, 32),
  new THREE.MeshBasicMaterial({ color: 0x000000 })
);
const triggerLineGeometry = new MeshLineGeometry();
triggerLineGeometry.setPoints([new Vector3(0, 10, 0), new Vector3(0, 4, 0)]);
const triggerLineMaterial = new MeshLineMaterial({
  color: 0x000000,
  lineWidth: 0.1,
  resolution: new Vector2(300, 300)
});
const triggerLine = new THREE.Mesh(triggerLineGeometry, triggerLineMaterial);

const cameraGroup = new THREE.Group();
cameraGroup.add(camera);
cameraGroup.add(centerDot);
cameraGroup.add(triggerLine);
scene.add(cameraGroup);

const meshesToShapes: Record<string, Shape> = {};
const shapeGroup = new THREE.Group();
watch(shapes, () => {
  shapeGroup.clear();
  shapes.value.forEach((shape, index) => {
    const coordinates = placePointsAroundCircle(shape.corners, index * zStep);
    const line = new MeshLineGeometry();
    line.setPoints(coordinates);

    const material = new MeshLineMaterial({
      color: `hsl(${shape.color}, 100%, 50%)`,
      lineWidth: 0.5,
      resolution: new Vector2(300, 300)
    });
    const mesh = new THREE.Mesh(line, material);

    mesh.translateZ(index * zStep);
    mesh.rotateZ(Math.PI / 2); // Put initial point at the top

    meshesToShapes[mesh.uuid] = shape;
    shapeGroup.add(mesh);
  });
  scene.add(shapeGroup);
}, { deep: true });
const setup = () => {

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    alpha: true
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(300, 300);

  const animate = (timestamp: DOMHighResTimeStamp) => {
    cameraGroup.position.setZ(zoom.value);

    const stepSize = getStepSize(timestamp);
    const previousRotation = shapeGroup.rotation.z;
    const newRotation = previousRotation + stepSize;

    shapeGroup.rotation.z += stepSize;

    shapeGroup.children.map(child => child as THREE.Mesh).forEach((mesh: THREE.Mesh) => {
      const shape = meshesToShapes[mesh.uuid];
      if(shape){
        const shapeRotationBefore = previousRotation % (Math.PI * 2 / shape.corners);
        const shapeRotationAfter = newRotation % (Math.PI * 2 / shape.corners);

        if(shapeRotationBefore > shapeRotationAfter){
          shape.pings?.playPing();
        }
      }
    });

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  const startTime = new Date().getTime();
  let previousTime = new Date().getTime();
  // speed of 1 = 1 rotation per second
  const getStepSize = (currentTime: DOMHighResTimeStamp) => {
    const speed = nuxt.$speed.value;
    const timePassed = currentTime - previousTime;
    previousTime = currentTime;
    return (timePassed / 1000) * speed * Math.PI * 2;
  };

  animate(startTime);
};

const placePointsAroundCircle = (numberOfPoints: number, z: number, center: {
  x: number, y: number
} = {
  x: 0,
  y: 0
}) => {
  const coordinates = [];
  const radius = 5;
  const angle = 2 * Math.PI / numberOfPoints;
  for(let i = 0; i < numberOfPoints; i++){
    const x = center.x + radius * Math.cos(angle * i);
    const y = center.y + radius * Math.sin(angle * i);
    coordinates.push(new Vector3(x, y, z));
  }
  if(coordinates.length > 2){
    coordinates.push(coordinates[0]);
  } else if(coordinates.length < 2){
    coordinates.push(new Vector3(0, 0, z));
  }
  return coordinates;
};

onMounted(() => {
  setup();
});
</script>
<style>
.range-vertical {
  writing-mode: bt-lr; /* IE */
  -webkit-appearance: slider-vertical; /* Chromium */
}
</style>