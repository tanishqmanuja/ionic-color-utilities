import { Color, type RGB } from "./utils/color";
import { type ColorVariable, type SteppedColors } from "./utils/types";

export const generateSteppedColors = (
  background = "#ffffff",
  text = "#000000"
): SteppedColors => {
  const color = new Color(background);
  const colors = new Array(19).fill(null);

  return Object.fromEntries(
    colors.map((_, i) => [
      (i + 1) * 50,
      color.mix(text, ((i + 1) * 5) / 100).hex,
    ])
  ) as SteppedColors;
};

export const generateColor = (value: string): ColorVariable => {
  const color = new Color(value);
  const contrast = color.contrast();
  const tint = color.tint();
  const shade = color.shade();
  const formattedValue = value.startsWith("#") ? value : `#${value}`;

  return {
    value: formattedValue,
    valueRgb: rgbToString(color.rgb),
    contrast: contrast.hex,
    contrastRgb: rgbToString(contrast.rgb),
    tint: tint.hex,
    shade: shade.hex,
  };
};

const rgbToString = (c: RGB): string => {
  return `${c.r},${c.g},${c.b}`;
};
