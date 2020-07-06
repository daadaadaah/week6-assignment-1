import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    regions: [],
    categories: [],
    restaurants: [],
  }));

  context('with path /', () => {
    it('renders the home page', () => {
      const { container } = render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /about', () => {
    it('renders the home page', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>,
      );

      expect(container).toHaveTextContent('소개');
    });
  });
});
