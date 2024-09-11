/**
 * source: https://github.com/ionic-team/ionic-docs/blob/main/src/components/page/theming/_utils/color-variables.ts
 */

export type ColorVariable = {
  value: string;
  valueRgb: string;
  contrast: string;
  contrastRgb: string;
  tint: string;
  shade: string;
};

export const COLOR_NAMES = [
  "Primary",
  "Secondary",
  "Tertiary",
  "Success",
  "Warning",
  "Danger",
  "Dark",
  "Medium",
  "Light",
] as const;

export type ColorNames = (typeof COLOR_NAMES)[number];

export type Steps =
  | 50
  | 100
  | 150
  | 200
  | 250
  | 300
  | 350
  | 400
  | 450
  | 500
  | 550
  | 600
  | 650
  | 700
  | 750
  | 800
  | 850
  | 900
  | 950;

export type SteppedColors = Record<Steps, string>;
