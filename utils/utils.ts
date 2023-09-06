import { TOscillatorType } from "standardized-audio-context";

export interface Shape {
  id: string;
  name: string;
  corners: number;
  mutes: number[];
  muted: boolean;
  frequency: number;
  waveform: TOscillatorType;
  color: number;
  pings?: { playPing: () => void };
}

export const DEFAULT_SHAPE = (id: string, lastColor?: number) => {
  return {
    id,
    name: `Shape ${id}`,
    corners: 4,
    mutes: [],
    muted: false,
    frequency: randomNoteFromChord(majorChord),
    color: randomColor(),
    waveform: "sine",
    pingDuration: 250
  };
};

export const getIconName: (corners: number) => string = (corners: number) => {
  switch(corners){
    case 1:
      return "ic:baseline-circle";
    case 2:
      return "ic:baseline-square";
    case 3:
      return "mdi:triangle";
    case 4:
      return "ic:baseline-square";
    case 5:
      return "ic:baseline-pentagon";
    case 6:
      return "ic:baseline-hexagon";
    case 7:
      return "bi:heptagon-fill";
    case 8:
      return "ph:octagon-fill";
    default:
      return "ic:baseline-circle";
  }
};

const ShapeColorPalette = [
  43, 0xc6e2e9, 0xf1ffc4, 0xffcaaf, 0xdab894
];

const majorChord = [262, 327.5, 393, 524];
const minorChord = [262, 311.1, 392, 524];

const randomNoteFromChord = (chord: number[]) => {
  const index = Math.floor(Math.random() * chord.length);
  return chord[index];
};

export const randomColor = () => {
  return Math.floor(Math.random() * 360);
};