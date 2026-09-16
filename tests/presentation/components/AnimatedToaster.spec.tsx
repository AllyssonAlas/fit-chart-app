import { fireEvent, render, screen } from '@testing-library/react-native';
import React, { useContext } from 'react';
import { Button } from 'react-native';

import { AnimatedToaster } from '@/presentation/components/AnimatedToaster';
import { AnimatedToasterContext } from '@/presentation/contexts';

const Trigger = () => {
  const { showToaster } = useContext(AnimatedToasterContext);
  return (
    <Button testID={'button'} title={'Button'} onPress={() => showToaster({ message: 'This is a test message' })} />
  );
};

const makeSut = () => {
  render(
    <AnimatedToaster>
      <Trigger />
    </AnimatedToaster>,
  );
};

describe('AnimatedToaster', () => {
  it('Should not render the component on common state', () => {
    makeSut();

    const animatedToaster = screen.queryByTestId('animated-toaster');

    expect(animatedToaster).toBeNull();
  });

  it('Should render the component with correct message on showToaster call', () => {
    makeSut();

    fireEvent.press(screen.getByTestId('button'));

    expect(screen.getByTestId('animated-toaster')).toBeTruthy();
    expect(screen.getByTestId('animated-toaster-message')).toHaveTextContent('This is a test message');
  });
});
