import React from 'react';
import { render, screen } from '@testing-library/react';
import AppListVirtualised from './list_virtualized/AppListVirtualised';

test('renders learn react link', () => {
  render(<AppListVirtualised />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
