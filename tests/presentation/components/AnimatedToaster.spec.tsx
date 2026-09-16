import { act, fireEvent, render, screen } from '@testing-library/react-native';
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

  it('Should purge the component when close button is pressed', () => {
    makeSut();

    fireEvent.press(screen.getByTestId('button'));
    expect(screen.getByTestId('animated-toaster')).toBeTruthy();

    fireEvent.press(screen.getByTestId('close-button'));
    expect(screen.queryByTestId('animated-toaster')).toBeNull();
  });

  it('Should hide the component after 3 seconds if no action is taken', () => {
    jest.useFakeTimers();

    makeSut();

    fireEvent.press(screen.getByTestId('button'));

    expect(screen.getByTestId('animated-toaster')).toBeTruthy();
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    expect(screen.getByTestId('animated-toaster')).toBeTruthy();
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    expect(screen.queryByTestId('animated-toaster')).toBeNull();
  });
});
