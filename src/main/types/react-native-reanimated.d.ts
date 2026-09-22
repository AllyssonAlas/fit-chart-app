declare namespace jest {
  // biome-ignore lint/correctness/noUnusedVariables: must match @types/jest Matchers signature
  // biome-ignore lint/complexity/noBannedTypes: must match @types/jest Matchers signature
  interface Matchers<R, T = {}> {
    toHaveAnimatedStyle(
      style: Record<string, unknown>[] | Record<string, unknown>,
      config?: {
        shouldMatchAllProps?: boolean;
      },
    ): R;
    toHaveAnimatedProps(props: Record<string, unknown>): R;
  }
}
