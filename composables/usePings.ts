import { IAudioContext, IGainNode, IOscillatorNode } from "standardized-audio-context";
import { Shape } from "~/utils/utils";
import { Ref } from "@vue/reactivity";

export default function usePings(
  audioContext: IAudioContext,
  outputNode: IGainNode<IAudioContext>,
  shape: Shape,
  speed: Ref<number>
) {
  
  const pingDuration = computed(() => {
    if(speed.value == 0) return 0;
    
    const corners = shape.corners as number;
    
    const speedMultiplier = 1 / speed.value;
    const cornersMultiplier = corners / 4;
    
    return 250 * speedMultiplier * cornersMultiplier;
  });
  
  const playPing = () => {
    if(speed.value <= 0.06) return;
    const oscillatorNode = audioContext.createOscillator();
    oscillatorNode.frequency.value = shape.frequency;
    oscillatorNode.type = shape.waveform;
    oscillatorNode.start();
    
    const noteGainNode = audioContext.createGain();
    noteGainNode.gain.value = shape.muted ? 0 : 1;
    noteGainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + (pingDuration.value / 2000));
    
    oscillatorNode.connect(noteGainNode);
    noteGainNode.connect(outputNode);
    setTimeout(() => cleanupNote(oscillatorNode, noteGainNode), pingDuration.value / 2);
  };
  
  const cleanupNote = (oscillatorNode: IOscillatorNode<IAudioContext>, gainNode: IGainNode<IAudioContext>) => {
    oscillatorNode.stop();
    oscillatorNode.disconnect();
    gainNode.disconnect();
  };
  
  
  return {
    playPing
  };
}