import { act, fireEvent, render, screen } from '@testing-library/react-native';
import React, { useContext } from 'react';
import { Button, Dimensions } from 'react-native';

import { AnimatedToaster } from '@/presentation/components/AnimatedToaster';
import { AnimatedToasterContext } from '@/presentation/contexts';

const { height } = Dimensions.get('window');

const translateY = height * 0.28;

const Trigger = () => {
  const { showToaster } = useContext(AnimatedToasterContext);
  return (
    <Button
      testID={'button'}
      title={'Button'}
      onPress={() => showToaster({ message: 'This is a test message', status: 'warning' })}
    />
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

  it('Should render the component with correct message and status on showToaster call', () => {
    makeSut();

    fireEvent.press(screen.getByTestId('button'));

    expect(screen.getByTestId('animated-toaster')).toBeTruthy();
    expect(screen.getByTestId('animated-toaster-message')).toHaveTextContent('This is a test message');
    expect(screen.getByTestId('animated-toaster-status-bar')).toHaveStyle({
      backgroundColor: 'rgba(201, 123, 13, 1)',
    });
  });

  it('Should animate the component when it is shown', () => {
    jest.useFakeTimers();

    makeSut();
    fireEvent.press(screen.getByTestId('button'));
    const animatedToaster = screen.getByTestId('animated-toaster');

    expect(animatedToaster.props.style[0].top).toBe('-20%');
    expect(animatedToaster).toHaveAnimatedStyle({ transform: [{ translateY: 0 }] });
    act(() => jest.advanceTimersByTime(500));
    expect(animatedToaster).toHaveAnimatedStyle({ transform: [{ translateY }] });
    act(() => jest.advanceTimersByTime(3000));
    expect(animatedToaster).toHaveAnimatedStyle({ transform: [{ translateY }] });
  });

  it('Should finish the animation and hide the component when close button is pressed', () => {
    makeSut();

    fireEvent.press(screen.getByTestId('button'));
    const animatedToaster = screen.queryByTestId('animated-toaster');

    act(() => jest.advanceTimersByTime(2000));
    expect(animatedToaster).toBeOnTheScreen();

    fireEvent.press(screen.getByTestId('close-button'));
    act(() => jest.advanceTimersByTime(500));
    expect(animatedToaster).not.toBeOnTheScreen();
  });

  it('Should remove the component when it is hidden', () => {
    jest.useFakeTimers();

    makeSut();
    fireEvent.press(screen.getByTestId('button'));
    const animatedToaster = screen.queryByTestId('animated-toaster');

    expect(animatedToaster).toBeOnTheScreen();
    act(() => jest.advanceTimersByTime(3000));
    expect(animatedToaster).toBeOnTheScreen();
    act(() => jest.advanceTimersByTime(4000));
    expect(animatedToaster).not.toBeOnTheScreen();
  });
});
