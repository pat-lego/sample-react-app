import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './header';

test('renders learn react link', () => {
  render(<Header title="Documentation2"></Header>);
  const text = screen.getByText(/Documentation2/i).innerHTML;
  expect(text).toEqual("Documentation2");
});
