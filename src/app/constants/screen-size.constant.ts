import {ScreenSize} from "../interfaces/screen-size";

export const CustomBreakpoints = {
  Small: '(max-width: 767px)',
  Medium: '(min-width: 768px) and (max-width: 1439px)',
  Large: '(min-width: 1440px)',
};

export const SCREEN_SIZES: Record<string, ScreenSize> = {
  small: { breakpoint: CustomBreakpoints.Small },
  medium: { breakpoint: CustomBreakpoints.Medium },
  large: { breakpoint: CustomBreakpoints.Large },
};

