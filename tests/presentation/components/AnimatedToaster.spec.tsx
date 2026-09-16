// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from "react";
import { render, screen } from "@testing-library/react-native";
import { View } from "react-native";


import { AnimatedToaster } from "@/presentation/components/AnimatedToaster";



const makeSut = () => {
  render(
    <AnimatedToaster>
      <View />
    </AnimatedToaster>
  );
};


describe('AnimatedToaster', () => {
  it('Should not render the component on common state', () => {
    makeSut();

    const animatedToaster = screen.queryByTestId('animated-toaster')

    expect(animatedToaster).toBeNull();
  });
});
