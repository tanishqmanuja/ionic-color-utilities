/**
 * source: https://github.com/ionic-team/ionic-docs/blob/main/src/components/page/theming/_utils/color-variables.ts
 */

export type ColorVariable = {
  property?: string;
  value?: string;
  valueRgb?: string;
  contrast?: string;
  contrastRgb?: string;
  tint?: string;
  shade?: string;
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
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950;

export type SteppedColors = Record<Steps, string>;
