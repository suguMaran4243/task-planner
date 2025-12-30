import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Daily Task Planner heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Daily Task Planner/i);
  expect(headingElement).toBeInTheDocument();
});