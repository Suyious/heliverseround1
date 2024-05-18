declare module 'webgl-fluid' {
  type FluidOptions = {
    TRANSPARENT?: boolean;
    BLOOM?: boolean;
    INTERVAL?: number;
    SPLAT_RADIUS?: number;
    SPLAT_COUNT?: number;
    // Add more options if needed
  };

  const Fluid: (canvas: HTMLCanvasElement | null, options?: FluidOptions) => void;

  export default Fluid;
}