/* eslint-disable no-undef */
/** @format */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Index from '../src/pages/index.tsx';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Index />);

    const heading = screen.getByRole('heading', {
      name: 'tring again',
    });

    expect(heading).toBeInTheDocument();
  });
});
