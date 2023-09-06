import { IAudioContext } from "standardized-audio-context";
import { Ref } from "@vue/reactivity";

export default function useAudio() {
  const audioContext: Ref<IAudioContext> = ref(new AudioContext());
  const outputNode = audioContext.value.createGain();
  const mainVolume = ref(0.5);
  outputNode.gain.value = mainVolume.value;
  outputNode.connect(audioContext.value.destination);
  
  const updateVolume = () => {
    resumeAudioContext();
    outputNode.gain.value = mainVolume.value;
  };
  
  const resumeAudioContext = () => {
    if(audioContext.value.state === "suspended"){
      audioContext.value.resume();
    }
  };
  
  watch(mainVolume, updateVolume);
  
  return {
    audioContext,
    outputNode,
    mainVolume
  };
}