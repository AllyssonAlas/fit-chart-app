import { render, screen } from '@testing-library/react-native';
// biome-ignore lint/correctness/noUnusedImports: React is required for JSX
import React from 'react';

import { Picker } from '@/presentation/components';

const renderPicker = (placeholder?: string) => {
  render(
    <Picker
      label="any_label"
      name="any_name"
      items={[{ label: 'any_label', value: 'any_value' }]}
      onValueChange={() => {}}
      {...(placeholder !== undefined ? { placeholder } : {})}
    />,
  );
};

describe('Picker', () => {
  it('Should render Picker with standard placeholder value', () => {
    renderPicker();

    expect(screen.getByDisplayValue('Escolha uma opção')).toBeTruthy();
  });

  it('Should render Picker with the given placeholder', () => {
    renderPicker('any_placeholder');

    expect(screen.getByDisplayValue('any_placeholder')).toBeTruthy();
  });
});
